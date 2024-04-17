import React from 'react'
import { featured } from '../data/featured'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";

const FeaturedJob = () => {
  return (
    <div className=' flex flex-col gap-10'>
        {featured.map((item, i)=> (
            <div key={i} className=' border p-3 rounded-lg'>
                <div className=' md:flex gap-5 w-full'>
                    <div className=' '>
                        <Image src={item.unskilledImage} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                    </div>
                    <div className=' md:w-full'>
                        <div className=' mt-3 flex  items-center gap-3 text-lg text-[#31013f]'>
                            <Image src={item.posterImage} alt='' width={100} height={100} className=' w-6' />
                            <p>
                                Carpentry job
                            </p>
                        </div>
                        <div  className=' mt-3'>
                            <p  className=' text-neutral-500 text-sm '>
                                Need someone to do carpentry job around the house
                            </p>
                        </div>
                    </div>
                </div>
                <div  className=' flex gap-3 flex-wrap mt-5'>
                    {item?.tags?.map((tag, i)=> (
                        <div key={i} className=' capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-sm'>
                            {tag}
                        </div>
                    ))}
                </div>
                <div className=' md:flex justify-between md:mt-5'>
                    <div>
                        <div className=' mt-3  text-neutral-600 text-sm flex gap-16'>
                            <p>
                                {item.durationType}
                            </p>
                            <p>
                                {item.experienceLevel}
                            </p>
                        </div>
                        <div className=' mt-3  text-neutral-600 text-sm flex gap-8'>
                            <p className=' font-semibold'>
                                ${item.minBudget} - ${item.maxBudget}
                            </p>
                            <p className=' font-light'>
                                {item.negotiable? 'Negotiable': 'Non-negotiable'}
                            </p>
                            <p className=' font-light flex items-center gap-2 capitalize'>
                                <CiLocationOn />
                                {item.location}
                            </p>
                        </div>
                        <div className=' font-light mt-3  text-neutral-600 text-sm'>
                            Proposals: {item.proposals}
                        </div>
                    </div>
                    <div className=' mt-3'>
                        <p className='purple-btn-long'>
                            Apply now
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FeaturedJob