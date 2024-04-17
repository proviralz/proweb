import React from 'react'
import { FiSearch } from 'react-icons/fi'
import TopProviders from './TopProviders'
// import TopCompanies from './TopCompanies'

const Sidebar = () => {
  return (
    <div className=' hidden md:flex flex-1 mt-6 bg-white py-5 px-4 rounded-lg min-w-96 max-w-96 h-[1500px] overflow-hidden overflow-y-scroll'>
        <div className=' w-full'>
            <div className=' flex justify-center'>
                <p className=' text-xl font-light'>
                    Top Service Providers
                </p>
            </div>
            <div className=' mt-5 flex justify-center'>
                <div className=' inline-block'>
                    <p className=' border py-3 px-5 border-neutral-500 rounded-full'>
                        Browse all
                    </p>
                </div>
            </div>
            <div className=' mt-5 pb-5'>
                <TopProviders />
            </div>
        </div>
    </div>
  )
}

export default Sidebar