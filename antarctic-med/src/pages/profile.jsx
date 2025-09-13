import { useEffect, useState } from "react";
import CenteredComponent from "../components/CenteredComponent";
import { deleteUser, fetchUserAttributes, signOut, updateUserAttributes } from '@aws-amplify/auth';
import { useNavigate } from "react-router-dom";

export default function ProfilePage({ user }){
    const [userDetails, setUserDetails] = useState({});
    const [conditions, setConditions] = useState('');
    const [notes, setNotes] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchUserDetails() {
            try{
                const attributes = await fetchUserAttributes();
                setUserDetails(attributes);
                setConditions(attributes["custom:conditions"] || '');
                setNotes(attributes["custom:notes"] || '');
            } 
            catch (e){
            console.error("Error fetching user attributes:", e);
        }
    }
    if(user) fetchUserDetails();
    }, [user]);

    function goToMetrics () {
        navigate("/metrics");
    }

    async function deleteAccount() {
        try{
            await deleteUser();
            alert("Your account has been successfully deleted.");
        }
        catch (e){
            console.error("Error deleting account:", e);
            alert("Failed to delete account. Please try again.");
        }
    }

    async function handleSave() {
        try{
            await updateUserAttributes({
                userAttributes: {
                    'custom:conditions': conditions,
                    'custom:notes': notes,
                }
            });
        }
        catch (e){
            console.error("Error saving details:", e);
            alert("Failed to update profile.");
        }
    }

    if(!user){
        return (
            <CenteredComponent>
                <div className="pt-24 text-center text-lg px-4">
                    <p className="text-xl">Sign in to save progress and manage sessions.</p>
                </div>
            </CenteredComponent>
        )
    }
    return (
        <>
        <div className="relative w-full h-64 bg-cover bg-center flex items-center justify-center text-white">
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <h1 className="relative text-4xl md:text-5xl font-bold z-10">My Account</h1>
        </div>

        <CenteredComponent>
            <div className="flex flex-col md:flex-row gap-8 p-12 w-full max-w-5xl">
            <div className="flex-1 bg-white shadow-lg rounded-lg p-8">
                <h2 className="text-2xl font-semibold mb-4">Account Details</h2>
                <p><span className="font-bold">Name:</span> {userDetails.name}</p>
                <p><span className="font-bold">Gender:</span> {userDetails.gender}</p>
                <p><span className="font-bold">Email:</span> {userDetails.email}</p>
                <p><span className="font-bold">Birthday:</span> {userDetails.birthdate}</p>
                <br></br>
                <textarea className="w-full border rounded p-2" rows="3" placeholder="Enter patient medical conditions" value={conditions} onChange={(e) => setConditions(e.target.value)}/>
                <textarea className="w-full border rounded p-2" rows="3" placeholder="Enter additional patient notes" value={notes} onChange={(e) => setNotes(e.target.value)}/>
                <button className="w-full px-4 py-3 rounded-lg bg-green-400 text-white hover:bg-green-500 transition mb-4" onClick={handleSave}> Save Notes </button>
            </div>

            <div className="flex-1 bg-white shadow-lg rounded-lg p-8 space-y-4">
            <h2 className="text-2xl font-semibold mb-4">Manage Account</h2>
            
            <button className="w-full px-4 py-3 rounded-lg bg-sky-400 text-white hover:bg-sky-500 transition mb-4" onClick={goToMetrics}> View Metrics </button>
            <button className="w-full px-4 py-2 rounded-lg bg-gray-400 text-white hover:bg-gray-500 transition" onClick={signOut}> Sign Out </button>
            <button className="w-full px-4 py-2 rounded-lg bg-red-400 text-white hover:bg-red-500 transition" onClick={deleteAccount}> Delete Account </button>
            
            </div>
        </div>
    </CenteredComponent>
</>
  );
}