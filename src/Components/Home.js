import React from 'react';
import Me from "../Images/MySelfie.png";
import mail from "../Images/mail.webp";
import github from "../Images/github.png";
import linkedin from "../Images/linkedin.png";


export default function Home() {



const openInNewTab=url=>{
    window.open(url,'_blank','noopener,noreferrer');
}

  return (
   <>
        <div className="conataine py-40 flex">
        <div className="container pl-12">
          <h2 className="text-4xl py-2 font-extralight">Namaste, This is</h2>
          <h1 className="text-7xl py-2 font-extralight">
            Suryansh Singh Bisen
          </h1>
          <h2 className="text-4xl py-4 font-extralight">
            Web Developer & Graphic Designer
          </h2>
          <button
            className="border-solid border-2
             border-blue-500 rounded-md py-2 px-4 mt-4
             hover:text-white
        
             active:bg-blue-900
               transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-200 
               "
            // onClick={(e) => {
            //   e.preventDefault();
            //   window.location.href =
            //     "https://drive.google.com/file/d/1TQ1ObIeRttk_kCQzgkxZ2T5RjLSLMqlL/view?usp=sharing";
            // }}

            onClick={()=>openInNewTab("https://drive.google.com/file/d/1TQ1ObIeRttk_kCQzgkxZ2T5RjLSLMqlL/view?usp=sharing")}
          >
            Resume
          </button>
          <div className="flex flex-row p-4">

            <a href="https://www.linkedin.com/in/suryansh-singh-bisen-297ba3138/">
            <img src={linkedin} alt="" className="w-[2.5rem] h-[2.5rem] my-8 mx-4 transition ease-in-out delay-900 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"/>
            </a>
            <a href="https://github.com/07suryansh">
            <img src={github} alt="" className="w-[2.5rem] h-[2.5rem] my-8 mx-4 transition ease-in-out delay-900 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"/>
            </a>
            <a href="mailto:07suryansh@gmail.com">
            <img src={mail} alt="" className="w-[3rem] h-[3rem] my-8 mx-4 transition ease-in-out delay-900 hover:-translate-y-1 hover:scale-110 duration-200 cursor-pointer"/>
            </a>

          </div>
        </div>
        <div className="container pl-[8rem] drop-shadow-2xl">
          <img
            src={Me}
            alt=""
            className="w-[30rem] rounded-full border-solid border-[12px] border-red-500 bg-red-200 drop-shadow-2xl
            transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 hover:border-blue-500 hover:border-[14px] duration-200 hover:rounded-[8rem]
            "
          />
        </div>
      </div>
    </>
  )
}
