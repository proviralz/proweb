import Image from 'next/image'
import React, { useState } from 'react'
import Header from './Header'
import { publicRequest } from '@/requestMethods'
import { useRouter } from 'next/navigation'

const StepFive = ({userId, nextPage}) => {

    const [isselected, setIsSelected] =  useState(null)
    const router = useRouter()

    const handleUnSkilled = async()=> {
        try {
            const res = await publicRequest.put(`users/${userId}`, {
                group: "unskilled"
            })

            if (res.status === 200) {
                router.push(`/start/unskilled/${userId}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleSkilled = async()=> {
        try {
            const res = await publicRequest.put(`users/${userId}`, {
                group: "skilled"
            })

            if (res.status === 200) {
                router.push(`/start/skilled/${userId}`)
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleClick = ()=> {
        if(isselected === "unskilled") {
            handleUnSkilled()
        } else if(isselected === 'skilled') {
            handleSkilled()
        }
    }

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
                            onClick={()=> setIsSelected('unskilled')}  
                            className={` border border-neutral-400 overflow-hidden flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'unskilled' && 'bg-[#31013f]/15'} `}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/amico-top.svg'} alt='' width={100} height={100} className=' w-48' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                      I am a skilled artisans (handyman)
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={()=> setIsSelected("skilled")} 
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'skilled' && 'bg-[#31013f]/15'} mt-8 md:mt-0`}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/amico-bottom.svg'} alt='' width={100} height={100} className=' w-48' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                      I am a skilled professional service provider
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' h-10'>

                        </div>
                    </div>

                    <div className=' mt-10 flex items-center gap-5'>
                        {/* <div>
                            <p onClick={prevpage} className='purple-btn-long'>
                                Back
                            </p>
                        </div> */}
                        <div>
                            <p onClick={handleClick} className={`${!isselected? "grey-btn-long" : "purple-btn-long"} `}>
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

export default StepFive