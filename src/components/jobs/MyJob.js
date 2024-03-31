'use client'
import React, { useState } from 'react'
import Header from '../profile/Header'
import PendingJobs from './PendingJobs'
import CompletedJobs from './CompletedJobs'
import Bookmarks from './Bookmarks'
import Footer from '../footer/Footer'
import HeaderTwo from '../skilled/HeaderTwo'

const MyJob = () => {

    const [selectedTab, setSelectedTab] = useState(1)
  return (
    <div>
        <div>
            <HeaderTwo />
        </div>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className=' p-5 bg-white rounded-lg'>
                <div className=' flex border-b text-sm tab-menu'>
                    <p onClick={()=> setSelectedTab(1)} className={`${selectedTab === 1 ? 'text-[#31013f] border-b border-[#31013f]' : 'text-neutral-500'} `}>
                        Pending jobs
                    </p>
                    <p onClick={()=> setSelectedTab(2)} className={`${selectedTab === 2 ? 'text-[#31013f] border-b border-[#31013f]' : 'text-neutral-500'} `}>
                        Completed jobs
                    </p>
                    <p onClick={()=> setSelectedTab(3)} className={`${selectedTab === 3 ? 'text-[#31013f] border-b-2 border-[#31013f]' : 'text-neutral-500'} `}>
                        Bookmarks
                    </p>
                </div>

                <div className=' mt-5'>
                    {selectedTab === 1 && 
                        <PendingJobs />
                    }
                    {selectedTab === 2 && 
                        <CompletedJobs />
                    }
                    {selectedTab === 3 && 
                        <Bookmarks />
                    }
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default MyJob