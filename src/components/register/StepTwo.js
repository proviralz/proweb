import Image from 'next/image'
import React, { useState } from 'react'
import Header from './Header'

const StepTwo = ({nextPage, prevpage}) => {

    const [isselected, setIsSelected] =  useState(null)
  return (
    <div className={``}>
        <div className=''>
            <div className=' p-5 md:p-10 '>
                <Header />
            </div>

            <div className=' p-5 md:p-10 flex justify-center '>
                <div className=' md:border md:p-5 md:rounded-lg border-neutral-500 flex flex-col items-center'>
                    <div className=' mt-10'>
                        <p className=' text-center text-2xl md:text-4xl capitalize text-[#31013f]'>
                            ready to make your mark? <br />
                            choose your role and let&apos;s get started 
                        </p>
                    </div>

                    <div  className=' mt-5 flex flex-col md:flex-row md:items-center md:mt-20 md:gap-3 '>
                        <div 
                            onClick={()=> setIsSelected('provider')}  
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'provider' && 'bg-[#31013f]/15'} `}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/woman.svg'} alt='' width={100} height={100} className=' w-48' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                        I am a service provider ready to work
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={()=> setIsSelected("client")} 
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'client' && 'bg-[#31013f]/15'} mt-8 md:mt-0`}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/contract.svg'} alt='' width={100} height={100} className=' w-48' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                        I am looking for service providers
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' h-10'>

                        </div>
                    </div>

                    <div className=' mt-10 flex items-center gap-5'>
                        <div>
                            <p onClick={prevpage} className='purple-btn-long'>
                                Back
                            </p>
                        </div>
                        <div>
                            <p onClick={nextPage} className='purple-btn-long'>
                                Continue
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}

export default StepTwo