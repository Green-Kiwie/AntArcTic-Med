import ContactForm from "../components/form";

function ContactDescription() {
    return (
        <div className="mx-20 my-20">
            <p>Get in touch with us through our contact form. We're here to assist you with any inquiries you may need. You can also access our linktree for our socials below.</p>
            <a href="https://linktr.ee/medtechuci" className="text-sky-600 underline">linktr.ee/medtechuci</a>

        </div>
        
    );
}



export default function Contact(){
    return (
        <>
            <div className="flex flex-col">
                <div className="bg-white block h-[50vh]">
                    <ContactDescription />
                </div>        
                <div className="bg-sky-950 mx-0 my-0 block h-[50vh]">
                    <div className="block h-[50vh] flex flex-col justify-end items-center">
                    <ContactForm />
                    </div>
                    
                </div>
            </div>
            
        </>
    )
    
}


