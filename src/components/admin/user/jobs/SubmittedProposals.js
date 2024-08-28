import { publicRequest } from '@/requestMethods'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { FadeLoader } from 'react-spinners'

const SubmittedProposals = () => {


    const [proposals, setProposals]  = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getProposals = async()=> {
            try {
                const res = await publicRequest.get(`proposal/662f926943dc00c5671f8881`)

                const clientIds = [...new Set(res.data.map(proposal => proposal.clientId))]

                const clients = await Promise.all(clientIds.map(async (clientId)=> {
                    const clientRes =  await  publicRequest.get(`users/find/${clientId}`)

                    return clientRes.data
                }))

                const populatedProposals = res.data.map(proposal => {
                    const clientData = clients.find(client => client._id === proposal.clientId)

                    return {...proposal, clientData}
                })

                setProposals(populatedProposals)
                setLoading(false)
            } catch (error) {
                console.log(error)
                if(error.response.status === 401){
                    setProposals(null)
                    setLoading(false)
                }
            }
        }

        getProposals()
    }, [])

    // console.log(proposals)

    

    function getDaysAheadOrWeeksOrMonths(dateString) {
        const targetDate = new Date(dateString);
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds
        const difference = currentDate - targetDate;
    
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
            <div className=' h-full w-full flex items-center justify-center bg-white'>
                <FadeLoader />
            </div>
        )
    }



  return (
    <div>
        <div>
            {proposals.map((p, i)=> (
                <div key={i} className=' p-5 border-b flex flex-col md:flex-row justify-between items-center '>
                    <div className=' w-full flex items-center gap-5'>
                        <div  className=' h-10 md:h-20 w-10 md:w-20 rounded-full overflow-hidden'>
                            <Image src={p?.clientData.profilePic} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                        </div>
                        <div className=' flex-1 pr-10'>
                            <div className='  w-full flex items-center justify-between'>
                                <p className=' text-sm text-neutral-800'>
                                    {p?.clientData.fullName}
                                </p>
                                <p className=' text-xs'>
                                    {getDaysAheadOrWeeksOrMonths(p.createdAt)} ago
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs'>
                                    @{p?.clientData.username}
                                </p>
                            </div>
                            <div>
                                <p className=' text-xs'>
                                    {p.coverLetter}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className=' mt-5 md:mt-0 w-full md:w-40'>
                        <Link href={`/jobs/${p?.jobId}`} >
                            <p className=' purple-btn-long text-[0.7rem]'>
                                View proposal
                            </p>
                        </Link>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SubmittedProposals
