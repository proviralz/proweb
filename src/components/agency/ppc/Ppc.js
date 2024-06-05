import HeaderTwo from '@/components/header/HeaderTwo'
import React from 'react'
import WhyHireUs from './WhyHireUs'
import Image from 'next/image'
import Plans from './Plans'
import Footer from '@/components/footer/Footer'
import { IoMdCheckmark } from 'react-icons/io'

const Ppc = () => {
  return (
    <div>
        <div>
            <HeaderTwo />
        </div>

        <div>
            <div className='bg-slate-100 h-48 relative overflow-hidden'>
                <div
                    className='absolute scale-110 inset-0 bg-no-repeat bg-cover bg-center'
                    style={{
                        backgroundImage: `url('/assets/extra/gradient.svg')`,
                    }}
                />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <p className='text-white text-4xl font-semibold text-center'>
                        Pay Per Click Management
                    </p>
                    <p className=' text-white text-lg font-light text-center mt-3'>
                        Maximize your clicks. Our Pay Per Click management drives results <br />
                        Start optimizing today
                    </p>
                </div>
            </div>
        </div>

        <div className=' p-10 space-y-16'>


            {/* desc */}
            <div className=' flex items-center gap-16'>
                <div className=' space-y-10 w-3/5'>
                    <div>
                        <p className=' text-2xl'>
                            Social Media Marketing Services:
                        </p>
                    </div>
                    <div>
                        <p className=' text-justify text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                    <div>
                        <ul className=" list-inside space-y-4 text-sm font-light">
                            <li className="text-gray-700 flex gap-6">
                                <IoMdCheckmark size={40} />
                                <div className=' space-y-5'>
                                    <p className=' text-xl font-normal'>
                                        Get results instantly
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  
                                    </p>
                                </div>
                                
                            </li>
                            <li className="text-gray-700 flex gap-6">
                                <IoMdCheckmark size={40} />
                                <div className=' space-y-5'>
                                    <p className=' text-xl font-normal'>
                                        Generate high-quality traffic:
                                    </p>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,  
                                    </p>
                                </div>
                                
                            </li>
                            
                        </ul>
                    </div>
                    {/* <div>
                        <div className=' inline-block'>
                            <p className=' purple-btn text-xs'>
                                Book a package
                            </p>
                        </div>
                    </div> */}
                </div>
                <div>
                    <div className=' h-60 w-60'>
                        <Image src={'/assets/agency/ppc.svg'} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                    </div>
                </div>
            </div>

            {/* why */}
            <div className=' flex justify-center gap-7 flex-col'>
                <div>
                    <p className=' text-center text-2xl'>
                        Support features from us
                    </p>
                </div>

                <div>
                    <p className=' text-center text-sm font-light'> 
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>

                <div className=' mt-10 grid grid-cols-3 gap-8 text-neutral-600'>
                    <div className='flex flex-col gap-3 items-center p-5 bg-neutral-100 rounded-xl'>
                        <p className=' text-xl'>
                            Budget Management
                        </p>
                        <p className=' text-center text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className='flex flex-col gap-3 items-center p-5 bg-neutral-100 rounded-xl'>
                        <p className=' text-xl text-center'>
                            Campaign Setup and Configuration
                        </p>
                        <p className=' text-center text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className='flex flex-col gap-3 items-center p-5 bg-neutral-100 rounded-xl'>
                        <p className=' text-xl text-center'>
                            Budget Management
                        </p>
                        <p className=' text-center text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className='flex flex-col gap-3 items-center p-5 bg-neutral-100 rounded-xl'>
                        <p className=' text-xl text-center'>
                            Campaign Setup and Configuration
                        </p>
                        <p className=' text-center text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className='flex flex-col gap-3 items-center p-5 bg-neutral-100 rounded-xl'>
                        <p className=' text-xl'>
                            Maximum earnings
                        </p>
                        <p className=' text-center text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className='flex flex-col gap-3 items-center p-5 bg-neutral-100 rounded-xl'>
                        <p className=' text-xl'>
                            Budget Management
                        </p>
                        <p className=' text-center text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
            </div>

            {/* packages */}
            <div>
                <Plans />
            </div>
        </div>

        <div>
            <Footer />
        </div>

    </div>
  )
}

export default Ppc