'use client'
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import Link from 'next/link'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import ClientHeader from '../client/ClientHeader'
import { useSelector } from 'react-redux'
import { publicRequest } from '@/requestMethods'

const ClientProposals = () => {

    const user = useSelector(state => state.user.info)

    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
        const getJobs = async()=> {
            try {
                const res = await publicRequest.get(`jobs/client/${user?._id}`)
                const jobs = res.data

                // console.log(jobs)

                const jobsWithProposals = await Promise.all(
                    jobs.map(async (job)=> {
                        const proposalRes = await publicRequest.get(`proposal/job/${job._id}`)
                        const proposals = proposalRes.data
                        const proposalCount = proposals.length
                        return {...job, proposalCount}
                    })
                )

                setJob(jobsWithProposals)
                setLoading(false)
            } catch (error) {
                console.error(error);
                setLoading(false)
            }
        }

        getJobs()
    }, [user?._id])

    console.log(job)



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
            <ClientHeader />
        </div>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className=' p-5 bg-white rounded-lg text-neutral-600 flex flex-col gap-5'>
                <div>
                    <p >
                        Click on job posted to see the proposals submitted for the job
                    </p>
                </div>
                {/* <div>
                    <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                        <FiSearch />
                        <input type="text" name="" id="" className=' w-28 md:w-full outline-none  text-neutral-600 ' placeholder='Search services' />
                    </div>
                </div> */}
                <div>
                    {job?.map((j, i)=> (
                        <Link href={`/proposals/${j._id}`} key={i} className=' p-5 border rounded-lg flex justify-between items-center '>
                            <div className=' w-full flex items-center gap-5'>
                                <div  className=' h-20 w-40 overflow-hidden'>
                                    <Image src={j?.document} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                                </div>
                                <div className=' flex-1 pr-10 space-y-3'>
                                    <div className='  w-full flex items-center justify-between'>
                                        <p className=' text-base text-neutral-800'>
                                            {j?.title}
                                        </p>
                                        <p className=' text-xs'>
                                            posted {getDaysAheadOrWeeksOrMonths(j.createdAt)} ago
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-xs'>
                                            {j.description}
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-base'>
                                            Number of proposals: {j.proposalCount}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            {/* <div className=' w-40'>
                                <Link href={`/jobs/`} className=' purple-btn-long text-[0.7rem]'>
                                    View proposal
                                </Link>
                            </div> */}
                        </Link>
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

export default ClientProposals