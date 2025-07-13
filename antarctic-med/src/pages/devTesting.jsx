import CenteredComponent from "../components/CenteredComponent";
import PageLayout from "../components/PageLayout";
import Button from "../components/Button";

export default function DevTesting() {
    return (
        <PageLayout heading="Testing">
            <CenteredComponent>
                <Button content="Go to Homepage" link="/" />
            </CenteredComponent>
        </PageLayout>
    );
}