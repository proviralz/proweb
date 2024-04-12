
import React, { useState } from 'react'
import Header from '../Header'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { publicRequest } from '@/requestMethods'

const StepOne = ({nextPage, userId}) => {

    const [isselected, setIsSelected] =  useState(null)
    const router = useRouter()

    const handleIndividual = async () => {
        try {
            const res = await publicRequest.put(`users/${userId}`, {
                clientType: "individual"
            })

            if (res.status === 200) {
                router.push('/login')
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleCompany =()=> {
        nextPage()
    }

    const handleSubmit =()=> {
        if(isselected === "individual") {
            handleIndividual()
        } else {
            handleCompany()
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
                            Sign up as
                        </p>
                    </div>

                    <div  className=' mt-5 flex flex-col md:flex-row md:items-center md:mt-20 md:gap-3 '>
                        <div 
                            onClick={()=> setIsSelected('company')}  
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'company' && 'bg-[#31013f]/15'} `}>
                            <div className=' md:w-64'>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/bro.svg'} alt='' width={100} height={100} className=' w-48 ' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                        A Company
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div 
                            onClick={()=> setIsSelected("individual")} 
                            className={` border border-neutral-400 flex flex-1 items-center justify-center h-64 rounded-md ${isselected === 'individual' && 'bg-[#31013f]/15'} mt-8 md:mt-0`}>
                            <div className='md:w-64'>
                                <div className=' flex justify-center'>
                                    <Image src={'/assets/onboard/pana.svg'} alt='' width={100} height={100} className=' w-48' />
                                </div>
                                <div className=' p-5 '>
                                    <p className=' text-xl text-[#31013f] text-center'>
                                        An Individual
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
                            <p onClick={handleSubmit} className='purple-btn-long'>
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

export default StepOne