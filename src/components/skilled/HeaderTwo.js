import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";

const HeaderTwo = () => {
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
                        <Link href={'/'}>
                            My Jobs
                        </Link>
                        <Link href={'/'}>
                            Messages
                        </Link>
                        <Link href={'/'}>
                            Proposals
                        </Link>
                        <Link href={'/'}>
                            Marketing Agency
                        </Link>
                    </nav>
                </div>
            </div>
            <div className=' hidden md:flex items-center'>
                <div className=' text-2xl border rounded-full p-1 border-neutral-500 text-neutral-500'>
                    <IoIosNotificationsOutline />
                </div>
                <div className=' relative'>
                    <div className=' absolute top-0 right-5 bg-green-500 h-3 w-3 rounded-full' />
                    <Image src={'/assets/home/profile.svg'} alt='profile' width={100} height={100} className=' h-8'  />
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