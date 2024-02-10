import React from "react";
export default function Navbar() {
  return (
    <div className="flex flex-auto">
      <nav className="font-sans text-lg flex ">
        <ul className="cursor-pointer flex ">

        <a href="/">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl ">
          Home
          </li>
          </a> 

          <a href="About">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
           About
          </li>
          </a> 
          
          <a href="Skills">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Skills
          </li>
          </a>

          <a href="Experience">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Experience
          </li>
          </a>

          <a href="Education">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Education
          </li>
          </a>

          <a href="Projects">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Projects
          </li>
          </a>

          <a href="Certificate">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Certificates
          </li>
          </a>

          <a href="Contact">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Contact
          </li>
          </a>
        </ul>
      </nav>
      
    </div>
  );
}
