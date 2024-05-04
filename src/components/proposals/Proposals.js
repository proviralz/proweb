'use client'
import React, { useEffect, useState } from 'react'
import Header from '../profile/Header'
import Footer from '../footer/Footer'
import HeaderTwo from '../skilled/HeaderTwo'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { publicRequest } from '@/requestMethods'

const Proposals = () => {

    const user = useSelector(state=> state.user.info)
    const [proposals, setProposals]  = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getProposals = async()=> {
            try {
                const res = await publicRequest.get(`proposal/${user?._id}`)

                

                setProposals(res.data)
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
    }, [user?._id])


    const counntAccepted =(proposals)=> {
        return proposals.filter(prop => prop.status === 'accepted').length
    }

    console.log(proposals)




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




  return ( proposals &&
    <div>
        <div>
            <HeaderTwo />
        </div>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className=' p-5 bg-white rounded-lg text-neutral-600 flex flex-col gap-5'>
                <div>
                    <p >
                        Your proposals
                    </p>
                </div>
                <Link href={'/proposals/submitted'} className=' border rounded-md p-4 text-sm'>
                    <p>
                        Submitted proposals ({proposals?.length})
                    </p>
                </Link>
                <div className=' border rounded-md p-4 text-sm'>
                    <p>
                        Accepted proposals ({counntAccepted(proposals)})
                    </p>
                </div>
                <div className=' border rounded-md p-4 text-sm'>
                    <p>
                        Archive (0)
                    </p>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Proposals