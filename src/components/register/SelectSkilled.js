import React, { useState } from 'react'
import Header from './Header'
import Image from 'next/image'
import SelectUse from './SelectUse'

const SelectSkilled = ({showSelectSkilled, setShowSelectSkilled}) => {

    const [showSelectUse, setShowSelectUse] = useState(false)
  return (
    <div className={`${showSelectSkilled? 'flex': 'hidden'} h-screen overflow-y-scroll bg-white w-full flex justify-center`}>
        <div className=' fixed top-0  w-full left-0'>
            <SelectUse showSelectUse={showSelectUse} setShowSelectUse={setShowSelectUse} />
        </div>
        <div className=' p-5 '>
            <Header />

            <div className=' mt-10'>
                <p className=' text-center text-2xl capitalize text-[#31013f]'>
                    ready to make your mark? <br />
                    choose your role and let&apos;s get started 
                </p>
            </div>

            <div  className=' mt-5 '>
                <div onClick={()=> setShowSelectUse(true)}  className=' border border-neutral-400 flex items-center justify-center h-72 rounded-md bg-[#31013f]/15'>
                    <div>
                        <div className=' flex justify-center'>
                            <Image src={'/assets/onboard/amico-top.svg'} alt='' width={100} height={100} className=' w-40' />
                        </div>
                        <div className=' p-5 '>
                            <p className=' text-lg text-[#31013f] text-center'>
                                I am unskilled service provider (artisan)
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' border border-neutral-400 flex items-center justify-center h-72 mt-5 rounded-md'>
                    <div>
                        <div className=' flex justify-center'>
                            <Image src={'/assets/onboard/amico-bottom.svg'} alt='' width={100} height={100} className=' w-40' />
                        </div>
                        <div className=' p-5 '>
                            <p className=' text-xl text-[#31013f] text-center'>
                                I am a skilled service providers
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

export default SelectSkilled