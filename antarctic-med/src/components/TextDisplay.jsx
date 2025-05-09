// Displays all components or text listed in between
// Example use:
//<TextDisplay>
//    Hello there!
//    Second line
//</TextDisplay>

function TextDisplay({ children }) {
    return (
        <div className="flex flex-col items-center justify-center space-y-4 text-center text-black"
        style={{ fontSize: "2.5vmin" }}>
            {children}
        </div>
    );
}

export default TextDisplay;