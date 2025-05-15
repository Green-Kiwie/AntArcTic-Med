// Standard button which takes in content (the text the button will hold) and link
// Example use:
// <Button content="Go to about" link="/about" />

function Designed_Button({id, content, onClick, onClickParameters, 
                            colorClass = "bg-blue-300", hoverColorClass = "hover:bg-blue-600"}) {

    

    const color_text = `${colorClass} ${hoverColorClass}`
    return (
        <button
            // href={link}
            id = {id}
            target="_blank" rel="noreferrer"
            onClick={(event) => onClick(event, onClickParameters)} // To get the id for search for correct card
            className={`${color_text} hover:text-white
             px-6 py-3 inline-block text-center shadow-lg
             font-semibold text-base transition duration-300 ease-in-out transform hover:scale-105`}
            style={{ borderRadius: "25px" }}
        >
            {content}
        </button>
    );
}

export default Designed_Button;