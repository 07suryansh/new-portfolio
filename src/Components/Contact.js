import React, {useRef } from 'react'
import emailjs from '@emailjs/browser';
import whatsapp from '../Images/whatsapp.webp'

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_sdi4qpl', 'template_mm1wv2e', form.current, 'Nv_T7qfhR9xOnMAaD')
      .then((result) => {
          console.log(result.text);
          console.log("message sent");
          alert("message sent");

      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center p-2 mx-[35rem] mt-8 border-blue-500 border-b-4">
          Contact
        </h1>
      </div>
          <div className='items-center px-40 py-14'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col px-80 py-8'>
                  <div className='flex flex-row m-2'>
                <label className='w-24'>Name</label>
                <input type="text" placeholder='Enter your name' name="user_name" className='mx-4 w-96 border-solid border-2 border-blue-500 rounded-md px-2 py-1' />
                  </div>
                  <div className='flex flex-row m-2'>
                <label className='w-24'>Email</label>
                <input type="email" placeholder='Enter your mail' name="user_email" className='mx-4 w-96 border-solid border-2 border-blue-500 rounded-md px-2 py-1' />
                  </div>
                  <div className='flex flex-row m-2'>
                <label className='w-24'>Message</label>
                <textarea name="message" placeholder='Enter your message' className='mx-4 w-96 h-28  border-solid border-2 border-blue-500 rounded-md px-2 py-1' />
                  </div>
                    <div className='flex items-stretch'>
                <button type="submit" value="Send" className='border-solid border-2 border-blue-500 rounded-md py-2 px-4 mx-60 my-4 hover:text-white text-center transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-200'>Send</button>
                    </div>
                </form>
                <div className='flex flex-row items-center mx-96 px-20 my-2'>
                <img src={whatsapp} alt=""className='w-[3rem] m-2' />
                <h1>+91 9889666781</h1>
                </div>
          </div>
          
            
          
        
    </div>
  )
}
