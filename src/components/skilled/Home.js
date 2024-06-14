'use client'
import React, { useEffect, useState } from 'react'
import Header from './Header'
import FeaturedJob from './FeaturedJob'
import Earn from '../footer/Earn'
import Footer from '../footer/Footer'
import { FiSearch } from 'react-icons/fi'
import Sidebar from './Sidebar'
import { useSession } from 'next-auth/react'
import HeaderTwo from '../header/HeaderTwo'
import { publicRequest } from '@/requestMethods'
import VerifyEmail from './VerifyEmail'
import { useSelector } from 'react-redux'
// import HeaderTwo from './HeaderTwo'

const Landing = () => {

    // const {status, data: session} = useSession()

    // console.log(session)

    const user = useSelector(state => state.user.info)

    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(!user?.emailVerified)

    useEffect(()=> {
        const getJobs = async ()=> {
            try {
                const res = await publicRequest.get('jobs')

                const clientIds = [...new Set(res.data.map(job => job.client))]

                const clients = await Promise.all(clientIds.map(async (clientId) => {
                    const clientRes = await  publicRequest.get(`users/find/${clientId}`)

                    return clientRes.data
                }))

                const populatedJobs = res.data.map(job => {
                    const client = clients.find(client => client._id === job.client)

                    return {...job, client}
                })

                setJobs(populatedJobs)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getJobs()
    }, [])

    // console.log(jobs)


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
    <div className=' bg-neutral-100'>
        <div>
            <HeaderTwo />
        </div>

        <div>
            <VerifyEmail 
                setShowForm={setShowForm} 
                showForm={showForm}
                user={user} />
        </div>

        {/* featured jobs */}
        <div className=' px-5 md:flex justify-between gap-5'>
            <div className=' mt-6 flex-1 bg-white py-5 px-4 rounded-lg'>
                <p className=' text-center text-xl font-light'>
                    Featured jobs
                </p>
                <div className=' mt-5'>
                    <FeaturedJob jobs={jobs} />
                </div>
            </div>

            <div>
                <Sidebar />
                <div className=' hidden md:flex mt-10'>
                    <Earn />
                </div>
            </div>


        </div>
        
        <div className=' mt-10 md:hidden'>
            <Earn />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Landing