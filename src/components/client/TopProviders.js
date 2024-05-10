import React from 'react'
import { providers } from '../data/featured'
import Image from 'next/image'
import Link from 'next/link'

const TopProviders = ({filteredProviders}) => {
  return (
    <div className=' flex items-center flex-wrap justify-center w-full gap-5'>
        {filteredProviders?.length == 0 && (<p>No item matches your search..</p>)}
        {filteredProviders?.map((p, i)=> (
            <div key={i} className=' w-72 border pb-5 rounded-xl overflow-hidden'>
                <div className=''>
                    <Image src={'/assets/profile/cover.svg'} alt='' width={100} height={100} className=' w-full h-28 object-cover' />
                </div>
                <div className=' flex justify-center -mt-7'>
                    <div>
                        <Image src={p?.profilePic} alt={p.fullName} height={100} width={100} className=' h-14 w-14 rounded-full object-cover' />
                    </div>
                </div>
                <div className=' text-center mt-5 space-y-2'>
                    <p>
                        {p?.fullName}
                    </p>
                    <p>
                        {p.skill} &#8358;{p.rate}/hr
                    </p>
                </div>
                <div className=' px-5 mt-3'>
                    <p className=' text-xs font-light'>
                        {p.bio}
                    </p>
                </div>
                <div className=' mt-5 px-5'>
                    <Link href={`/user/${p._id}`}  >
                        <p  className=' purple-btn-long text-xs'>
                            View profile
                        </p>
                    </Link>
                </div>
                <div className=' mt-5 px-5 flex text-sm font-light'>
                    <div className=' flex-1 flex flex-col items-center'>
                        <p>
                            Rating
                        </p>
                        <p>
                            {4.5}
                        </p>
                    </div>
                    <div className=' flex-1 border-l-2 border-neutral-700 flex flex-col items-center' >
                        <p>
                            Posts
                        </p>
                        <p>
                            {p.posts}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TopProviders