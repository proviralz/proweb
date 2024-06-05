import { jobs } from '@/components/data/jobs'
import React, { useState } from 'react'
import UploadMilestone from './UploadMilestone'

const Earnings = ({jobs, project}) => {
    const [showForm, setShowForm] = useState(false)
  return (
    <div>
        <div>
            <UploadMilestone showForm={showForm} setShowForm={setShowForm} projectId={project?._id} />
        </div>
        <div className=' text-neutral-600 flex flex-wrap milestones gap-3 items-center justify-between'>
            <div>
                <p className=' font-extralight'>
                    Budget
                </p>
                <p className=' mt-3 text-xl font-light'>
                    &#8358;{jobs?.budget}
                </p>
            </div>
            <div>
                <p className=' font-extralight'>
                    In Escrow
                </p>
                <p className=' mt-3 text-xl font-light'>
                    &#8358;{jobs?.budget/2}
                </p>
            </div>
            <div>
                <p className=' font-extralight'>
                    Milestones Paid
                </p>
                <p className=' mt-3 text-xl font-light'>
                    &#8358;{jobs?.budget/2}
                </p>
            </div>
            <div>
                <p className=' font-extralight'>
                    Remaining payment
                </p>
                <p className=' mt-3 text-xl font-light'>
                    &#8358;{jobs?.budget/2}
                </p>
            </div>
            <div>
                <p className=' font-extralight'>
                    Total Earnings
                </p>
                <p className=' mt-3 text-xl font-light'>
                    &#8358;{jobs?.budget}
                </p>
            </div>
        </div>
        <div className=' mt-7 flex justify-end'>
            <div>
                <p onClick={()=> setShowForm(true)} className=' purple-btn'>
                    Submit work for payment
                </p>
            </div>
        </div>
    </div>
  )
}

export default Earnings