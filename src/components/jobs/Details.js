'use client'
import React, { useEffect, useState } from 'react'
// import HeaderTwo from '../skilled/HeaderTwo'
import Footer from '../footer/Footer'
import { skills } from '../data/featured'
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'
import { GiWorld } from "react-icons/gi";
import { BsClockHistory, BsTelephone } from "react-icons/bs";
import { FaRegAddressCard } from 'react-icons/fa6'
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePayments } from 'react-icons/md'
import { useParams } from 'next/navigation'
import { publicRequest } from '@/requestMethods'
import SubmitProposal from './SubmitProposal'
import { useSelector } from 'react-redux'
import HeaderTwo from '../header/HeaderTwo'

const Details = () => {

    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [proposal, setProposal] = useState(null)
    const user = useSelector(state => state.user.info)
    const params = useParams()

    useEffect(()=> {
        const getJobs = async ()=> {
            try {
                const res = await publicRequest.get(`jobs/${params.id}`)

                const clientId = res.data.client

                const client = await publicRequest.get(`users/find/${clientId}`)
                const job = res.data
                const clientDetails = client.data

                const populatedJobs = {job, clientDetails} 

                // const proposalRes = await publicRequest.get(`proposal/find/${params.id}?providerId=${user?._id}`)
                // setProposal(proposalRes.data)
                
                
                setJobs(populatedJobs)
                setLoading(false)
            } catch (error) {
                console.log(error)
                
            }
        }

        getJobs()
    }, [params.id, user?._id])


    useEffect(()=> {
        const getJobs = async ()=> {
            try {

                const proposalRes = await publicRequest.get(`proposal/find/${params.id}?providerId=${user?._id}`)

                setProposal( proposalRes.data || null)
            } catch (error) {
                console.log(error)
         
            }
        }

        getJobs()
    }, [params.id, user?._id])


    const createdAtString = jobs?.job?.createdAt;
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



    const createdAt = jobs?.clientDetails.createdAt;
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

    console.log(proposal)
  return ( jobs &&
    <div className=' bg-neutral-100'>
        <div>
            <HeaderTwo />
        </div>

        <div>
            <SubmitProposal 
                showForm={showForm} 
                setShowForm={setShowForm}
                clientId={jobs?.clientDetails._id}
                jobId={params.id}
                providerId={user?._id} />
        </div>

        <div className=' p-5 md:p-10 md:flex md:justify-between gap-5'>
            <div className=' flex-1'>
                <div className=' md:p-5 p-3 bg-white rounded-md flex flex-col gap-1'>

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
                                <p className='md:text-lg text-base capitalize'>
                                    {jobs?.job.title}
                                </p>
                            </div>
                            <div>
                                <p className=' text-[0.6rem] md:text-xs '>
                                    posted {timeAgoString}
                                </p>
                            </div>
                        </div>
                        <div className=' mt-3 text-xs'>
                            <p>
                                {jobs?.job.description}
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
                            <p>{jobs?.job.experience} years</p>
                            <p>{jobs?.job.location.state}</p>
                            <p>{jobs?.job.budget} {jobs?.job.negotiable? 'Negotiable': 'Non-negotiable'}</p>
                            <p>Any</p>
                            <p>{jobs?.job.paymentStructure} payment  ({jobs?.job.milestones} milestones)</p>
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
                                {jobs?.job.skills.map((tag, i)=> (
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
                                    {jobs?.job.qualification}
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
                                        <p>{jobs?.job.views}</p>
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

                    {proposal && <div>
                        <div className=' border-t py-4 space-y-3 text-neutral-600'>
                            <div>
                                <p>
                                    Your proposal
                                </p>
                            </div>
                            <div className=' flex items-center justify-between  text-xs'>
                                <div>
                                    <p>
                                        Bid amount: &#8358;{proposal?.bidAmount}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        client budget: &#8358;{jobs?.job.budget}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <p className=' text-sm'>
                                    You will receive
                                </p>
                                <p className=' text-xs font-light'>
                                    The estimated payment, after service fees: (to be computed)
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs font-light'>
                                    Project will be delivered in: <span className=' font-normal'> {getDaysAheadOrWeeksOrMonths(proposal?.deliveryDate)} </span> 
                                </p>
                            </div>
                        </div>

                        {/* cover letter */}

                        <div className=' border-t py-4 space-y-3 text-neutral-600'>
                            <div>
                                <p>
                                    Cover letter
                                </p>
                            </div>
                            <div>
                                <p className=' text-[0.6rem]'>
                                    {proposal?.coverLetter}
                                </p>
                            </div>

                            {/* edit and withdraw */}
                            <div className=' flex gap-5 justify-center mt-6'>
                                <div>
                                    <p className=' purple-btn'>
                                        Edit Proposal
                                    </p>
                                </div>
                                <div>
                                    <p className=' trans-purple-btn'>
                                        Withdraw proposal
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>}

                </div>
            </div>


            <div className=' w-full md:w-72  lg:w-[400px]'>
                <div className=' mt-5 md:mt-0 bg-white p-5 rounded-md flex flex-col gap-1'>
                    <div className=' border-b py-4'>
                        <p>
                            Client Details
                        </p>
                    </div>
                    <div className='py-4'>
                        <div>
                            <p className=' text-sm'>
                                About Client
                            </p>
                        </div>
                        <div className=' flex flex-col items-center justify-center gap-2'>
                            <div className=' h-16 w-16 rounded-full overflow-hidden'>
                                <Image src={jobs?.clientDetails.profilePic} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                            </div>
                            <p className=' text-[0.6rem]'>
                                {jobs?.clientDetails.fullName}
                            </p>
                        </div>
                        <div className=' mt-3 flex flex-col gap-2'>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <CiLocationOn />
                                </p>
                                <p>
                                    {jobs?.clientDetails.location.state}
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <GiWorld />
                                </p>
                                <p>
                                    {jobs?.clientDetails.location.country}
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <BsClockHistory />
                                </p>
                                <p>
                                    member since {formattedDate}
                                </p>
                            </div>
                        </div>
                        <div className=' mt-4 flex flex-col gap-2'>
                            <p className=' text-sm'>
                                Client verification
                            </p>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <FaRegAddressCard />
                                </p>
                                <p>
                                    Identity verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <IoMailOutline />
                                </p>
                                <p>
                                    Email verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <BsTelephone />
                                </p>
                                <p>
                                    Phone verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <MdOutlinePayments />
                                </p>
                                <p>
                                    Payment verified
                                </p>
                            </div>
                        </div>
                        <div className=' mt-3'>
                            <div>
                                <p className=' text-sm'>
                                    Job link
                                </p>
                            </div>
                            <div className='  gap-5 space-y-3 text-xs mt-2'>
                                <p className=' text-[0.6rem] p-2 bg-neutral-100 font-light rounded-md'>
                                    https://proviralz.com/jobs/{params.id}
                                </p>
                                <p>
                                    copy link
                                </p>
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

export default Details