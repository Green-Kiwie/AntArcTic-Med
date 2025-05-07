// Centers all components listed in between
// Example use:
//<CenteredComponent>
//    <Button content="Go to Homepage" link="/" />
//    <Button content="Other link" link="/" />
//</CenteredComponent>

function CenteredComponent({ children }) {
    return (
        <div className="flex items-center justify-center">
            {children}
        </div>
    );
}

export default CenteredComponent;