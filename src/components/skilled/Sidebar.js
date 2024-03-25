import React from 'react'
import { FiSearch } from 'react-icons/fi'
import TopCompanies from './TopCompanies'

const Sidebar = () => {
  return (
    <div className=' hidden md:flex flex-1 mt-6 bg-white py-5 px-4 rounded-lg min-w-64 max-w-96 h-[1500px] overflow-hidden overflow-y-scroll'>
        <div className=' w-full'>
            <div className=' flex justify-center'>
                <p className=' text-xl font-light'>
                    Top Companies
                </p>
            </div>
            <div className=' mt-5'>
                <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                    <FiSearch />
                    <input type="text" name="" id="" className=' w-28 md:w-full outline-none  text-neutral-600 ' placeholder='Search services' />
                </div>
            </div>
            <div className=' mt-5 pb-5'>
                <TopCompanies />
            </div>
        </div>
    </div>
  )
}

export default Sidebar