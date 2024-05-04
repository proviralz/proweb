'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import ProfileDropdown from './ProfileDropdown';
import { useSelector } from 'react-redux';
import NotificationsDropdown from './NotificationsDropdown';

const HeaderTwo = () => {

    const router = useRouter()
    const pathname = usePathname()
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const user = useSelector(state => state.user.info)

    // console.log(pathname)
  return (
    <div className=' p-5 md:p-0 flex justify-between bg-white md:flex-col'>
        <div className=' flex items-center gap-2  md:px-10 md:py-5 md:border-b border-neutral-500'>
            <div className=' flex justify-between md:justify-start gap-3 md:gap-10 w-full items-center'>
                <div className=' md:hidden text-2xl'>
                    <AiOutlineMenu />
                </div>
                <Link href={'/'} className=''>
                    <Image src={'/assets/logo/logo.svg'}  alt='proviralz' width={100} height={100} />
                </Link>
                <div className=' hidden md:flex'>
                    <nav className=' flex gap-4 text-neutral-500 text-sm font-light'>
                        <Link href={'/jobs'} className={pathname.startsWith('/jobs')? 'text-[#31013f]': ''}>
                            My Jobs
                        </Link>
                        <Link href={'/messages'} className={pathname.startsWith('/messages')? 'text-[#31013f]': ''}>
                            Messages
                        </Link>
                        <Link href={'/proposals'} className={pathname.startsWith('/proposals')? 'text-[#31013f]': ''}>
                            Proposals
                        </Link>
                        <Link href={'/agency'} className={pathname.startsWith('/agency')? 'text-[#31013f]': ''}>
                            Marketing Agency
                        </Link>
                    </nav>
                </div>
            </div>
            <div className=' hidden md:flex gap-5 items-center'>
                <div className='relative'>
                    <div className='  text-2xl border rounded-full p-1 border-neutral-500 text-neutral-500'>
                        <IoIosNotificationsOutline />
                    </div>
                    <div className=' absolute  right-0 top-12'>
                        <NotificationsDropdown userId={user?._id} />
                    </div>
                </div>
                <div className=' relative cursor-pointer' >
                    <div className=' absolute top-0 right-0 bg-green-500 h-3 w-3 rounded-full' />
                    <div className=' h-9 w-9 rounded-full border overflow-hidden'>
                        <Image onClick={()=> setShowProfileDropdown(!showProfileDropdown)} src={user?.profilePic} alt='profile' width={100} height={100} className='object-cover '  />
                    </div>
                    { showProfileDropdown && <div className=' absolute top-12 right-5'>
                        <ProfileDropdown user={user} />
                    </div>}
                </div>
            </div>
        </div>
        {/* <div className=' md:px-10 md:py-5'>
            <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                <FiSearch />
                <input type="text" name="" id="" className=' w-28 md:w-full outline-none  text-neutral-600 ' placeholder='Search services' />
            </div>
        </div> */}
    </div>
  )
}

export default HeaderTwo