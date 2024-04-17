import React from 'react'
import { companies } from '../data/featured'
import Image from 'next/image'

const TopCompanies = () => {
  return (
    <div className=' flex flex-col gap-3'>
        {companies.map((comp, i)=> (
            <div key={i} className=' border flex items-center gap-3 rounded-lg px-3 py-2'>
                <div>
                    <Image src={comp.logo} alt={comp.name} width={100} height={100} className=' h-20' />
                </div>
                <div className=' flex flex-col gap-1'>
                    <p className=' text-xs text-neutral-600'>
                        {comp.name}
                    </p>
                    <p className=' text-xs font-light text-[#31013f]'>
                        {comp.industry}
                    </p>
                    <p className=' text-xs text-neutral-400'>
                        available jobs: <span className=' text-neutral-600'>{comp.jobs}</span>
                    </p>
                </div>
            </div>
        ))}
    </div>
  )
}

export default TopCompanies