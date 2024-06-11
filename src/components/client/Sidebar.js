import React, { useEffect, useState } from 'react'
import { FiSearch } from 'react-icons/fi'
import TopProviders from './TopProviders'
import Link from 'next/link'
// import { providers } from '../data/featured'
import { publicRequest } from '@/requestMethods'
// import TopCompanies from './TopCompanies'

const Sidebar = () => {

    const [providers, setProviders] = useState([])
    
    // const sideProviders = providers && providers.slice(0, 10)

    useEffect(()=> {
        const getProviders = async()=> {
            try {
                const res = await publicRequest.get(`users`)

                setProviders(res.data)
            } catch (error) {
                console.error(error)
            }
        }
        getProviders()
    },[])

    if (!providers) {
        return null; // or render a loading indicator
    }

    const skilledUsers = providers?.filter(user => user?.group === 'skilled');
    const unskilledUsers = providers?.filter(user => user?.group === 'unskilled');
    const topProviders = skilledUsers?.concat(unskilledUsers).slice(0, 10);

    console.log(topProviders)
  return (
    <div className=' hidden md:flex flex-1 mt-6 bg-white py-5 px-4 rounded-lg min-w-64 max-w-96 h-[1500px] overflow-hidden overflow-y-scroll'>
        <div className=' w-full'>
            <div className=' flex justify-center'>
                <p className=' text-xl font-light'>
                    Top Service Providers
                </p>
            </div>
            <div className=' mt-5 flex justify-center'>
                <div className=' inline-block'>
                    <Link href={'/top-providers'} className=' border py-3 px-5 border-neutral-500 rounded-full'>
                        Browse all
                    </Link>
                </div>
            </div>
            <div className=' mt-5 pb-5 flex justify-center'>
                <TopProviders filteredProviders={topProviders} />
            </div>
        </div>
    </div>
  )
}

export default Sidebar