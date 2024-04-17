'use client'
import React, { useState } from 'react'
import ClientHeader from '../client/ClientHeader'
import OngoingProjects from './OngoingProjects'
import CompletedProjects from './CompletedProjects'
import Footer from '../footer/Footer'

const ClientProjects = () => {

    const [selectedTab, setSelectedTab] = useState(1)
  return (
    <div>
        <div>
            <ClientHeader />
        </div>

        <div className=' bg-neutral-100 p-10'>
            <div className=' bg-white p-5'>


                <div className=' flex justify-between border-b'>

                    {/* left */}
                    <div className=' flex text-lg'>
                        <div onClick={()=> setSelectedTab(1)} className={`${selectedTab === 1 && 'text-[#31013f] border-b-2 border-[#31013f]'} py-4 px-6`}>
                            <p>
                                Ongoing projects
                            </p>
                        </div>
                        <div onClick={()=> setSelectedTab(2)} className={`${selectedTab === 2 && 'text-[#31013f] border-b-2 border-[#31013f]'} py-4 px-6`}>
                            <p>
                                Completed projects
                            </p>
                        </div>
                    </div>

                    {/* right */}
                    <div className=' mb-3'>
                        <p className=' px-4 py-2 font-light bg-[#31013f] text-white rounded-full'>
                            Post a job
                        </p>
                    </div>
                </div>

                {/* tabs */}
                <div className=' mt-5'>
                    {selectedTab === 1 && (
                        <OngoingProjects />
                    )}
                    {selectedTab === 2 && (
                        <CompletedProjects />
                    )}
                </div>
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default ClientProjects