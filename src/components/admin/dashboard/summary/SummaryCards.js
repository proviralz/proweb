import React from 'react'
import { FaUsersCog } from 'react-icons/fa'
import { IoLayers } from 'react-icons/io5'
import { HiUsers } from "react-icons/hi2";

const SummaryCards = ({users}) => {

    const startOfToday = new Date();
    startOfToday.setHours(0, 0, 0, 0);

    const totalFreelancers = users?.filter(user => user.group !== 'client').length
    const newFreelancers = users?.filter(user => user.group !== 'client' && new Date(user.createdAt)  >= new Date()).length
    const newClients = users?.filter(user => user.group === 'client' && new Date(user.createdAt)  >= new Date()).length

    // console.log(newFreelancers)
  return (
    <div className=' w-full'>
      <div className=' flex gap-7'>
        <div className=' flex flex-1 bg-white shadow-md rounded-md px-7 py-4 items-center justify-between'>
            <div className=' space-y-2'>
                <div>
                    <p className=''>
                        Total Projects
                    </p>
                </div>
                <div>
                    <p className=' text-xl font-semibold'>
                        200
                    </p>
                </div>
                <div>
                    <p className=' text-sm text-neutral-500'>
                        +5 today
                    </p>
                </div>
            </div>
            <div>
                <IoLayers size={45} color='#31013f' />
            </div>
        </div>
        <div className=' flex flex-1 bg-white shadow-md rounded-md px-7 py-4 items-center justify-between'>
            <div className=' space-y-2'>
                <div>
                    <p className=''>
                        Total Clients
                    </p>
                </div>
                <div>
                    <p className=' text-xl font-semibold'>
                        {users?.length - totalFreelancers}
                    </p>
                </div>
                <div>
                    <p className=' text-sm text-neutral-500'>
                        +{newClients} Today
                    </p>
                </div>
            </div>
            <div>
                <HiUsers size={45} color='#31013f' />
            </div>
        </div>
        <div className=' flex flex-1 bg-white shadow-md rounded-md px-7 py-4 items-center justify-between'>
            <div className=' space-y-2'>
                <div>
                    <p className=''>
                        Total Freelancers
                    </p>
                </div>
                <div>
                    <p className=' text-xl font-semibold'>
                        {totalFreelancers}
                    </p>
                </div>
                <div>
                    <p className=' text-sm text-neutral-500'>
                        +{newFreelancers} Today
                    </p>
                </div>
            </div>
            <div>
                <FaUsersCog size={45} color='#31013f' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default SummaryCards
