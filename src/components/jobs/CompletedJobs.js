import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GoDotFill } from 'react-icons/go'
// import { jobs } from '../data/jobs'
import { useSelector } from 'react-redux'
import { publicRequest } from '@/requestMethods'

const CompletedJobs = () => {


    const user = useSelector(state=> state.user.info)
    const [projects, setProjects]  = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getProjects = async()=> {
            try {
                const res = await publicRequest.get(`project/${user?._id}`)

                const clientIds = [...new Set(res.data.map(proposal => proposal.clientId))]

                const jobIds = [...new Set(res.data.map(proposal => proposal.jobId))]

                const clients = await Promise.all(clientIds.map(async (clientId)=> {
                    const clientRes =  await  publicRequest.get(`users/find/${clientId}`)

                    return clientRes.data
                }))

                const jobs = await Promise.all(jobIds.map(async (jobId)=> {
                    const jobRes =  await  publicRequest.get(`jobs/${jobId}`)

                    return jobRes.data
                }))

                const populatedProjects = res.data.map(proposal => {
                    const clientData = clients.find(client => client._id === proposal.clientId)
                    const jobData = jobs.find(job => job._id === proposal.jobId)

                    return {...proposal, clientData, jobData}
                })

                setProjects(populatedProjects)
                setLoading(false)
            } catch (error) {
                console.log(error)
                if(error.response.status === 401){
                    setProposals(null)
                    setLoading(false)
                }
            }
        }

        getProjects()
    }, [user?._id])

    console.log(projects)


    if(loading) {
        return (
            <div className="section-center">
                <div className="section-path">
                    <div className="globe">
                    <div className="wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

    const jobs = projects?.filter((pro)=> pro.status === 'completed')


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
                <div className=' border-l py-5  flex flex-col items-center justify-center gap-1'>
                    <div>
                        <Image src={job.img} alt='' width={100} height={100} className=' h-10' />
                    </div>
                    <div>
                        <p className=' text-[0.5rem]'>
                            {job.poster}
                        </p>
                    </div>
                </div>
            </div>
        ))}
    </div>
  )
}

export default CompletedJobs