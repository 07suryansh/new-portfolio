import React from "react";
import srijan from "../Images/srijan.png";
import appteam from "../Images/appteam.png";
import gdsc from "../Images/gdsc.png";

export default function Experience() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center p-2 mx-[35rem] mt-8 border-blue-500 border-b-4">
        Experience
        </h1>
      </div>
      <div className="flex flex-col px-16 items-center">
          <div className="p-12 w-[35rem] flex flex-row">
            <img src={srijan} alt="" className='w-20 h-20 mx-4' />
            <div>
                <h1 className="text-left font-semibold">
                SRIJAN
                </h1>
                <h2 className="text-left">
                  October 2021 - present
                </h2>
                <h3 className='font-light'>Web Developer and Graphic designer</h3>
            </div>
          </div>
          <div className="p-12 w-[35rem] flex flex-row">
          <img src={appteam} alt="" className='w-20 h-20 mx-4' />
            <div>
                <h1 className="text-left font-semibold">
                App Team NITH
                </h1>
                <h2 className="text-left">
                December 2021 - present
                </h2>
                <h3 className='font-light'>App developer and UI designer</h3>
            </div>
          </div>
          <div className="p-12 w-[35rem] flex flex-row">
          <img src={gdsc} alt="" className='w-20 h-20 mx-4' />
            <div>
                <h1 className="text-left font-semibold">
                GDSC NIT Hamirpur
                </h1>
                <h2 className="text-left">
                August 2022 - Present
                </h2>
                <h3 className='font-light'>UI designer</h3>
            </div>
          </div>
      </div>
    </div>
  );
}
