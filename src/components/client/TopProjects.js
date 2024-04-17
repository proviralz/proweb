import React from 'react'
import { projects } from '../data/featured'
import Image from 'next/image'

const TopProjects = () => {
  return (
    <div className=' flex flex-wrap justify-center md:justify-between gap-5'>
        {projects.map((p,i)=> (
            <div key={i} className=' text-neutral-600'>
                <div className=' w-96'>
                    <Image src={p.img} alt='' width={100} height={100} className=' w-full rounded-xl' />
                </div>
                <div className=' mt-2 flex justify-between items-center'>
                    <div>
                        <p>
                            {p.title}
                        </p>
                    </div>
                    <div className=' flex items-center gap-5'>
                        <div>
                            <p>
                                Likes {p.likes}
                            </p>
                        </div>
                        <div>
                            <p>
                                Views {p.views}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TopProjects