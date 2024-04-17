import React from 'react'
import { GoDotFill } from 'react-icons/go'
import { jobs } from '../data/jobs'

const CompletedProjects = () => {
  return (
    <div className=' flex flex-col gap-4'>
        {jobs.map((job, i)=> (
            <div key={i}  className=' border rounded-sm flex text-neutral-600'>
                <div className=' p-5 flex-1'>
                    <div>
                        <p className=' text-[#31013f]'>
                            {job.title}
                        </p>
                    </div>
                    <div className=' mt-1 text-[0.8rem]'>
                        {job.tasks.map((t, j)=> (
                            <div key={j} className=' flex gap-3 items-center pl-3'>
                                <GoDotFill />
                                <p>
                                    {t}
                                </p>
                            </div>
                        ))}
                    </div>
                    <div className=' flex items-center gap-4 mt-1 text-xs'>
                        <p>
                            ${job.price}
                        </p>
                        <p>
                            {job.negotiable? 'Negotiable': 'Fixed'}
                        </p>
                        <p>
                            {job.jobType}
                        </p>
                    </div>
                    <div className=' mt-1'>
                        <p className=' text-xs'>
                            <span>Status:</span> {job.status}
                        </p>
                    </div>
                </div>
                {/* <div className=' py-5 px-10  flex items-end justify-center gap-1'>
                    <div>
                        <p className=' text-lg'>
                            Closed
                        </p>
                    </div>
                </div> */}
            </div>
        ))}
    </div>
  )
}

export default CompletedProjects