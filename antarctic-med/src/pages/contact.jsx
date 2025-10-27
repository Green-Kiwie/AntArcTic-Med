import ContactForm from "../components/form";

function ContactDescription() {
    return (
        <div className="mx-20 my-10 text-lg text-gray-800">
            <p className="mb-4">
                Get in touch with us through our contact form. We're here to assist you with any inquiries you may have. You can also access our Linktree for our socials below.
            </p>

        </div>
    );
}

export default function Contact() {
    return (
        <>
            <div className="flex flex-col min-h-screen bg-white">
                <div className="flex justify-center items-start pt-20">
                    <div className="bg-sky-700 w-full max-w-[1300px] rounded-xl shadow-lg">
                        <h1 className="text-white text-6xl font-bold text-left pt-10 px-10">Contact Us</h1>
                        <div className="px-10 py-8">
                            <ContactForm />
                        </div>
                    </div>
                </div>

                <ContactDescription />

                <div className="bg-sky-950 py-16">
                    <div className="flex justify-center gap-10">
                        <a
                            href="https://www.instagram.com/medtechuci/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/instaLogo.jpg`}
                                alt="Instagram"
                                className="w-16 h-16 rounded-full hover:scale-110 transition-transform duration-200"
                            />
                        </a>
                        <a
                            href="https://linktr.ee/medtechuci"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkTree"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/linktreeLogo.png`}
                                alt="LinkTree"
                                className="w-16 h-16 rounded-full hover:scale-110 transition-transform duration-200"
                            />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/yourprofile"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/linkedinLogo.png`}
                                alt="LinkedIn"
                                className="w-16 h-16 rounded-full hover:scale-110 transition-transform duration-200"
                            />
                        </a>
                        <a
                            href="https://discord.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Discord"
                        >
                            <img
                                src={`${process.env.PUBLIC_URL}/discordLogo.png`}
                                alt="Discord"
                                className="w-16 h-16 rounded-full hover:scale-110 transition-transform duration-200"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
