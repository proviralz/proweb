import { publicRequest, userRequest } from '@/requestMethods'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { LuMessageSquare } from "react-icons/lu";

const NotificationsDropdown = ({userId}) => {


    const [notifications, setNotifications] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(()=> {
        const getNotif = async()=> {
            if(userId) {
                try {
                    const res = await userRequest.get(`notifications/${userId}`)

                    setNotifications(res.data)
                    setIsLoading(false)
                } catch (error) {
                    console.log(error)
                    setIsLoading(false)
                }
            }
        }
        getNotif()
    }, [userId])


    function getDaysAheadOrWeeksOrMonths(dateString) {
        const targetDate = new Date(dateString);
        const currentDate = new Date();
    
        // Calculate the difference in milliseconds
        const difference =  currentDate - targetDate;
    
        // Convert the difference to minutes, hours, days, weeks, and months
        const minutesAhead = Math.ceil(difference / (1000 * 60));
        const hoursAhead = Math.ceil(difference / (1000 * 60 * 60));
        const daysAhead = Math.ceil(difference / (1000 * 60 * 60 * 24));
        const weeksAhead = Math.ceil(daysAhead / 7);
        const monthsAhead = Math.ceil(daysAhead / 30);
    
        if (minutesAhead < 60) {
            return `${minutesAhead} minute${minutesAhead > 1 ? 's' : ''}`;
        } else if (hoursAhead < 24) {
            return `${hoursAhead} hour${hoursAhead > 1 ? 's' : ''}`;
        } else if (daysAhead < 7) {
            return `${daysAhead} day${daysAhead > 1 ? 's' : ''}`;
        } else if (daysAhead < 60) {
            return `${weeksAhead} week${weeksAhead > 1 ? 's' : ''}`;
        } else {
            return `${monthsAhead} month${monthsAhead > 1 ? 's' : ''}`;
        }
    }

    console.log(notifications)


    if(isLoading) {
        return (
        <div className="  w-96 h-80 rounded-md bg-white shadow-md flex items-center justify-center">
            <div className="animate-spin inline-block size-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
            <span className="sr-only">Loading...</span>
            </div>
        </div>
        )
    }


  return (
    <div className=' w-96 rounded-md bg-white shadow-md'>
        <div>
            <div className=' p-5 border-b'>
                <p>
                    Your notifications
                </p>
            </div>
            <div className=' px-5 py-3 flex items-center gap-5'>
                <div>
                    <div>
                        <p className=' bg-[#9747FF] px-5 py-2 text-white text-xs rounded-md'>
                            All ({notifications?.length})
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p>
                            Unread ({notifications?.filter(notif => notif.seen === false).length})
                        </p>
                    </div>
                </div>
            </div>
            <div className=' h-96 overflow-y-scroll'>
                {notifications && notifications?.map((n, i)=> (
                    <div key={i} className={` bg-slate-50 ${n.category === 'message' && 'bg-red-200/10'} p-3 flex gap-4 items-center`}>
                        <div>
                            <p>
                                <LuMessageSquare size={20} />
                            </p>
                        </div>
                        <div className=' space-y-1'>
                            <div>
                                <p className=' font-light text-sm'>
                                    {n.message}
                                </p>
                            </div>
                            <div>
                                <div>
                                    <p className=' text-xs font-light'>
                                        {getDaysAheadOrWeeksOrMonths(n.createdAt)} ago
                                    </p>
                                </div>
                            </div>
                            <div className=' inline-block border border-[#31013f] text-[#31013f] text-[0.8rem] px-4 py-2 rounded-sm cursor-pointer'>
                                <Link href={n.link} >
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