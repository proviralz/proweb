import Image from 'next/image'
import React from 'react'
import Header from './Header'

const SelectUse = ({showSelectUse, setShowSelectUse}) => {
  return (
    <div className={`${showSelectUse? 'flex': 'hidden'} h-screen overflow-y-scroll bg-white w-full flex justify-center`}>
        <div className=' p-5'>
            <Header />

            <div className=' mt-10'>
                <p className=' text-center text-lg text-neutral-600'>
                    What do you intend to use Proviralz for? 
                </p>
            </div>

            <div  className=' mt-5 '>
                <div  className=' border border-neutral-400 flex items-center justify-center h-72 rounded-md bg-[#31013f]/15'>
                    <div>
                        <div className=' flex justify-center'>
                            <Image src={'/assets/onboard/main-source.svg'} alt='' width={100} height={100} className=' w-40' />
                        </div>
                        <div className=' p-5 '>
                            <p className=' text-lg text-[#31013f] text-center'>
                                Main source of income
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' border border-neutral-400 flex items-center justify-center h-72 mt-5 rounded-md'>
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
                <div className=' border border-neutral-400 flex items-center justify-center h-72 mt-5 rounded-md'>
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
                <div className=' border border-neutral-400 flex items-center justify-center h-72 mt-5 rounded-md'>
                    <div>
                        <div className=' flex justify-center'>
                            <Image src={'/assets/onboard/build-portfolio.svg'} alt='' width={100} height={100} className=' w-40' />
                        </div>
                        <div className=' p-5 '>
                            <p className=' text-xl text-[#31013f] text-center'>
                                Portfolio building
                            </p>
                        </div>
                    </div>
                </div>
                <div className=' flex justify-between mt-5 items-center'>
                    <div>
                        <p onClick={()=> setShowSelectUse(false)} className=' border border-[#31013f] px-6 py-3 rounded-md'>
                            Back
                        </p>
                    </div>
                    <div>
                        <p>
                            Skip
                        </p>
                    </div>
                    <div>
                        <p className='px-6 py-3 rounded-md bg-[#31013f] text-white'>
                            Next
                        </p>
                    </div>
                </div>
                <div className=' h-10'>

                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectUse