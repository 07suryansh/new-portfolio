import React, { useRef } from 'react'
// import emailjs from '@emailjs/browser';

export default function Contact() {

  // const form = useRef();

  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
  //     .then((result) => {
  //         console.log(result.text);
  //     }, (error) => {
  //         console.log(error.text);
  //     });
  // };


  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center p-2 mx-[35rem] mt-8 border-blue-500 border-b-4">
          Contact
        </h1>
      </div>
      {/* <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form> */}
    </div>
  )
}
