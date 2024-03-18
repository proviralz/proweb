import React, { useState } from 'react'
import Header from './Header'
import Image from 'next/image'
import SetupProfile from './SetupProfile'

const Select = ({showSelect, setShowSelect}) => {

    const [showSetup, setShowSetup] = useState(false)
  return (
    <div className={`${showSelect? 'flex': 'hidden'} h-screen overflow-y-scroll bg-gray-100 w-full flex justify-center`}>
        <div className=' fixed top-0  w-full left-0'>
            <SetupProfile showSetup={showSetup} setShowSetup={setShowSetup} />
        </div>
        <div className=' p-5'>
            <Header />

            <div className=' mt-10'>
                <p className=' text-center text-2xl capitalize text-[#31013f]'>
                    ready to make your mark? <br />
                    choose your role and let&apos;s get started 
                </p>
            </div>

            <div  className=' mt-5 '>
                <div onClick={()=> setShowSetup(true)}  className=' border border-neutral-400 flex items-center justify-center h-64 rounded-md bg-[#31013f]/15'>
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
                <div className=' border border-neutral-400 flex items-center justify-center h-64 mt-5 rounded-md'>
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
        </div>
    </div>
  )
}

export default Select