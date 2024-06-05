'use client'
import React, { useEffect, useState } from 'react'
import Footer from '../footer/Footer'
import HeaderTwo from '../header/HeaderTwo'
import Earnings from './progress/Earnings'
import FilesUpload from './progress/FilesUpload'
import Feedback from './progress/Feedback'
import { useParams } from 'next/navigation'
import { useSelector } from 'react-redux'
import { publicRequest } from '@/requestMethods'

const Progress = () => {

    const [selectedTab, setSelectedTab] = useState(1)
    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)
    const [showForm, setShowForm] = useState(false)
    const [project, setProject] = useState(null)
    const user = useSelector(state => state.user.info)
    const params = useParams()

    useEffect(()=> {
        const getJobs = async ()=> {
            try {
                const res = await publicRequest.get(`project/find/${params.id}`)

                const projectData = res.data

                const jobId = res.data.jobId

                const job = await publicRequest.get(`jobs/${jobId}`)
                const jobDetails = job.data

                const populatedProject = {...projectData, jobDetails} 

                // const proposalRes = await publicRequest.get(`proposal/find/${params.id}?providerId=${user?._id}`)
                // setProposal(proposalRes.data)
                
                
                setJobs(jobDetails)
                setProject(projectData)
                setLoading(false)
            } catch (error) {
                console.log(error)
                
            }
        }

        getJobs()
    }, [params.id, user?._id])



    const createdAtString = project?.createdAt;
    const createdAtDate = new Date(createdAtString);
    const now = new Date();

    const diffTime = now - createdAtDate;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    let timeAgoString;

    if (diffDays < 30) {
        timeAgoString = diffDays === 0 ? "today" : `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
    } else {
        const diffMonths = Math.floor(diffDays / 30);
        timeAgoString = `${diffMonths} month${diffMonths > 1 ? 's' : ''} ago`;
    }



    const createdAt = jobs?.createdAt;
    const date = new Date(createdAt);

    const options = { month: 'long', day: 'numeric' };
    const formattedDate = date.toLocaleDateString('en-US', options);



    function getDaysAheadOrWeeksOrMonths(dateString) {
        const targetDate = new Date(dateString);
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds
        const difference = targetDate - currentDate;
    
        // Convert the difference to days, weeks, and months
        const daysAhead = Math.ceil(difference / (1000 * 60 * 60 * 24));
        const weeksAhead = Math.ceil(daysAhead / 7);
        const monthsAhead = Math.ceil(daysAhead / 30);
    
        if (daysAhead < 7) {
            return `${daysAhead} day${daysAhead > 1 ? 's' : ''}`;
        } else if (daysAhead < 60) {
            return `${weeksAhead} week${weeksAhead > 1 ? 's' : ''}`;
        } else {
            return `${monthsAhead} month${monthsAhead > 1 ? 's' : ''}`;
        }
    }


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

    console.log(jobs)

  return (
    <div>
        <div>
            <HeaderTwo />
        </div>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className=' p-5 bg-white rounded-lg'>
                <div className=' space-y-3'>
                    <p className=' text-xl font-light text-[#31013f]'>
                        {jobs?.title}
                    </p>
                    <p className=' text-xs font-light'>
                        Active since {timeAgoString}
                    </p>
                </div>
                <div className=' flex border-b mt-7 text-sm tab-menu'>
                    <p onClick={()=> setSelectedTab(1)} className={`${selectedTab === 1 ? 'text-[#31013f] border-b border-[#31013f]' : 'text-neutral-500'} text-xs md:text-base `}>
                        Milestones & Earnings
                    </p>
                    <p onClick={()=> setSelectedTab(2)} className={`${selectedTab === 2 ? 'text-[#31013f] border-b border-[#31013f]' : 'text-neutral-500'} text-xs md:text-base `}>
                        Files uploaded
                    </p>
                    <p onClick={()=> setSelectedTab(3)} className={`${selectedTab === 3 ? 'text-[#31013f] border-b-2 border-[#31013f]' : 'text-neutral-500'} text-xs md:text-base `}>
                        Feedback
                    </p>
                </div>

                <div className=' mt-5'>
                    {selectedTab === 1 && 
                        <Earnings jobs={jobs} project={project} />
                    }
                    {selectedTab === 2 && 
                        <FilesUpload project={project} />
                    }
                    {selectedTab === 3 && 
                        <Feedback />
                    }
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Progress