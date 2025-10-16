import DesignedButton from "../components/DesignedButton";
import ContactForm from "./form";

function ContactButton() {
    const link = "mailto:medtechatuci@gmail.com";


    return (
        <div className="flex h-screen items-center justify-center">
         <DesignedButton onClick={() => {window.open(link, '_blank', 'noreffer');}} content = {"Contact Us!"}>
         </DesignedButton>

        </div>  
       
    );
}

export default function Contact(){
    return (
        <>
            <ContactButton />
            <ContactForm />
        </>
    )
    
}


