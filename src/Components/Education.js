import React from 'react'
import KV from '../Images/KV.png'
import NITH from '../Images/NITH.png'

export default function Education() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center p-2 mx-[35rem] mt-8 border-blue-500 border-b-4">
          Education
        </h1>
      </div>
      <div className="flex flex-col px-16 items-center">
          <div className="p-8 w-[35rem] flex flex-row">
            <img src={NITH} alt="" className='w-12 h-12 mx-4' />
            <div>
                <h1 className="text-left font-semibold">
                Bachelor of Technology
                </h1>
                <h2 className="text-left">
                  National Institute of Technology, Hamirpur
                </h2>
                <h2 className="text-left">
                  December 2020 - present
                </h2>
                <h3 className='font-light'>Branch - Electronics and Communication Engineering</h3>
                <h3 className='font-light'>CGPA - 8.5</h3>
            </div>
          </div>
          <div className="p-8 w-[35rem] flex flex-row">
          <img src={KV} alt="" className='w-12 h-12 mx-4' />
            <div>
                <h1 className="text-left font-semibold">
                Sr. Secondary Education
                </h1>
                <h2 className="text-left">
                  Kendriya Vidyalaya IIT Kanpur
                </h2>
                <h2 className="text-left">
                  April 2017 - March 2019
                </h2>
                <h3 className='font-light'>Stream - PCM + IP</h3>
                <h3 className='font-light'>Percentage - 95</h3>
            </div>
          </div>
          <div className="p-8 w-[35rem] flex flex-row">
          <img src={KV} alt="" className='w-12 h-12 mx-4' />
            <div>
                <h1 className="text-left font-semibold">
                Secondary Education
                </h1>
                <h2 className="text-left">
                  Kendriya Vidyalaya IIT Kanpur
                </h2>
                <h2 className="text-left">
                April 2015 - March 2017
                </h2>
                <h3 className='font-light'>Stream - Science</h3>
                <h3 className='font-light'>CGPA - 10</h3>
            </div>
          </div>
      </div>
    </div>
  )
}
