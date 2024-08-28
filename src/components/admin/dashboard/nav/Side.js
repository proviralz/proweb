import React, { useState } from 'react'
import { navData } from './data'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { IoLogOutOutline } from 'react-icons/io5';
import { useDispatch } from 'react-redux';
import { logoutAdmin } from '@/redux/adminUserSlice';

const Side = ({isSelected, setIsSelected}) => {

    const [openDropdown, setOpenDropdown] = useState(null);
    const pathname = usePathname()
    const dispatch = useDispatch()

    // console.log(pathname)

    const toggleDropDown = (index) => {
        setOpenDropdown(openDropdown === index? null : index)
    }

    const handleItemClick = (title) => {
        setIsSelected(title);
    };

    const getNavItemClass = (title) =>
        pathname.includes(title) ? 'bg-[#31013f] text-white' : 'text-neutral-600';

    const getSubNavItemClass = (title) =>
        pathname.includes(title) ? 'bg-[#31013f]/30 text-black' : 'text-neutral-600';





  return (
    <div className='h-full w-full'>
        <div className='px-5 py-10 flex flex-col justify-between h-full bg-white'>
            <div>
                {navData.map((nav, i) => (
                    <div key={i}>
                        <div 
                            className={`p-2 rounded-md flex items-center justify-between ${getNavItemClass(nav.title)}`} 
                            onClick={()=> handleItemClick(nav.title)}>
                            <Link href={`/admin/${nav.title}`}>
                                <div className=' flex gap-5 items-center'>
                                    <div>
                                        {nav.icon}
                                    </div>
                                    <div>
                                        <p className=' capitalize'>
                                            {nav.title}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                            {nav.sub && (
                                <div 
                                    className="nav-arrow" 
                                    aria-expanded={openDropdown === i}
                                    onClick={()=> toggleDropDown(i)}>
                                    {openDropdown === i ? <IoIosArrowUp /> : <IoIosArrowDown />}
                                </div>
                            )}
                        </div>
                        {nav.sub && openDropdown === i && (
                            <div className=' my-3 pl-5 space-y-2'>
                                {nav.sub.map((sub, j) => (
                                    <Link key={j} href={`/admin/users/${sub.title}`} >
                                        <div 
                                            className={`p-2 rounded-md flex items-center cursor-pointer hover:bg-gray-100 ${getSubNavItemClass(sub.title)}`}>
                                            <p className=' capitalize'>
                                                {sub.title}
                                            </p>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <div className=' mb-10 flex gap-5 items-center'>
                <div>
                    <IoLogOutOutline />
                </div>
                <div>
                    <p onClick={()=> dispatch(logoutAdmin())} className=' cursor-pointer capitalize'>
                        Log Out
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Side
