import NavBar from '../components/NavBar';
import PageLayout from "../components/PageLayout";
import CenteredComponent from "../components/CenteredComponent";
import TextDisplay from "../components/TextDisplay";

export default function MetricsPage() {
	return (
		<PageLayout>
			<CenteredComponent>
                <NavBar />
				<TextDisplay>
					<p>The average metrics will go here when we get them from AWS. 
                        The individual metrics will be shown on the game page after the game. 
                    </p>
				</TextDisplay>
			</CenteredComponent>
		</PageLayout>
	);
}