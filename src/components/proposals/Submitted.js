'use client'
import React, { useEffect, useState } from 'react'
import HeaderTwo from '../skilled/HeaderTwo'
import Footer from '../footer/Footer'
import { FiSearch } from 'react-icons/fi'
// import { proposals } from '../data/jobs'
import Image from 'next/image'
import { useSelector } from 'react-redux'
import { publicRequest } from '@/requestMethods'
import Link from 'next/link'

const Submitted = () => {

    const user = useSelector(state=> state.user.info)
    const [proposals, setProposals]  = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getProposals = async()=> {
            try {
                const res = await publicRequest.get(`proposal/${user?._id}`)

                const clientIds = [...new Set(res.data.map(proposal => proposal.clientId))]

                const clients = await Promise.all(clientIds.map(async (clientId)=> {
                    const clientRes =  await  publicRequest.get(`users/find/${clientId}`)

                    return clientRes.data
                }))

                const populatedProposals = res.data.map(proposal => {
                    const clientData = clients.find(client => client._id === proposal.clientId)

                    return {...proposal, clientData}
                })

                setProposals(populatedProposals)
                setLoading(false)
            } catch (error) {
                console.log(error)
                if(error.response.status === 401){
                    setProposals(null)
                    setLoading(false)
                }
            }
        }

        getProposals()
    }, [user?._id])

    console.log(proposals)

    

    function getDaysAheadOrWeeksOrMonths(dateString) {
        const targetDate = new Date(dateString);
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds
        const difference = currentDate - targetDate;
    
        // Convert the difference to days, weeks, and months
        const daysAhead = Math.ceil(difference / (1000 * 60 * 60 * 24));
        const weeksAhead = Math.ceil(daysAhead / 7);
        const monthsAhead = Math.ceil(daysAhead / 30);
    
        if (daysAhead < 7) {
            return `${daysAhead} day${daysAhead > 1 ? 's' : ''}`;
        } else if (daysAhead < 60) {
            return `${weeksAhead} week${weeksAhead > 1 ? 's' : ''}`;
        } else {
            return `${monthsAhead} month${monthsAhead > 1 ? 's' : ''}`;
        }
    }



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
            <HeaderTwo />
        </div>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className=' p-5 bg-white rounded-lg text-neutral-600 flex flex-col gap-5'>
                <div>
                    <p >
                        Your proposals
                    </p>
                </div>
                <div>
                    <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                        <FiSearch />
                        <input type="text" name="" id="" className=' w-28 md:w-full outline-none  text-neutral-600 ' placeholder='Search services' />
                    </div>
                </div>
                <div>
                    {proposals.map((p, i)=> (
                        <div key={i} className=' p-5 border-b flex justify-between items-center '>
                            <div className=' w-full flex items-center gap-5'>
                                <div  className=' h-20 w-20 rounded-full overflow-hidden'>
                                    <Image src={p?.clientData.profilePic} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                                </div>
                                <div className=' flex-1 pr-10'>
                                    <div className='  w-full flex items-center justify-between'>
                                        <p className=' text-sm text-neutral-800'>
                                            {p?.clientData.fullName}
                                        </p>
                                        <p className=' text-xs'>
                                            {getDaysAheadOrWeeksOrMonths(p.createdAt)} ago
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-xs'>
                                            @{p?.clientData.username}
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-xs'>
                                            {p.coverLetter}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-40'>
                                <Link href={`/jobs/${p?.jobId}`} className=' purple-btn-long text-[0.7rem]'>
                                    View proposal
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Submitted