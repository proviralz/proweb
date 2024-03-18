import Image from 'next/image';
import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";

const Header = () => {
  return (
    <div className=' p-5 flex justify-between bg-white'>
        <div className=' flex items-center gap-2'>
            <div className=' text-2xl'>
                <AiOutlineMenu />
            </div>
            <div>
                <Image src={'/assets/logo/logo.svg'}  alt='proviralz' width={100} height={100} />
            </div>
        </div>
        <div>
            <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                <FiSearch />
                <input type="text" name="" id="" className=' w-28 outline-none  text-neutral-600 ' placeholder='Search services' />
            </div>
        </div>
    </div>
  )
}

export default Header