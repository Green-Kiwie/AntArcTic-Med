import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import DesignedButton from './DesignedButton';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkalyaw");
  if (state.succeeded) {
      return <p>Thank you for submission! We will get back to you shortly!</p>;
  }
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email" className=''>
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <textarea
        id="message"
        name="message"
        style={{resize: "none"}}
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
        {/* <button type="submit" disabled={state.submitting} className='bg-sky-400 hover:bg-sky-400 text-white hover:text-sky-800
            px-8 py-4 inline-block text-center shadow-lg
            font-semibold text-base transition duration-300 ease-in-out transform hover:scale-105'>
          Submit
        </button> */}
        <DesignedButton type={"submit"} disabled={state.submitting} content={'Submit'}/>
    </form>
  );
}


