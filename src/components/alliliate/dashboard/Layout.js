import Sidebar from '@/components/alliliate/dashboard/Sidebar'
import React, { useState } from 'react'
import Overview from './Overview'
import Earnings from './Earnings'
import Account from './Account'

const Layout = () => {

    const [isSelected, setIsSelected] = useState("overview")

  return (
    <div className=' flex gap-5 bg-neutral-100'>
        <div>
            <Sidebar isSelected={isSelected} setIsSelected={setIsSelected} />
        </div>

        <div className=' w-full h-screen overflow-y-scroll bg-white shadow-sm'>
            <div className=' p-5 border-b flex justify-end'>
                <div className=' flex items-center gap-10 text-neutral-500'>
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