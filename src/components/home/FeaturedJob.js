import React from 'react'
import { featured } from '../data/featured'
import Image from 'next/image'
import { CiLocationOn } from "react-icons/ci";

const FeaturedJob = () => {
  return (
    <div className=' flex flex-col gap-10'>
        {featured.map((item, i)=> (
            <div key={i}>
                <div className=' bg-slate-300'>
                    <Image src={item.featuredImg} alt='' width={100} height={100} className=' w-full' />
                </div>
                <div className=' mt-3 flex  items-center gap-3 text-lg text-[#31013f]'>
                    <Image src={item.posterImage} alt='' width={100} height={100} className=' w-6' />
                    <p>
                        {item.title}
                    </p>
                </div>
                <div  className=' mt-3'>
                    <p  className=' text-neutral-500 text-sm '>
                        {item.description}
                    </p>
                </div>
                <div  className=' flex gap-3 flex-wrap mt-3'>
                    {item?.tags?.map((tag, i)=> (
                        <div key={i} className=' capitalize bg-neutral-100 px-4 py-1 rounded-full text-neutral-500  text-sm'>
                            {tag}
                        </div>
                    ))}
                </div>
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
                <div className=' mt-3'>
                    <p className='purple-btn-long'>
                        Apply now
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default FeaturedJob