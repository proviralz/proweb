'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import ProfileDropdown from './ProfileDropdown';

const HeaderTwo = () => {

    const router = useRouter()
    const pathname = usePathname()
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)

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
                            Applications
                        </Link>
                        <Link href={'/agency'} className={pathname.startsWith('/agency')? 'text-[#31013f]': ''}>
                            Marketing Agency
                        </Link>
                    </nav>
                </div>
            </div>
            <div className=' hidden md:flex items-center'>
                <div className=' text-2xl border rounded-full p-1 border-neutral-500 text-neutral-500'>
                    <IoIosNotificationsOutline />
                </div>
                <div className=' relative cursor-pointer' >
                    <div className=' absolute top-0 right-5 bg-green-500 h-3 w-3 rounded-full' />
                    <Image onClick={()=> setShowProfileDropdown(!showProfileDropdown)} src={'/assets/home/profile.svg'} alt='profile' width={100} height={100} className=' h-8'  />
                    { showProfileDropdown && <div className=' absolute top-12 right-5'>
                        <ProfileDropdown />
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