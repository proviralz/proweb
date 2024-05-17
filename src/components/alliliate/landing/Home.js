import React from 'react'
import Header from './Header'
import Image from 'next/image'
import { FaArrowRightLong } from 'react-icons/fa6'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <div>
            <Header />
        </div>

        {/* banner */}
        <div>
            <div className='bg-slate-100 h-80 relative overflow-hidden'>
                <div
                    className='absolute scale-110 inset-0 bg-no-repeat bg-cover bg-center'
                    style={{
                        backgroundImage: `url('/assets/affiliate/banner.svg')`,
                    }}
                />
                <div className='absolute inset-0 flex flex-col justify-center items-center'>
                    <p className='text-white text-5xl text-center'>
                        Join our affiliate program
                    </p>
                    <p className='text-white text-3xl mt-2 italic text-center'>
                        Where passion meets profit
                    </p>
                    <p className=' text-white font-light text-2xl mt-3'>
                        Become a creative catalyst and earn with every referral
                    </p>
                    <div className=' w-40 mt-14'>
                        <p className='yellow-btn-long'>
                            Start earning now
                        </p>
                    </div>
                </div>
            </div>
        </div>


        {/* how it works */}
        <div className=' p-10'>
            <div>
                <div className=' text-center text-2xl font-semibold text-neutral-600'>
                    <p>
                        How it works
                    </p>
                </div>

                <div className=' mt-10 flex items-center justify-between'>
                    <div className=' flex flex-col items-center gap-3 text-neutral-500'>
                        <div>
                            <Image src={'/assets/affiliate/landing/1.svg'} alt='' width={100}  height={100} />
                        </div>
                        <div>
                            <p className=' text-lg'>
                                Join affiliate program
                            </p>
                        </div>
                        <div className=' text-center font-light'>
                            <p>
                                Sign up for affiliate program <br /> gain access to different marketing materials
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className=' text-neutral-500'>
                            <FaArrowRightLong size={40} />
                        </p>
                    </div>
                    <div className=' flex flex-col items-center gap-3 text-neutral-500'>
                        <div>
                            <Image src={'/assets/affiliate/landing/2.svg'} alt='' width={100}  height={100} />
                        </div>
                        <div>
                            <p className=' text-lg'>
                                Share
                            </p>
                        </div>
                        <div className=' text-center font-light'>
                            <p>
                                Share your unique proviralz affiliate link <br /> with your audience
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className=' text-neutral-500'>
                            <FaArrowRightLong size={40} />
                        </p>
                    </div>
                    <div className=' flex flex-col items-center gap-3 text-neutral-500'>
                        <div>
                            <Image src={'/assets/affiliate/landing/3.svg'} alt='' width={100}  height={100} />
                        </div>
                        <div>
                            <p className=' text-lg'>
                                Start earning
                            </p>
                        </div>
                        <div className=' text-center font-light'>
                            <p>
                                Earn commissions for every new user <br /> invited to proviralz
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            

            {/* benefits */}
            <div className=' mt-14'>
                <div className=' text-center text-2xl font-semibold text-neutral-600'>
                    <p>
                        Benefits
                    </p>
                </div>

                <div className=' mt-10 grid grid-cols-3 gap-8 text-neutral-600'>
                    <div className=' space-y-3'>
                        <p className=' text-3xl'>
                            Maximum earnings
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className=' space-y-3'>
                        <p className=' text-3xl'>
                            Maximum earnings
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className=' space-y-3'>
                        <p className=' text-3xl'>
                            Maximum earnings
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className=' space-y-3'>
                        <p className=' text-3xl'>
                            Maximum earnings
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className=' space-y-3'>
                        <p className=' text-3xl'>
                            Maximum earnings
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>

                    <div className=' space-y-3'>
                        <p className=' text-3xl'>
                            Maximum earnings
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
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

export default Home