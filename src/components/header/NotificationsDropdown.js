import { publicRequest, userRequest } from '@/requestMethods'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { LuMessageSquare } from "react-icons/lu";

const NotificationsDropdown = ({userId}) => {


    const [notifications, setNotifications] = useState(null)

    useEffect(()=> {
        const getNotif = async()=> {
            if(userId) {
                try {
                    const res = await userRequest.get(`notifications/${userId}`)

                    setNotifications(res.data)
                } catch (error) {
                    console.log(error)
                }
            }
        }
        getNotif()
    }, [userId])

    console.log(notifications)


  return (
    <div className=' w-96 rounded-md bg-white shadow-md'>
        <div>
            <div className=' p-5 border-b'>
                <p>
                    Your notifications
                </p>
            </div>
            <div className=' px-5 py-3'>
                Hollaaaa
            </div>
            <div className=' h-96 overflow-y-scroll'>
                {notifications && notifications?.map((n, i)=> (
                    <div key={i} className={` bg-slate-50 ${n.category === 'message' && 'bg-red-100/20'} p-3 flex gap-4 items-center`}>
                        <div>
                            <p>
                                <LuMessageSquare size={20} />
                            </p>
                        </div>
                        <div className=' space-y-2'>
                            <div>
                                <p className=' font-light text-sm'>
                                    {n.message}
                                </p>
                            </div>
                            <div>
                                <Link href={n.link} className='border border-[#31013f] text-[#31013f] text-[0.8rem] px-4 py-2 rounded-sm cursor-pointer'>
                                    Open
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default NotificationsDropdown