import PetComponent from "../game/petsgame/Pets"
import CenteredComponent from "../components/CenteredComponent";

export default function PetPage({ user }){
    return (
        <CenteredComponent>
            <PetComponent />
        </CenteredComponent>
    )
}