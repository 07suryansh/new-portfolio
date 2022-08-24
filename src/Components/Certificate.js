import React from 'react'
import c1 from '../Images/certificates/c1.png'
import c2 from '../Images/certificates/c2.png'
import c3 from '../Images/certificates/c3.png'
import c4 from '../Images/certificates/c4.png'
import c5 from '../Images/certificates/c5.png'
import c6 from '../Images/certificates/c6.png'

export default function Certificate() {
  return (
    <div>
      <div className="my-4">
        <h1 className="text-4xl text-center p-2 mx-[30rem] mt-8 border-blue-500 border-b-4">
          Certificates
        </h1>
      </div>
      <div>
              <div className="snap-x flex snap-mandatory overflow-scroll mx-44 my-24">
                  <div className="snap-center w-[35rem] flex-shrink-0 flex-items-center justify-center mx-4 p-12">
                    <img src={c1} alt="NA" className='transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 '/>
                  </div>
                  <div className="snap-center w-[35rem] flex-shrink-0 flex-items-center justify-center mx-4 p-12">
                    <img src={c2} alt="NA" className='transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 '/>
                  </div>
                  <div className="snap-center w-[35rem] flex-shrink-0 flex-items-center justify-center mx-4 p-12">
                    <img src={c3} alt="NA" className='transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 '/>
                  </div>
                  <div className="snap-center w-[35rem] flex-shrink-0 flex-items-center justify-center mx-4 p-12">
                    <img src={c4} alt="NA" className='transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 '/>
                  </div>
                  <div className="snap-center w-[35rem] flex-shrink-0 flex-items-center justify-center mx-4 p-12">
                    <img src={c5} alt="NA" className='transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 '/>
                  </div>
                  <div className="snap-center w-[35rem] flex-shrink-0 flex-items-center justify-center mx-4 p-12">
                    <img src={c6} alt="NA" className='transition ease-in-out delay-900  hover:-translate-y-1 hover:scale-110 duration-200 '/>
                  </div>
                  
              </div>
      </div>

    </div>
  )
}
