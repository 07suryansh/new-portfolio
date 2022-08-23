import React from 'react'
import p1 from '../Images/Project Img/p1.png'
import p2 from '../Images/Project Img/p2.png'
import p3 from '../Images/Project Img/p3.png'
import p4 from '../Images/Project Img/p4.png'
import p5 from '../Images/Project Img/p5.png'
import p6 from '../Images/Project Img/p6.png'
import p7 from '../Images/Project Img/p7.png'

export default function Certificate() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center p-2 mx-[30rem] mt-8 border-blue-500 border-b-4">
          Projects
        </h1>
      </div>
      <div>
              <div className="snap-x flex snap-mandatory overflow-scroll mx-44 my-4">
                  <div className="snap-center w-[30rem] flex-shrink-0 flex-items-center justify-center mx-4 p-4">
                    <img src={p1} />
                  </div>
                  <div className="snap-center w-[30rem] flex-shrink-0 flex-items-center justify-center mx-4 p-4">
                    <img src={p2} />
                  </div>
                  <div className="snap-center w-[30rem] flex-shrink-0 flex-items-center justify-center mx-4 p-4">
                    <img src={p3}/>
                  </div>
                  <div className="snap-center w-[30rem] flex-shrink-0 flex-items-center justify-center mx-4 p-4">
                    <img src={p4}/>
                  </div>
                  <div className="snap-center w-[30rem] flex-shrink-0 flex-items-center justify-center mx-4 p-4">
                    <img src={p5}/>
                  </div>
                  <div className="snap-center w-[30rem] flex-shrink-0 flex-items-center justify-center mx-4 p-4">
                    <img src={p6}/>
                  </div>
                  <div className="snap-center w-[30rem] flex-shrink-0 flex-items-center justify-center mx-4 p-4">
                    <img src={p7}/>
                  </div> 
              </div>
      </div>

    </div>
  )
}
