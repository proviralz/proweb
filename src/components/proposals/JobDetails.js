'use client'
import { publicRequest } from '@/requestMethods'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import Footer from '../footer/Footer'
import ClientHeader from '../client/ClientHeader'
import Link from 'next/link'

const JobDetails = () => {

    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [proposal, setProposal] = useState(null)
    const [isClicked, setIsClicked] = useState(false)
    const user = useSelector(state => state.user.info)
    const params = useParams()
    const router = useRouter()

    useEffect(()=> {
        const getJobs = async ()=> {
            try {
                const res = await publicRequest.get(`proposal/findbyid/${params.id}`)

                const jobId = res.data.jobId

                const jobRes = await publicRequest.get(`jobs/${jobId}`)
                const proposalRes = res.data
                const jobDetails = jobRes.data

                // const populatedJobs = {job, clientDetails} 

                // const proposalRes = await publicRequest.get(`proposal/find/${params.id}?providerId=${user?._id}`)
                setProposal(proposalRes)
                
                
                setJobs(jobDetails)
                setLoading(false)
            } catch (error) {
                console.log(error)
                if(error.response.status === 401){
                    setProposal(null)
                    setLoading(false)
                }
            }
        }

        getJobs()
    }, [params.id])


    const createdAtString = jobs?.createdAt;
    const createdAtDate = new Date(createdAtString);
    const now = new Date();

    const diffTime = now - createdAtDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let timeAgoString;

    if (diffDays < 30) {
        timeAgoString = diffDays === 0 ? "today" : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
        const diffMonths = Math.floor(diffDays / 30);
        timeAgoString = `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    }



    const createdAt = jobs?.createdAt;
    const date = new Date(createdAt);

    const options = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);



    function getDaysAheadOrWeeksOrMonths(dateString) {
        const targetDate = new Date(dateString);
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds
        const difference = targetDate - currentDate;
    
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

    const handleHire = async()=> {
        try {
            setIsClicked(true)

            const res = await publicRequest.put(`project/${proposal._id}`)

            console.log(res.data)
            setIsClicked(false)
            router.push('/projects')

        } catch (error) {
            console.log(error)
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

  return ( jobs &&
    <div className=' bg-neutral-100'>
        <div>
            <ClientHeader />
        </div>


        <div className=' p-10 md:flex md:justify-between gap-5'>
            <div className=' flex-1'>
                <div className=' p-5 bg-white rounded-md flex flex-col gap-1'>

                    {/* job details title */}
                    <div className=' py-4 border-b'>
                        <p>
                            Job Details
                        </p>
                    </div>

                    {/* job  details */}
                    <div className='py-4 border-b text-neutral-600'>
                        <div className=' flex items-center gap-5'>
                            <div>
                                <p className='text-lg capitalize'>
                                    {jobs?.title}
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs'>
                                    posted {timeAgoString}
                                </p>
                            </div>
                        </div>
                        <div className=' mt-3 text-xs'>
                            <p>
                                {jobs?.description}
                            </p>
                        </div>
                    </div>

                    {/* job type info */}
                    <div className='py-4 border-b flex items-center gap-10'>
                        <div className=' text-xs text-neutral-400 flex flex-col gap-2'>
                            <p>Job type:</p>
                            <p>Experience length:</p>
                            <p>Location:</p>
                            <p>Price:</p>
                            <p>Experience level:</p>
                            <p>Payment structure:</p>
                        </div>
                        <div className=' text-xs text-neutral-600 flex flex-col gap-2'>
                            <p>Part-time job</p>
                            <p>{jobs?.experience} years</p>
                            <p>{jobs?.location.state}</p>
                            <p>{jobs?.budget} {jobs?.negotiable? 'Negotiable': 'Non-negotiable'}</p>
                            <p>Any</p>
                            <p>{jobs?.paymentStructure} payment  ({jobs?.milestones} milestones)</p>
                        </div>
                    </div>

                    {/* skills and apply */}
                    <div className='py-4'>
                        <div>
                            <p className=' text-sm'>
                                Skills and Expertise
                            </p>
                        </div>
                        <div className=' mt-2'>
                            <div  className=' flex gap-3 flex-wrap '>
                                {jobs?.skills.map((tag, i)=> (
                                    <div key={i} className=' border capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-xs'>
                                        {tag}
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className=' flex justify-between mt-3 w-3/4'>
                            <div>
                                <p className=' text-sm text-neutral-600'>
                                    Required qualification
                                </p>
                                <p className=' text-xs font-light mt-1'>
                                    {jobs?.qualification}
                                </p>
                            </div>
                            <div>
                                <div>
                                    <p className=' text-neutral-600 text-sm'>
                                        Project activity
                                    </p>
                                </div>
                                <div className=' flex items-center gap-5 mt-2'>
                                    <div className=' text-xs text-neutral-400 flex flex-col gap-2'>
                                        <p>proposals:</p>
                                        <p>Views:</p>
                                        <p>status:</p>
                                    </div>
                                    <div className=' text-xs text-neutral-600 flex flex-col gap-2'>
                                        <p>0</p>
                                        <p>{jobs?.views}</p>
                                        <p  className=' text-green-500'>Open</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        {proposal === null && <div className=' flex gap-5 justify-center mt-6'>
                            <div>
                                <p onClick={()=> setShowForm(true)} className=' purple-btn'>
                                    Apply Now
                                </p>
                            </div>
                            <div>
                                <p className=' trans-purple-btn'>
                                    Bookmark
                                </p>
                            </div>
                        </div>}
                    </div>


                    {/*  */}

                   

                </div>
            </div>


            <div className=' w-full md:w-72  lg:w-[400px]'>
                <div className=' mt-5 md:mt-0 bg-white p-5 rounded-md flex flex-col gap-1'>
                    <div className=' border-b py-4'>
                        <p>
                            Proposal
                        </p>
                    </div>
                    <div className='py-4'>
                        <div className=' space-y-2'>
                            <p className=' text-xs font-light'>
                                Bid amount:  <span className=' font-normal'>{proposal.bidAmount}</span>
                            </p>
                            <p className=' text-xs font-light'>
                                Project will be delivered in:  <span className=' font-normal'>{getDaysAheadOrWeeksOrMonths(proposal.deliveryDate)}</span>
                            </p>
                        </div>
                        <div className=' space-y-1 mt-3'>
                            <p className='  text-sm'>
                                Cover letter
                            </p>
                            <p className=' text-xs font-light'>
                                {proposal.coverLetter}
                            </p>
                        </div>
                        
                        <div className=' flex items-center gap-3 mt-5'>
                            <div className=' flex-1'>
                                <div onClick={handleHire}  className=' text-center purple-btn'>
                                    {isClicked? (
                                        <div className="animate-spin inline-block size-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
                                            <span className="sr-only">Loading...</span>
                                        </div>
                                    ):(
                                        <p>
                                            Hire
                                        </p>
                                    ) }
                                </div>
                            </div>
                            <div className=' flex-1'>
                                <Link href={`/user/${proposal.providerId}`} className=' trans-purple-btn'>
                                    View profile
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>    
            </div>
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default JobDetails