// Standard button which takes in content (the text the button will hold) and link
// Example use:
// <Button content="Go to about" link="/about" />

function Designed_Button({id, content, onClick, onClickParameters, disable,
                            colorClass = "bg-sky-400", hoverColorClass = "hover:bg-sky-400", size = 'base'}) {

    

    const color_text = `${colorClass} ${hoverColorClass}`
    return (
        <button
            // href={link}
            id = {id}
            target="_blank" rel="noreferrer"
            onClick={(event) => onClick(event, onClickParameters)} // To get the id for search for correct card
            disabled={disable}
            className={`${color_text} text-white hover:text-sky-800
             px-8 py-4 inline-block text-center shadow-lg
             font-semibold text-${size} transition duration-300 ease-in-out transform hover:scale-105`}
            style={{ borderRadius: "25px" }}
        >
            {content}
        </button>
    );
}

export default Designed_Button;