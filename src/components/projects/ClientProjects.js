'use client'
import React, { useEffect, useState } from 'react'
import ClientHeader from '../client/ClientHeader'
import OngoingProjects from './OngoingProjects'
import CompletedProjects from './CompletedProjects'
import Footer from '../footer/Footer'
import Link from 'next/link'
import { publicRequest } from '@/requestMethods'
import { useSelector } from 'react-redux'

const ClientProjects = () => {

    const [selectedTab, setSelectedTab] = useState(1)
    const [projects, setProjects] = useState(null)
    const [loading, setLoading] = useState(true)
    const user = useSelector(state => state.user.info)


    useEffect(()=> {
        const getProjects = async ()=> {
            try {
                const res = await publicRequest.get(`jobs/client/${user._id}`)

                setProjects(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }
        getProjects()
    }, [user?._id])

    if(loading) {
        return (
            <div className="section-center">
                <div className="section-path">
                    <div className="globe">
                    <div className="wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }


  return (
    <div>
        <div>
            <ClientHeader />
        </div>

        <div className=' bg-neutral-100 p-10'>
            <div className=' bg-white p-5'>


                <div className=' flex justify-between border-b'>

                    {/* left */}
                    <div className=' flex text-xs md:text-lg'>
                        <div onClick={()=> setSelectedTab(1)} className={`${selectedTab === 1 && 'text-[#31013f] border-b-2 border-[#31013f]'} py-4 px-2 md:px-6`}>
                            <p>
                                Ongoing projects
                            </p>
                        </div>
                        <div onClick={()=> setSelectedTab(2)} className={`${selectedTab === 2 && 'text-[#31013f] border-b-2 border-[#31013f]'} py-4 px-2 md:px-6`}>
                            <p>
                                Completed projects
                            </p>
                        </div>
                    </div>

                    {/* right */}
                    <div className=' mb-3'>
                        <Link href={'/jobs/new'} className=' md:px-4 md:py-2 p-1 text-xs md:text-base font-light bg-[#31013f] text-white rounded-full'>
                            Post a job
                        </Link>
                    </div>
                </div>

                {/* tabs */}
                <div className=' mt-5'>
                    {selectedTab === 1 && (
                        <OngoingProjects projects={projects} />
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