
import CenteredComponent from "../components/CenteredComponent";

export default function ProfilePage({ user }){
    return (
        <CenteredComponent>
            <div className="pt-24 text-center text-lg px-4">
                {user ? <h2>Welcome.</h2> : <p>Sign in to save progress and manage sessions.</p>}
            </div>
        </CenteredComponent>
    )
}