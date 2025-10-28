import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import DesignedButton from './DesignedButton';

export default function ContactForm() {
  const [state, handleSubmit] = useForm("xjkalyaw");
  if (state.succeeded) {
    return (
      <p className="flex text-white justify-center items-center">
        Thank you for submission! We will get back to you shortly!
      </p>
    );
  }

  return (
    <div className="flex flex-row gap-10 items-start bg-sky-600 rounded-[32px] font-bold shadow-lg shadow-black/30 px-8 py-6">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-[600px]"
      >
        <div>
          <label htmlFor="name" className='text-white'>Name:</label>
          <input id="name" type="text" name="name" className="w-full p-2 rounded-md" />
          <ValidationError prefix="Name" field="name" errors={state.errors} />
        </div>

        <div>
          <label htmlFor="email" className='text-white'>Email Address:</label>
          <input id="email" type="email" name="email" className="w-full p-2 rounded-md" />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-white mb-2 font-bold">
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            className="h-40 w-full p-2 rounded-md"
            style={{ resize: "none" }}
          />
        </div>

        <ValidationError prefix="Message" field="message" errors={state.errors} />
        <DesignedButton type="submit" disabled={state.submitting} content="Submit" />
      </form>

      <div className="w-[400px] h-[400px]">
        <img
          src={`${process.env.PUBLIC_URL}/contactUsImage.jpg`}
          alt="Contact illustration"
          className="w-90 h-80 object-cover rounded-[32px]"
        />
      </div>
    </div>
  );
}

