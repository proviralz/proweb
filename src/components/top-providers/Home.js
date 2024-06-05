'use client'
import React, { useEffect, useState } from 'react'
import ClientHeader from '../client/ClientHeader'
import Image from 'next/image'
import { IoFilter } from 'react-icons/io5'
import { FiSearch } from 'react-icons/fi'
import { RiCheckboxBlankFill, RiCheckboxBlankLine } from "react-icons/ri";
import { location } from '../data/location'
import { providers } from '../data/featured'
import TopProviders from '../client/TopProviders'
import Footer from '../footer/Footer'
import { publicRequest } from '@/requestMethods'

const Home = () => {

    const [availability, setAvailability] = useState('')
    const [experience, setExperience] = useState('')
    const [selectedField, setSelectedField] = useState('')
    const [userLocation, setUserLocation] = useState('')
    const [activeUsers, setActiveUsers] = useState(null)


    useEffect(()=> {
        const getUsers = async ()=> {
            try {
                const res = await publicRequest.get(`users`)
                setActiveUsers(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        getUsers()
    }, [])

    const skilledUsers = activeUsers?.filter(user => user.group === 'skilled');
    const unskilledUsers = activeUsers?.filter(user => user.group === 'unskilled');

    
    const workingUsers = skilledUsers?.concat(unskilledUsers)
    
    console.log(workingUsers)

    const filterOptions = {
        field: ['web design', 'graphic designer', 'data entry', 'photographer', 'shoe repear', 'makeup artist', 'seo'],
        availability: ['part time', 'full time'],
    }
   


    const filteredObject = workingUsers?.filter((obj) => {
        // Check if the object meets all the filter criteria
        const fieldFilter = !selectedField || obj?.interests?.includes(selectedField);
        const availabilityFilter = !availability || obj.availability === availability;
        const locationFilter = !userLocation || obj.location.state === userLocation;
        const experienceFilter = !experience || obj.experience === experience;
    
        // Return true if all filters pass
        return fieldFilter && availabilityFilter && locationFilter && experienceFilter;
    });

    // console.log(filteredObject)


  return (
    <div>
        <div>
            <ClientHeader />
        </div>

        <div className='bg-slate-100 h-48 relative overflow-hidden'>
            <div
                className='absolute scale-110 inset-0 bg-no-repeat bg-cover bg-center'
                style={{
                    backgroundImage: `url('/assets/extra/providers.svg')`,
                }}
            />
            <div className='absolute inset-0 flex flex-col justify-center items-center'>
                <p className='text-white text-3xl md:text-5xl font-semibold text-center'>
                    Explore our top service providers
                </p>
                <p className=' text-white text-center text-lg md:text-2xl mt-3'>
                    Find the perfect talent for your projects on Proviralz
                </p>
            </div>
        </div>

        <div className=' bg-neutral-100 pr-5 md:pr-10 pb-10 flex gap-5'>
            
            {/* filter */}
            <div className=' hidden md:block'>
                <div className=' rounded-b-xl bg-white p-3 w-64 text-sm'>
                    
                    <div className=' flex items-center gap-4 text-[#31013f]'>
                        <IoFilter size={20} />
                        <p className=' text-lg'>
                            Filter
                        </p>
                    </div>

                    {/* field */}
                    <div className=' space-y-2 mt-3 border-b pb-2'>
                        <p>
                            Field
                        </p>

                        <div>
                            <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                                <FiSearch />
                                <input type="text" name="" id="" className='full outline-none  text-neutral-600 ' placeholder='Search field' />
                            </div>
                        </div>

                        {/* options */}
                        <div className='filter-options'>
                            <ul>
                                {filterOptions.field.map((option, index) => (
                                    <li className={`${selectedField === option &&  `selected`}`} onClick={()=> setSelectedField(option)} key={index}>{option}</li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* availability */}
                    <div className='space-y-2 mt-3 border-b pb-2' >
                        <p>
                            Availability
                        </p>

                        {filterOptions.availability.map((option, index) => (
                            <div key={index} onClick={() => setAvailability(option)} className=' flex items-center gap-2 cursor-pointer'>
                                {availability === option ? (
                                    <RiCheckboxBlankFill color='#31013f' size={20} />
                                ) : (
                                    <RiCheckboxBlankLine color='#31013f' size={20} />
                                )}
                                <p>{option}</p>
                            </div>
                        ))}
            
                    </div>

                    {/* location */}
                    <div className=' space-y-2 mt-3 border-b pb-2'>
                        <p>
                            Location
                        </p>

                        <div>
                            <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                                <FiSearch />
                                <input type="text" name="" id="" className='full outline-none  text-neutral-600 ' placeholder='Search field' />
                            </div>
                        </div>

                        {/* options */}
                        <div className='filter-options'>
                            <ul>
                                {location[0].states.map((l,i)=> (
                                    <li className={`${userLocation === l.name &&  `selected`}`}  onClick={()=> setUserLocation(l.name)} key={i}>
                                        {l.name}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* experience */}
                    <div className='space-y-2 mt-3 border-b pb-2' >
                        <p>
                            Experience
                        </p>

                        <div onClick={()=> setExperience('a')} className=' flex items-center gap-2'>
                            {experience === 'a'? <RiCheckboxBlankFill color='#31013f' size={20} /> : <RiCheckboxBlankLine color='#31013f' size={20}/> }
                            <p>
                                0 - 1 Year
                            </p>
                        </div>
                        <div onClick={()=> setExperience('b')} className=' flex items-center gap-2'>
                            {experience === 'b'? <RiCheckboxBlankFill color='#31013f' size={20}/> :  <RiCheckboxBlankLine color='#31013f' size={20} /> }
                            <p>
                                1  - 3 Years
                            </p>
                        </div>
                        <div onClick={()=> setExperience('c')} className=' flex items-center gap-2'>
                            {experience === 'c'? <RiCheckboxBlankFill color='#31013f' size={20}/> :  <RiCheckboxBlankLine color='#31013f' size={20} /> }
                            <p>
                                3+ Years
                            </p>
                        </div>
            
                    </div>
                </div>
            </div>

            {/* providers */}
            <div className='    w-full '>
                <div className='bg-white p-5 rounded-b-xl'>
                    <TopProviders filteredProviders={filteredObject}  />
                </div>
            </div>
        </div>

        {/* footer */}
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Home