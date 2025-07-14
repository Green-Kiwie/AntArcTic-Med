import CenteredComponent from "../components/CenteredComponent";

export default function MetricsPage() {
	return (
        <CenteredComponent>
           <div className="pt-24 text-center text-lg px-4">
                <p>
                    The average metrics will go here when we get them from AWS.
                    The individual metrics will be shown on the game page after the game.
                </p>
            </div>
            
        </CenteredComponent>
	);
}