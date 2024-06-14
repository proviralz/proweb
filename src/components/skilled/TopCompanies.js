'use client'
import React, { useEffect, useState } from 'react'
// import { companies } from '../data/featured'
import Image from 'next/image'
import { publicRequest } from '@/requestMethods'

const TopCompanies = () => {

    const [companies, setCompanies] = useState(null)

    useEffect(()=> {
        const getClients = async ()=> {
            try {
                const res = await publicRequest.get('users')

                const clients = res.data.filter(data  => data.group === 'client')

                setCompanies(clients)
            } catch (error) {
                console.log(error)
            }
        }

        getClients()
    }, [])
  return (
    <div className=' flex flex-col gap-3'>
        {companies?.map((comp, i)=> (
            <div key={i} className=' border flex items-center gap-3 rounded-lg px-3 py-2'>
                <div className=' h-20 w-20 rounded-full overflow-hidden'>
                    <Image src={comp?.profilePic} alt={comp?.name} width={100} height={100} className=' h-full w-full object-cover' />
                </div>
                <div className=' flex flex-col gap-1'>
                    <p className=' text-xs text-neutral-600'>
                        {comp?.fullName}
                    </p>
                    <p className=' text-xs font-light text-[#31013f]'>
                        {comp?.companyProfile?.industry}
                    </p>
                    {/* <p className=' text-xs text-neutral-400'>
                        available jobs: <span className=' text-neutral-600'>{comp.jobs}</span>
                    </p> */}
                </div>
            </div>
        ))}
    </div>
  )
}

export default TopCompanies