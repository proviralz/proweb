import Image from 'next/image'
import React, { useState } from 'react'
import Header from '../Header'
import { useRouter } from 'next/navigation'
import { publicRequest } from '@/requestMethods'

const SelectUse = ({nextStep, id}) => {

    const [isselected, setIsSelected] =  useState(null)
    const router = useRouter()

    const handleSubmit = async ()=> {
        if(isselected)  {
            try {
                const res = await publicRequest.put(`users/${id}`, {
                    purpose: isselected
                })

                // console.log(res)

                if(res.status === 200)  {
                    nextStep()
                }
            } catch (error) {
                console.log(error)
            }
        } else {
            console.log('select what you intend to use proviralz for')
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
                        <p className=' text-center text-xl md:text-2xl capitalize text-[#31013f]'>
                            What do you intend to use Proviralz for
                        </p>
                    </div>

                    <div  className=' mt-5 flex flex-col md:flex-row md:items-center md:mt-20 md:gap-3 '>
                        <div 
                            onClick={()=> setIsSelected('main source of income')}  
                            className={` border border-neutral-400 overflow-hidden flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'main source of income' && 'bg-[#31013f]/15'} `}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/main-source.svg'} alt='' width={100} height={100} className=' w-40' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                      Main source of income
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={()=> setIsSelected("side hustle")} 
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'side hustle' && 'bg-[#31013f]/15'} mt-8 md:mt-0`}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/side-hustle.svg'} alt='' width={100} height={100} className=' w-40' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                      Side hustle
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={()=> setIsSelected("to gain experience")} 
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'to gain experience' && 'bg-[#31013f]/15'} mt-8 md:mt-0`}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/gain-experience.svg'} alt='' width={100} height={100} className=' w-40' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                      To gain experience
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={()=> setIsSelected("portfolio biilding")} 
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'portfolio biilding' && 'bg-[#31013f]/15'} mt-8 md:mt-0`}>
                            <div>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/build-portfolio.svg'} alt='' width={100} height={100} className=' w-40' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                      Portfolio biilding
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className=' h-10'>

                        </div>
                    </div>

                    <div className=' mt-10 flex items-center gap-5'>
                        <div>
                            <p onClick={nextStep} className='trans-purple-btn'>
                                Skip for now
                            </p>
                        </div>
                        <div>
                            <p onClick={handleSubmit} className={`${!isselected? "grey-btn-long" : "purple-btn-long"} `}>
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

export default SelectUse