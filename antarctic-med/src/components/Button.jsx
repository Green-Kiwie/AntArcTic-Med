function Button({content, link}) {
    return (
        <a
            href={link}
            target="_blank" rel="noreferrer"
            className="bg-[#a2b9ff] text-white hover:bg-[#435aa0] hover:text-white
             px-6 py-3 inline-block text-center shadow-lg
             font-semibold text-base transition duration-300 ease-in-out transform hover:scale-105"
            style={{ borderRadius: "25px" }}
        >
            {content}
        </a>
    );
}

export default Button;