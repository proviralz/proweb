import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className=' p-7 flex items-center justify-between'>
        <div>
            <p className=' text-lg font-bold text-[#31013f]'>
                Affiliates
            </p>
        </div>
        <div className=' flex items-center gap-5'>
            <div>
                <Link href={'/affiliate/login'} className=' trans-purple-btn'>
                    Login
                </Link>
            </div>
            <div>
                <Link href={'/affiliate/register'}  className=' purple-btn'>
                   Join Now 
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Header