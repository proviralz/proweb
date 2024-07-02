import { publicRequest, userRequest } from '@/requestMethods'
import Image from 'next/image'
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import { LuMessageSquare } from "react-icons/lu";

const NotificationsDropdown = (
    {
        userId, 
        onUnseenCountChange, 
        isLoading,
        notifications, 
        setNotifications}
) => {


    // const [notifications, setNotifications] = useState(null)
    const [currentTab, setCurrentTab] = useState('all');
    

    // useEffect(()=> {
    //     const getNotif = async()=> {
    //         if(userId) {
    //             try {
    //                 const res = await userRequest.get(`notifications/${userId}`)

    //                 setNotifications(res.data)
    //                 setIsLoading(false)
    //                 const unseenCount = res.data.filter((notif)=> !notif.seen).length;
    //                 onUnseenCountChange(unseenCount)
    //             } catch (error) {
    //                 console.log(error)
    //                 setIsLoading(false)
    //             }
    //         }
    //     }
    //     getNotif()
    // }, [userId, onUnseenCountChange])

    const markAsSeen = async (notificationId) => {
        try {
            await userRequest.put(`notifications/mark-as-seen/${notificationId}`);
            setNotifications((prevNotifications) =>
            prevNotifications.map((notif) =>
                notif._id === notificationId ? { ...notif, seen: true } : notif
            )
            );
        } catch (error) {
            console.log(error);
        }
    };
    


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

    const filteredNotifications =
        currentTab === 'unread'
            ? notifications.filter((notif) => !notif.seen)
            : notifications;

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
                        <p className={`px-5 py-2 text-xs rounded-md cursor-pointer ${
                            currentTab === 'all' ? 'bg-[#9747FF] text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => setCurrentTab('all')}
                        >
                            All ({notifications?.length})
                        </p>
                    </div>
                </div>
                <div>
                    <div>
                        <p className={`px-5 py-2 text-xs rounded-md cursor-pointer ${
                            currentTab === 'unread' ? 'bg-[#9747FF] text-white' : 'bg-gray-200'
                            }`}
                            onClick={() => setCurrentTab('unread')}
                        >
                            Unread ({notifications?.filter(notif => notif.seen === false).length})
                        </p>
                    </div>
                </div>
            </div>
            <div className=' h-96 overflow-y-scroll'>
                {notifications && filteredNotifications?.map((n, i)=> (
                    <div key={i} className={` bg-slate-50 ${n.category === 'message' && 'bg-red-300/10'} p-3 flex gap-4 items-center`}>
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
                                <Link href={n.link} onClick={()=> markAsSeen(n._id)} >
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