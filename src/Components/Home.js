import React from 'react';
import Me from "../Images/MySelfie.png";

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
