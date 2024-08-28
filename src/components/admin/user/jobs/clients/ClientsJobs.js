import Layout from '@/components/admin/dashboard/Layout'
import { publicRequest } from '@/requestMethods'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const ClientsJobs = () => {


    const [job, setJob] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
        const getJobs = async()=> {
            try {
                const res = await publicRequest.get(`jobs/client/662fb19c43dc00c5671f8895`)
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
    }, [])

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
            <div>
                <p>
                    Loading...
                </p>
            </div>
        )
    }
  return (
    <div>
      <Layout>
        <div className=' bg-white rounded-md p-5'>
            <div className=' space-y-3'>
                {job?.map((j, i)=> (
                    <Link href={`/admin/user/job/${j._id}`} key={i} className=' p-5 border rounded-lg flex justify-between items-center '>
                        <div className=' w-full flex flex-col md:flex-row items-center gap-5'>
                            <div  className=' w-full h-40 md:h-20 md:w-40 overflow-hidden'>
                                <Image src={j?.document} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                            </div>
                            <div className=' w-full flex-1 md:pr-10 space-y-3'>
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
      </Layout>
    </div>
  )
}

export default ClientsJobs
