import React from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <div className="flex flex-auto">
      <nav className="font-sans text-lg flex ">
        <ul className="cursor-pointer flex ">

        <Link to="/">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl ">
          Home
          </li>
          </Link> 

          <Link to="About">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
           About
          </li>
          </Link> 
          
          <Link to="Skills">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Skills
          </li>
          </Link>

          <Link to="Experience">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Experience
          </li>
          </Link>

          <Link to="Education">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Education
          </li>
          </Link>

          <Link to="Projects">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Projects
          </li>
          </Link>

          <Link to="Certificate">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Certificates
          </li>
          </Link>

          <Link to="Contact">
          <li className="hover:bg-slate-200 px-6 py-4 visited:bg-slate-400 active:bg-slate-300 hover:border-solid hover:rounded-b-3xl">
          Contact
          </li>
          </Link>
        </ul>
      </nav>
      
    </div>
  );
}
