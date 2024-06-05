'use client'
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { IoIosNotificationsOutline } from "react-icons/io";
import ProfileDropdown from './ProfileDropdown';
import { useDispatch, useSelector } from 'react-redux';
import NotificationsDropdown from './NotificationsDropdown';
import { CiLogout, CiMail } from 'react-icons/ci';
import { TbSocial } from 'react-icons/tb';
import { LuMailSearch } from 'react-icons/lu';
import { PiHandTapThin, PiListPlusThin } from 'react-icons/pi';
import { MdClose } from 'react-icons/md';
import { logoutUser } from '@/redux/userSlice';

const HeaderTwo = () => {

    const router = useRouter()
    const pathname = usePathname()
    const [showProfileDropdown, setShowProfileDropdown] = useState(false)
    const [showNotificationDropdown, setShowNotificationDropdown] = useState(false)
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const user = useSelector(state => state.user.info)

    const dispatch = useDispatch()
    // const router = useRouter()

    const handleLogout =()=> {
        dispatch(logoutUser())
        router.push('/login')
    }


    if(!user) {
        router.push('/login')
    }

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
      }

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    // console.log(pathname)
  return (
    <div className=' p-5 md:p-0 flex justify-between bg-white md:flex-col'>
        <div className=' flex items-center gap-2  md:px-10 md:py-5 md:border-b border-neutral-500'>
            <div className=' flex justify-between md:justify-start gap-3 md:gap-10 w-full items-center'>
                <div className=' md:hidden text-2xl' onClick={toggleMobileMenu}>
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
                        <div className="relative">
                            <button
                                onClick={toggleDropdown}
                                className={`relative ${pathname.startsWith('/agency') ? 'text-[#31013f]' : ''}`}
                            >
                                Marketing Agency
                            </button>
                            {dropdownOpen && (
                                <ul className="absolute py-3 left-0 mt-2 w-60 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                                    <li>
                                        <Link href="/agency/email" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300">
                                            <div className=' flex items-center gap-5 '>
                                                <CiMail /> <p>Email marketing</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/agency/social" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300">
                                            <div className=' flex items-center gap-5 '>
                                                <TbSocial /> <p>Social media marketing</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/agency/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300">
                                            <div className=' flex items-center gap-5 '>
                                                <LuMailSearch /> <p>Search engine optimization</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/agency/ppc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300">
                                            <div className=' flex items-center gap-5 '>
                                                <PiHandTapThin /> <p>Pay per click management</p>
                                            </div>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/agency/promo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300">
                                            <div className=' flex items-center gap-5 '>
                                                <PiListPlusThin/> <p>Service promo list</p>
                                            </div>
                                        </Link>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </nav>
                </div>
            </div>
            <div className=' hidden md:flex gap-5 items-center'>
                <div className='relative'>
                    <div onClick={()=> setShowNotificationDropdown(!showNotificationDropdown)} className='  text-2xl border rounded-full p-1 border-neutral-500 text-neutral-500'>
                        <IoIosNotificationsOutline />
                    </div>
                    {showNotificationDropdown && <div className=' absolute  right-0 top-12'>
                        <NotificationsDropdown userId={user?._id} />
                    </div>}
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






        {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='md:hidden shadow-md fixed top-0 left-0 h-screen bg-white w-4/5 p-5'>
            <div className=' flex justify-between'>
                <div className=' flex gap-4 items-center'>
                    <div>
                        <div className=' h-9 w-9 rounded-full border overflow-hidden'>
                            <Image src={user?.profilePic} alt='profile' width={100} height={100} className='object-cover '  />
                        </div>
                    </div>
                    <div className=' text-neutral-600'>
                        <p>
                            {user?.fullName}
                        </p>
                        <p className=' text-xs font-light'>
                            {user?.username}
                        </p>
                    </div>
                </div>
                <div>
                    <p className=' text-neutral-600' onClick={toggleMobileMenu}>
                        <MdClose size={30} />
                    </p>
                </div>
            </div>
          <nav className='flex mt-8 flex-col gap-4 text-neutral-500 text-sm font-light'>
            <Link href={'/jobs'} className={pathname.startsWith('/jobs') ? 'text-[#31013f]' : ''} onClick={toggleMobileMenu}>
              My Jobs
            </Link>
            <Link href={'/messages'} className={pathname.startsWith('/messages') ? 'text-[#31013f]' : ''} onClick={toggleMobileMenu}>
              Messages
            </Link>
            <Link href={'/proposals'} className={pathname.startsWith('/proposals') ? 'text-[#31013f]' : ''} onClick={toggleMobileMenu}>
              Proposals
            </Link>
            <div className="relative">
              <button onClick={toggleDropdown} className={`relative ${pathname.startsWith('/agency') ? 'text-[#31013f]' : ''}`}>
                Marketing Agency
              </button>
              {dropdownOpen && (
                <ul className="py-3 mt-2 w-full bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <li>
                    <Link href="/agency/email" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300" onClick={toggleMobileMenu}>
                      <div className='flex items-center gap-5'>
                        <CiMail /> <p>Email marketing</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/agency/social" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300" onClick={toggleMobileMenu}>
                      <div className='flex items-center gap-5'>
                        <TbSocial /> <p>Social media marketing</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/agency/seo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300" onClick={toggleMobileMenu}>
                      <div className='flex items-center gap-5'>
                        <LuMailSearch /> <p>Search engine optimization</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/agency/ppc" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300" onClick={toggleMobileMenu}>
                      <div className='flex items-center gap-5'>
                        <PiHandTapThin /> <p>Pay per click management</p>
                      </div>
                    </Link>
                  </li>
                  <li>
                    <Link href="/agency/promo" className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#31013f] hover:text-yellow-300" onClick={toggleMobileMenu}>
                      <div className='flex items-center gap-5'>
                        <PiListPlusThin /> <p>Service promo list</p>
                      </div>
                    </Link>
                  </li>
                </ul>
              )}
            </div>
          </nav>

          <div className=' mt-6 border-t py-6'>
            <div className=' w-full'>
                <div className=' flex flex-col gap-3 text-neutral-500 text-sm'>
                    <Link href={'/wallet'}>
                        Wallet
                    </Link>
                    {/* <Link href={'/'}>
                        Become a seller
                    </Link> */}
                    <Link href={'/profile'}>
                        Settings
                    </Link>
                    <div onClick={handleLogout} className=' cursor-pointer flex items-center gap-3 font-light'>
                        <p>
                            <CiLogout />
                        </p>
                        <p>
                            Logout
                        </p>
                    </div>
                </div>
            </div>
          </div>
        </div>
      )}
        
    </div>
  )
}

export default HeaderTwo