'use client'
import ClientProfile from '@/components/user/client/Profile'
import { publicRequest } from '@/requestMethods'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Page = () => {

    const params = useParams()

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getUser = async ()=> {
            try {
                const res = await publicRequest.get(`users/find/${params.id}`)

                setUser(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }
        getUser()
    }, [params?.id])



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


  return (
    <div>
        {user?.group === 'client' && (
            <ClientProfile user={user} />
        )}
    </div>
  )
}

export default Page