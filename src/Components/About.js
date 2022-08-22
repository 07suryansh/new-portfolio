import React from "react";
import Me from "../Images/MySelfie1.png";

export default function About() {
  return (
    <div className="container m-4 pl-28 pt-28 text-center flex">
      <div className="container drop-shadow-2xl">
        <img
          src={Me}
          alt=""
          className="w-[30rem] rounded-3xl border-solid border-[12px] border-blue-500 bg-red-200 drop-shadow-2xl
            transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 
            "
        />
      </div>
      <div className="container w-3/4">
        <h1 className="text-4xl border-blue-500 border-b-4 pb-2 pt-2">About</h1>
        
          <h1 className="text-xl text-left font-light font-sans mt-8 mb-0">This is Suryansh Singh Bisen</h1>
          <p className="mt-2 font-sans font-light text-left leading-7">I am pre-final year student at
          National Institute of Technology Hamirpur. I am member of UI/UX in
          Google Developer Student Club NITH and Frontend and UI/UX team in App
          Team NITH. I work in C++, Java, Javascript, ReactJs, HTML, Tailwind
          CSS and Bootstrap. I have experience in Web development, Android
          development and Graphic designing. Currently I am learning DSA.</p>
          <p className="mt-2 font-sans font-light text-left leading-7">Apart from technical, I love to play cricket, football, chess etc. and I also like Drawing and solving rubiks cube.</p>
        
      </div>
    </div>
  );
}
