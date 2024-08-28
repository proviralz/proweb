import React, { useState } from 'react'
import PendingJobs from './PendingJobs'
import CompletedJobs from './CompletedJobs'
import SubmittedProposals from './SubmittedProposals'

const UserJobs = () => {

    const [selectedTab, setSelectedTab] = useState(1)
  return (
    <div>
        <div className=' flex border-b text-sm tab-menu'>
            <p onClick={()=> setSelectedTab(1)} className={`${selectedTab === 1 ? 'text-[#31013f] border-b border-[#31013f]' : 'text-neutral-500'} text-xs md:text-base `}>
                Pending jobs
            </p>
            <p onClick={()=> setSelectedTab(2)} className={`${selectedTab === 2 ? 'text-[#31013f] border-b border-[#31013f]' : 'text-neutral-500'} text-xs md:text-base `}>
                Completed jobs
            </p>
            <p onClick={()=> setSelectedTab(3)} className={`${selectedTab === 3 ? 'text-[#31013f] border-b-2 border-[#31013f]' : 'text-neutral-500'} text-xs md:text-base `}>
                Job Proposals
            </p>
        </div>


        <div className=' mt-5'>
            {selectedTab === 1 && 
                (<PendingJobs />)
            }
            {selectedTab === 2 && 
                (<CompletedJobs />)
            }
            {selectedTab === 3 && 
                (<SubmittedProposals />)
            }
        </div>
    </div>
  )
}

export default UserJobs
