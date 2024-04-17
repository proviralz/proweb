import React from 'react'
import { FaChalkboardUser } from 'react-icons/fa6'
import { IoIosArrowForward } from 'react-icons/io'
import { PiHandshakeLight } from 'react-icons/pi'

const ActionsTab = () => {
  return (
    <div>
        {/* tabs */}
        <div className=' flex items-center gap-5'>

        {/* left */}
            <div className=' flex h-full justify-between flex-1 p-5 border rounded-xl'>
                <div>
                    <FaChalkboardUser  size={50} className=' text-[#ba68c8]' />
                </div>
                <div className='w-2/3'>
                    <p className=' capitalize text-lg'>
                    Explore client journeys
                    </p>
                    <p className='text-sm font-thin'>
                    Embark on a journey through client testimonials
                    </p>
                </div>
                <div className=' flex items-center'>
                    <IoIosArrowForward />
                </div>
            </div>

        {/* right */}
            <div className=' flex justify-between flex-1 p-5 border rounded-xl'>
                <div>
                    <PiHandshakeLight  size={50} className='text-[#ba68c8]' />
                </div>
                <div  className=' w-3/4'>
                    <p className=' capitalize text-lg'>
                    post, connect, create
                    </p>
                    <p className='text-sm font-thin'>
                    post a job now and connect with freelancers who understand your vision
                    </p>
                </div>
                <div className=' flex items-center'>
                    <IoIosArrowForward />
                </div>
            </div>

        </div>
    </div>
  )
}

export default ActionsTab