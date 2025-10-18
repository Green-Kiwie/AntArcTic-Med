// Standard button which takes in content (the text the button will hold) and link
// Example use:
// <Button content="Go to about" link="/about" />

function DesignedButton({id, content, onClick, onClickParameters, disabled, type = "button",
                            colorClass = "bg-sky-400", hoverColorClass = "hover:bg-sky-400", 
                            size = 'base', className = "default"}) {

    const color_text = `${colorClass} ${hoverColorClass}`
    if (className === "default") {
        className = `${color_text} text-white hover:text-sky-800
            px-8 py-4 inline-block text-center shadow-lg
            font-semibold text-${size} transition duration-300 ease-in-out transform hover:scale-105`;
    }
    if (onClick == null) {
        onClick = () => {};
    }
    return (
        <button
            // href={link}
            id = {id}
            target="_blank" rel="noreferrer"
            onClick={(event) => onClick(event, onClickParameters)} // To get the id for search for correct card
            disabled={disabled}
            type ={type}
            className={className}
            style={{ borderRadius: "25px" }}
        >
            {content}
        </button>
    );
}

export default DesignedButton;