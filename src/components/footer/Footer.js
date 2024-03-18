import Image from 'next/image'
import React from 'react'
import { footerNav } from '../data/nav'
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' p-5 bg-[#31013f] text-white'>
        <div>
            <Image src={'/assets/footer/logo.svg'} alt='proviralz' width={100} height={100} />
        </div>
        <div className=' mt-5'>
            {footerNav.map((item, i)=> (
                <div key={i} className=' mt-4'>
                    <p>
                        {item.title}
                    </p>
                    <div className=' flex flex-col mt-3'>
                        {item.links?.map((link, j)=> (
                            <Link href={link.url} key={j} className=' mb-2 font-light text-neutral-300'>
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            ))}
        </div>
        <div className=' px-10 mt-4'>
            <p>
                Mobile app:
            </p>
            <div className=' mt-2 flex justify-between'>
                <div>
                    <Image src={'/assets/footer/android.svg'} alt='play store' width={100} height={100} />
                </div>
                <div>
                    <Image src={'/assets/footer/ios.svg'} alt='play store' width={100} height={100} />
                </div>
            </div>
        </div>
        <div className=' flex items-center justify-center gap-5 mt-5'>
            <p>
                Find us:
            </p>
            <p className='social-icon'>
                <FaXTwitter />
            </p>
            <p className='social-icon'>
                <FaInstagram />
            </p>
            <p className=' social-icon'>
                <FaFacebookF />
            </p>
        </div>

        <div className=' border-t border-neutral-400 mt-5 p-5 flex justify-center items-center'>
            <p className=' text-[#fff800]'>
                Copyrights &copy; 2023 All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer