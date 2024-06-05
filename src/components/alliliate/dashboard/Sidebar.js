import React, { useState } from 'react'
import { navData } from './data'
import { FiMenu } from 'react-icons/fi'

const Sidebar = ({isSelected, setIsSelected, isSidebarOpen, setIsSidebarOpen}) => {

  // const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // const handleMenuClick = () => {
  //   setIsSidebarOpen(!isSidebarOpen);
  // }

  

  return (
    <div className={`fixed md:relative inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 transition-transform duration-200 ease-in-out w-full md:w-52 shadow-md h-full bg-white`}>
        <div className=' p-5 border-b'>
            <div className=' flex items-center gap-3'>
              
              <p className=' text-lg font-bold text-[#31013f]'>
                  Affiliates
              </p>
            </div>
        </div>
        <div className=' p-3'>
          <div className=' space-y-2'>
            {navData.map((nav, i)=> (
              <div key={i} onClick={()=> {setIsSelected(nav.title); setIsSidebarOpen(!isSidebarOpen)}} className={`${isSelected === nav.title && 'bg-[#31013f] text-white'} cursor-pointer text-neutral-500 text-sm flex gap-3 items-center px-5 py-2 rounded-md`}>
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