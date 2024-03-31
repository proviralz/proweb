import React from 'react'
import HeaderTwo from '../skilled/HeaderTwo'
import Footer from '../footer/Footer'
import { skills } from '../data/featured'
import Image from 'next/image'
import { CiLocationOn } from 'react-icons/ci'
import { GiWorld } from "react-icons/gi";
import { BsClockHistory, BsTelephone } from "react-icons/bs";
import { FaRegAddressCard } from 'react-icons/fa6'
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePayments } from 'react-icons/md'

const Details = () => {
  return (
    <div className=' bg-neutral-100'>
        <div>
            <HeaderTwo />
        </div>

        <div className=' p-10 md:flex md:justify-between gap-5'>
            <div className=' flex-1'>
                <div className=' p-5 bg-white rounded-md flex flex-col gap-1'>
                    <div className=' py-4 border-b'>
                        <p>
                            Job Details
                        </p>
                    </div>
                    <div className='py-4 border-b text-neutral-600'>
                        <div className=' flex items-center gap-5'>
                            <div>
                                <p className=' text-sm'>
                                    Data entry job
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs'>
                                    posted 5 years ago
                                </p>
                            </div>
                        </div>
                        <div className=' mt-3 text-xs'>
                            <p>
                                Need freelancers to work on a simple typing job. Active freelancers to retype my screenshot document into ms word
                            </p>
                        </div>
                    </div>
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
                            <p>Less than one year</p>
                            <p>Remote</p>
                            <p>$200 -$300 Negotiable</p>
                            <p>Entry level experience needed</p>
                            <p>Milestone payment  (4 milestones)</p>
                        </div>
                    </div>
                    <div className='py-4'>
                        <div>
                            <p className=' text-sm'>
                                Skills and Expertise
                            </p>
                        </div>
                        <div className=' mt-2'>
                            <div  className=' flex gap-3 flex-wrap '>
                                {skills.map((tag, i)=> (
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
                                    Google certificate
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
                                        <p>10-15</p>
                                        <p>47</p>
                                        <p  className=' text-green-500'>Open</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' flex gap-5 justify-center mt-6'>
                            <div>
                                <p className=' purple-btn'>
                                    Apply Now
                                </p>
                            </div>
                            <div>
                                <p className=' trans-purple-btn'>
                                    Bookmark
                                </p>
                            </div>
                        </div>
                    </div>
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
                            <div>
                                <Image src={'/assets/home/ibm.svg'} alt='' width={100} height={100} className=' h-16' />
                            </div>
                            <p className=' text-[0.6rem]'>
                                International business machine corp
                            </p>
                        </div>
                        <div className=' mt-3 flex flex-col gap-2'>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <CiLocationOn />
                                </p>
                                <p>
                                    New York
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <GiWorld />
                                </p>
                                <p>
                                    United states
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <BsClockHistory />
                                </p>
                                <p>
                                    member since December 2023
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
                            <div className=' flex gap-5 items-center text-xs mt-2'>
                                <p className=' text-[0.6rem] p-2 bg-neutral-100 font-light rounded-md'>
                                    https://provirals.com/job/12456
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