import Sidebar from '@/components/alliliate/dashboard/Sidebar'
import React, { useState } from 'react'
import Overview from './Overview'
import Earnings from './Earnings'
import Account from './Account'
import { FiMenu } from 'react-icons/fi'

const Layout = () => {

    const [isSelected, setIsSelected] = useState("overview")
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const handleMenuClick = () => {
        setIsSidebarOpen(!isSidebarOpen);
    }

  return (
    <div className=' flex md:gap-5 bg-neutral-100'>
        <div>
            <Sidebar setIsSidebarOpen={setIsSidebarOpen} isSidebarOpen={isSidebarOpen} isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>

        <div className=' w-full h-screen overflow-y-scroll bg-white shadow-sm'>
            <div className=' p-5 border-b flex justify-between'>
                <div className=' flex items-center gap-3'>
                    <div className='flex md:hidden'>
                        <p className=' text-neutral-600 ' onClick={handleMenuClick}>
                            <FiMenu size={25} />
                        </p>
                    </div>
                    <p className=' text-lg font-bold text-[#31013f]'>
                        Affiliates
                    </p>
                </div>
                <div className=' hidden md:flex items-center gap-10 text-neutral-500'>
                    <div>
                        <p>
                            Balance: $0.00
                        </p>
                    </div>
                    <div>
                        <p>
                            Affiliate: 20
                        </p>
                    </div>
                </div>
            </div>
            <div className=' py-3 px-5 h-full  '>
                {isSelected === 'overview' && (
                    <Overview />
                )}
                {isSelected === 'earnings' && (
                    <Earnings />
                )}
                {isSelected === 'account' && (
                    <Account />
                )}
            </div>
        </div>
        
    </div>
  )
}

export default Layout