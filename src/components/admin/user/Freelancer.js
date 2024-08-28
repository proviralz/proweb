import { experience, gallery, reviews, skills } from '@/components/data/featured'
import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { TbCameraPlus } from 'react-icons/tb'
import UserJobs from './jobs/UserJobs'

const Freelancer = () => {


    // function convertDateToMonthYear(dateString) {
    //     const date = new Date(dateString);
    //     const options = { year: 'numeric', month: 'long' };
    //     return date.toLocaleDateString('en-US', options);
    // }

    const generateStars = (rating) => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(<FaStar key={i} className=" text-yellow-400"/>);
            } else {
                stars.push(<FaStar key={i} className=" text-neutral-500"/>);
            }
        }
        return stars;
    };

    function convertDateToMonthYear(dateString) {
        const date = new Date(dateString);
        const options = { year: 'numeric', month: 'long' };
        return date.toLocaleDateString('en-US', options);
    }
  return (
    <div>
      
        <div className=' flex-1'>
            <div className='p-5 bg-white rounded-md space-y-5'>
                <div className='  flex md:flex-row flex-col gap-5'>
                    <div className=' relative bg-slate-400 w-28 h-28 aspect-square rounded-sm overflow-hidden'>
                        {/* <div className=' absolute bg-white p-1 rounded-full bottom-3 left-3 text-neutral-600 text-xl'>
                            <TbCameraPlus />
                        </div> */}
                        <Image src={'/assets/profile/user1.svg'} alt='user' width={100} height={100} className=' h-full object-cover w-full' />
                    </div>
                    <div className=' space-y-4 flex-1 text-neutral-500'>
                        <div>
                            <p>
                                User name
                            </p>
                            <p className=' text-xs mt-1'>
                                @username
                            </p>
                        </div>
                        {/* <div className=' mt-3 flex items-center gap-2'>
                            {user?.interests?.map((u, i)=> (
                                <p key={i} className=' text-sm'>
                                    {u}
                                </p>
                            ))}
                        </div> */}
                        <div className=''>
                            {/* bio */}
                            <p className=' text-[0.7rem]'>
                                some sample text here
                            </p>
                        </div>

                        {/* basic information */}
                        <div className=''>
                            <div>
                                <p className=' text-lg'>
                                    Basic Information:
                                </p>
                            </div>
                            <div className=' flex items-center justify-between'>
                                <div>
                                    <p className=' text-sm'>
                                        Availability:
                                    </p>
                                    <p className=' font-light text-sm'>
                                        Part time
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-sm'>
                                        Experience:
                                    </p>
                                    <p className=' font-light text-sm'>
                                        3 years
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-sm'>
                                        Location:
                                    </p>
                                    <p className=' font-light text-sm'>
                                        Aba, Abia
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-sm'>
                                        Rate:
                                    </p>
                                    <p className=' font-light text-sm'>
                                        $50/hr
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-sm'>
                                        Rating:
                                    </p>
                                    <p className=' font-light text-sm'>
                                        4.5
                                    </p>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>

                <div className=' flex justify-between'>
                    <div className=' space-y-5 w-3/5'>
                        <div>
                            {/* skills */}
                            <div className=''>
                                <div>
                                    Skills:
                                </div>
                                <div className=' mt-3'>
                                    <div  className=' flex gap-3 flex-wrap '>
                                        {skills?.map((tag, i)=> (
                                            <div key={i} className=' border capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-xs'>
                                                {tag}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className=' text-neutral-700'>
                            <div>
                                <p className=' text-lg'>
                                    Education
                                </p>
                            </div>
                            <div>
                                <p>
                                    University of Proviralz
                                </p>
                                <p className=' font-light'>
                                    BSc. Engineering
                                </p>
                                <p className=' font-light'>
                                    2010 - 2020
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' space-y-5'>
                        <div>
                            <div>
                                <p className=' text-lg'>
                                    Experience
                                </p>
                                <div className=' mt-2'>
                                    {experience?.map((ex,i)=> (
                                        <div key={i} className=' flex gap-2'>
                                            <div className=''>
                                                <div className=' border rounded-full h-8 w-8 overflow-hidden'>
                                                    <Image src={'/assets/profile/company.jpeg'} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                                                </div>
                                            </div>
                                            <div className=' text-sm flex flex-col gap-1'>
                                                <div>
                                                    <p>
                                                        {ex.company}
                                                    </p>
                                                </div>
                                                <div>
                                                    <p>
                                                        {ex.title}
                                                    </p>
                                                </div>
                                                <div className=' flex text-[0.5rem]'>
                                                    <p>
                                                        {convertDateToMonthYear(ex.startDate)} - &nbsp; 
                                                    </p>
                                                    <p>
                                                        {convertDateToMonthYear(ex.endDate)}
                                                    </p>
                                                    {/* <p>
                                                        ({ex.location})
                                                    </p> */}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            {/* language */}
                        </div>
                    </div>
                </div>

            </div>


            <div className='p-5 bg-white rounded-md mt-5'>
                <div className=' flex justify-between items-center border-b pb-5'>
                    <div>
                        <p className=' text-lg text-neutral-500'>
                            Portfolio
                        </p>
                    </div>
                    {/* <div>
                        <p className=' purple-btn-long text-xs'>
                            Add to portfolio
                        </p>
                    </div> */}
                </div>
                <div className=' mt-5'>
                    <div className=' flex flex-wrap justify-center md:justify-between gap-10'>
                        {gallery.map((g, i)=> (
                            <div key={i} className=' w-56'>
                                <div className=' w-full rounded-lg overflow-hidden'>
                                    <Image src={g.img} alt={g.title} width={100} height={100} className=' w-full'  />
                                </div>
                                <div className=' mt-2 flex text-xs justify-between text-neutral-500'>
                                    <p>
                                        {g.title}
                                    </p>
                                    <p className=' cursor-pointer'>
                                        Remove
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className=' mt-10'>
                    <div>
                        <p>
                            Reviews
                        </p>
                    </div>
                    <div className=' mt-6 flex flex-col gap-4'>
                        {reviews.map((rev, i)=> (
                            <div key={i} className=' flex gap-3'>
                                <div className=''>
                                    <Image src={rev.img} alt='' width={100} height={100} className=' h-10' />
                                </div>
                                <div className=' text-xs text-neutral-500 flex flex-col gap-1'>
                                    <div>
                                        <p className=' text-sm'>
                                            {rev.name}
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-[0.6rem] '>
                                            {rev.location}
                                        </p>
                                    </div>
                                    <div className=' flex items-center gap-5'>
                                        <div>
                                            <p  className=' flex items-center gap-2'>
                                                {rev.rating} <span className=' flex'>{generateStars(rev.rating)}</span>
                                            </p>
                                        </div>
                                        <p className=' text-neutral-300'>
                                            |
                                        </p>
                                        <div className=' text-[0.6rem] '>
                                            {rev.date}
                                        </div>
                                    </div>
                                    <div>
                                        <p className=' w-1/2'>
                                            {rev.desc}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <div  className='p-5 bg-white rounded-md mt-5'>
                <UserJobs />
            </div>
        </div>

    </div>
  )
}

export default Freelancer
