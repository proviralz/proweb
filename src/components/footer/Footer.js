import Image from 'next/image'
import React from 'react'
import { footerNav } from '../data/nav'
import Link from 'next/link'
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=' bg-[#31013f]'>
        <div className='p-5 md:p-10 text-white md:flex md:gap-10 lg:gap-20 justify-between'>
            <div className=' flex flex-col justify-around'>
                <div>
                    <Image src={'/assets/footer/logo.svg'} alt='proviralz' width={100} height={100} />
                </div>
                <div>
                    <div className='hidden md:flex items-center justify-center gap-5 mt-5'>
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
                </div>
            </div>
            <div className=' mt-5 md:flex gap-5 flex-1 justify-between '>
                {footerNav.map((item, i)=> (
                    <div key={i} className=' mt-4'>
                        <p>
                            {item.title}
                        </p>
                        <div className=' flex flex-col mt-3'>
                            {item.links?.map((link, j)=> (
                                <Link href={link.url} key={j} className=' text-xs mb-2 font-light text-neutral-300'>
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className=' px-10 mt-4 '>
                <p>
                    Mobile app:
                </p>
                <div className=' mt-2 flex md:flex-col gap-3 justify-between'>
                    <div>
                        <Image src={'/assets/footer/android.svg'} alt='play store' width={100} height={100} />
                    </div>
                    <div>
                        <Image src={'/assets/footer/ios.svg'} alt='play store' width={100} height={100} />
                    </div>
                </div>
            </div>
            <div>
                <div className=' md:hidden flex items-center justify-center gap-5 mt-5'>
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
            </div>
        </div>

        <div className=' border-t border-neutral-400 mt-5 p-5 flex justify-center items-center'>
            <p className=' text-xs md:text-base text-[#fff800]'>
                Copyrights &copy; 2023 All rights reserved
            </p>
        </div>
    </div>
  )
}

export default Footer