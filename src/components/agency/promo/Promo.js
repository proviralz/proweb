import HeaderTwo from '@/components/header/HeaderTwo'
import React from 'react'
import WhyHireUs from './WhyHireUs'
import Image from 'next/image'
import Plans from './Plans'
import Footer from '@/components/footer/Footer'
import { IoMdCheckmark } from 'react-icons/io'
import { BsArrowRight } from 'react-icons/bs'

const Promo = () => {
  return (
    <div>
        <div>
            <HeaderTwo />
        </div>

        {/* <div>
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
        </div> */}

        <div className=' p-10 space-y-16'>


            {/* desc */}
            <div className=' flex items-center gap-16'>
                <div className=' space-y-10 w-3/5'>
                    <div className=' inline-block'>
                        <p className=' text-sm bg-yellow-200/50 rounded-full uppercase px-4 py-1'>
                            we can help you
                        </p>
                    </div>
                    <div>
                        <p className=' tracking-wider text-4xl text-neutral-600 font-semibold'>
                            Innovate <span className=' italic text-fuchsia-600'>ideas</span> for your oriduct and Business
                        </p>
                    </div>
                    <div>
                        <p className=' text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className=' -mt-10'>
                    <div className=' h-full w-full'>
                        <Image src={'/assets/agency/promo.svg'} alt='' width={100} height={100} className=' h-full w-full object-cover' />
                    </div>
                </div>
            </div>

            {/* why */}
            <div>
                <div className='bg-slate-100 h-32 relative overflow-hidden rounded-3xl'>
                    <div
                        className='absolute scale-110 inset-0 bg-no-repeat bg-cover bg-center'
                        style={{
                            backgroundImage: `url('/assets/agency/gradient.svg')`,
                        }}
                    />
                    <div className='absolute inset-0 flex  justify-around items-center'>
                        <div className='flex flex-col items-center gap-2'>
                            <p className=' text-lg'>
                                20M+
                            </p>
                            <p className=' text-xs font-light uppercase'>
                                revenue generated
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className=' text-lg'>
                                700+
                            </p>
                            <p className=' text-xs font-light uppercase'>
                                projects done
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className=' text-lg'>
                                300+
                            </p>
                            <p className=' text-xs font-light uppercase'>
                                clients
                            </p>
                        </div>
                        <div className='flex flex-col items-center gap-2'>
                            <p className=' text-lg'>
                                80+
                            </p>
                            <p className=' text-xs font-light uppercase'>
                                professional team
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* packages */}
            <div>
                <div className=' mt-10 grid grid-cols-2 gap-8 text-neutral-600'>
                    <div className=' p-5 bg-neutral-100 rounded-xl space-y-5'>
                        <div className=' text-xl flex gap-5 items-center'>
                            <div className=' h-8 w-8'>
                                <Image src={'/assets/agency/icons/seo.svg'} alt='' width={100} height={100} />
                            </div>
                            <p>
                                Search Engine Optimization
                            </p>
                        </div>
                        <p className=' text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            <BsArrowRight size={30} />  
                        </p>
                    </div>

                    <div className=' p-5 bg-neutral-100 rounded-xl space-y-5'>
                        <div className=' text-xl flex gap-5 items-center'>
                            <div className=' h-8 w-8'>
                                <Image src={'/assets/agency/icons/social.svg'} alt='' width={100} height={100} />
                            </div>
                            <p>
                                Social Media Marketing
                            </p>
                        </div>
                        <p className=' text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            <BsArrowRight size={30} />  
                        </p>
                    </div>

                    <div className=' p-5 bg-neutral-100 rounded-xl space-y-5'>
                        <div className=' text-xl flex gap-5 items-center'>
                            <div className=' h-8 w-8'>
                                <Image src={'/assets/agency/icons/email.svg'} alt='' width={100} height={100} />
                            </div>
                            <p>
                                Email Marketing
                            </p>
                        </div>
                        <p className=' text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            <BsArrowRight size={30} />  
                        </p>
                    </div>

                    <div className=' p-5 bg-neutral-100 rounded-xl space-y-5'>
                        <div className=' text-xl flex gap-5 items-center'>
                            <div className=' h-8 w-8'>
                                <Image src={'/assets/agency/icons/seo.svg'} alt='' width={100} height={100} />
                            </div>
                            <p>
                                Pay Per Click Management
                            </p>
                        </div>
                        <p className=' text-sm font-light'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                        <p>
                            <BsArrowRight size={30} />  
                        </p>
                    </div>

                    
                </div>
            </div>
        </div>

        <div>
            <Footer />
        </div>

    </div>
  )
}

export default Promo