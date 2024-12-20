import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' h-80 bg-[#31013f] gap-6 flex flex-col items-center justify-center'>
        <div>
            <p className=' text-white text-3xl text-center'>
                Do you want to become <br /> a proviralz affiliate?
            </p>
        </div>
        <div>
            <Link href={'/affiliate/register'}>
                <p className='yellow-btn-long w-56'>
                    Start Earning Now
                </p>
            </Link>
        </div>
    </div>
  )
}

export default Footer