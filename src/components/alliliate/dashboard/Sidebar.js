import React, { useState } from 'react'
import { navData } from './data'

const Sidebar = ({isSelected, setIsSelected}) => {

  

  return (
    <div className=' w-52 shadow-md h-full bg-white'>
        <div className=' p-5 border-b'>
            <div>
              <p className=' text-lg font-bold text-[#31013f]'>
                  Affiliates
              </p>
            </div>
        </div>
        <div className=' p-3'>
          <div className=' space-y-2'>
            {navData.map((nav, i)=> (
              <div key={i} onClick={()=> setIsSelected(nav.title)} className={`${isSelected === nav.title && 'bg-[#31013f] text-white'} cursor-pointer text-neutral-500 text-sm flex gap-3 items-center px-5 py-2 rounded-md`}>
                <div>
                  {nav.icon}
                </div>
                <div>
                  <p className=' capitalize'>
                    {nav.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Sidebar