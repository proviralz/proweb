import React from 'react'
import { featured } from '../data/featured'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';

const FeaturedJob = ({jobs}) => {
  return (
    <div className=' flex flex-col gap-10'>
        {jobs?.map((item, i)=> (
            <div key={i} className=' border p-3 rounded-lg'>
                <div className=' md:flex gap-5 w-full'>
                    <div className='w-48 h-20 bg-slate-400'>
                        <Image src={item.document} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                    </div>
                    <div className=' md:w-full'>
                        <div className=' mt-3 flex  items-center gap-3 text-lg text-[#31013f]'>
                            <div className=' w-7 h-7 rounded-full overflow-hidden'>
                                <Image src={item?.client?.profilePic} alt='' width={100} height={100} className=' w-full h-full object-cover' />
                            </div>
                            <p>
                                {item.title}
                            </p>
                        </div>
                        <div  className=' mt-3'>
                            <p  className=' text-neutral-500 text-sm '>
                                {item.description}
                            </p>
                        </div>
                    </div>
                </div>
                <div  className=' flex gap-3 flex-wrap mt-5'>
                    {item?.skills?.map((tag, i)=> (
                        <div key={i} className=' capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-sm'>
                            {tag}
                        </div>
                    ))}
                </div>
                <div className=' md:flex justify-between md:mt-5'>
                    <div>
                        <div className=' mt-3  text-neutral-600 text-sm flex gap-16'>
                            <p>
                                part time
                            </p>
                            <p>
                                {item.experience} years experience
                            </p>
                        </div>
                        <div className=' mt-3  text-neutral-600 text-sm flex gap-8'>
                            <p className=' font-semibold'>
                                &#8358;{item.budget} 
                            </p>
                            <p className=' font-light'>
                                {item.negotiable? 'Negotiable': 'Non-negotiable'}
                            </p>
                            <p className=' font-light flex items-center gap-2 capitalize'>
                                <CiLocationOn />
                                {item.location.state}
                            </p>
                        </div>
                        <div className=' font-light mt-3  text-neutral-600 text-sm'>
                            Proposals:
                        </div>
                    </div>
                    <div className=' mt-3'>
                        <Link href={`/jobs/${item._id}`} className='purple-btn-long'>
                            Apply now
                        </Link>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FeaturedJob