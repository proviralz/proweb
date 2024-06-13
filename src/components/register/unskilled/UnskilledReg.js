'use client'
import React, { useEffect, useState } from 'react'
import Header from '../Header'
import Image from 'next/image'
import { FiSearch } from 'react-icons/fi'
import { unSkilledInterest } from '@/components/data/interests'
import { FaPlay } from 'react-icons/fa6'
import { publicRequest } from '@/requestMethods'
import { useParams, useRouter } from 'next/navigation'

const UnskilledReg = () => {

    const [selectedInterests, setSelectedInterests] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredInterests, setFilteredInterests] = useState([]);
    const params = useParams()
    const router = useRouter()

    useEffect(() => {
        // Assuming skilledInterest is an array of interests available globally or fetched from an API
        setFilteredInterests(unSkilledInterest);
      }, []);

    useEffect(() => {
        const results = unSkilledInterest.filter(interest =>
            interest.title.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredInterests(results);
    }, [searchTerm]);

    const toggleInterest = (interest) => {
        if (selectedInterests.includes(interest)) {
            setSelectedInterests(selectedInterests.filter(item => item !== interest));
        } else {
            setSelectedInterests([...selectedInterests, interest]);
        }
    };

    const handleSubmit = async ()=> {
        if(selectedInterests.length > 0)  {
            try {
                const res = await publicRequest.put(`users/${params.id}`, {
                    interests: selectedInterests
                })

                if(res.status === 200)  {
                    router.push('/login')
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            alert('select at least one interest')
        }
    }

    // console.log(params.id)
  return (
    <div className={``}>
        <div className=''>
            <div className=' p-5 md:p-10 '>
                <Header />
            </div>

            <div className=' p-5 md:p-10 flex justify-center '>
                <div className=' md:border md:p-5 md:rounded-lg border-neutral-500 flex flex-col items-center w-full'>
                    <div className=' w-full flex justify-between items-center gap-10'>
                        <div>
                            <p>
                                What&apos;s your interest?
                            </p>
                            <p className=' text-xs font-light'>
                                Pick one and begin your journey
                            </p>
                        </div>
                        <div className=' flex-1'>
                            <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                                <FiSearch />
                                <input 
                                    type="text" 
                                    name="" 
                                    id="" 
                                    value={searchTerm}
                                    onChange={(e)=> setSearchTerm(e.target.value)}
                                    className=' w-28 md:w-full outline-none  text-neutral-600 ' 
                                    placeholder='Search services' />
                            </div>
                        </div>
                    </div>
                    <div className=' mt-5 w-full h-96 overflow-y-scroll'>
                        <div className=' flex flex-wrap gap-5 justify-between'>
                            {filteredInterests.map((u, i)=> (
                                <div key={i}  className={`w-36 h-52 border p-3 rounded-lg ${selectedInterests.includes(u.title) ? 'bg-gray-300' : ''} `} onClick={() => toggleInterest(u.title)}>
                                    <div className=' w-full h-40'>
                                        <Image src={u.img} alt=''  width={100} height={100} className=' h-full w-full object-cover' />
                                    </div>
                                    <div  className=' mt-2'>
                                        <p className=' text-neutral-600  text-sm capitalize'>
                                            {u.title}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className='w-full flex justify-end pt-5'>
                        <div className=' ' onClick={handleSubmit}>
                            {selectedInterests.length> 0 && 
                            <p className=' purple-btn-long flex items-center justify-between gap-10'>
                                See my featured jobs  <FaPlay />
                            </p>}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default UnskilledReg