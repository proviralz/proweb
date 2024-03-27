import React from 'react'
import HeaderTwo from '../skilled/HeaderTwo'
import Footer from '../footer/Footer'
import { FiSearch } from 'react-icons/fi'
import { proposals } from '../data/jobs'
import Image from 'next/image'

const Submitted = () => {
  return (
    <div>
        <div>
            <HeaderTwo />
        </div>
        <div className=' p-5 md:p-10 bg-neutral-100'>
            <div className=' p-5 bg-white rounded-lg text-neutral-600 flex flex-col gap-5'>
                <div>
                    <p >
                        Your proposals
                    </p>
                </div>
                <div>
                    <div className=' flex items-center border px-2 py-1  rounded-xl gap-3'>
                        <FiSearch />
                        <input type="text" name="" id="" className=' w-28 md:w-full outline-none  text-neutral-600 ' placeholder='Search services' />
                    </div>
                </div>
                <div>
                    {proposals.map((p, i)=> (
                        <div key={i} className=' p-5 border-b flex justify-between items-center '>
                            <div className=' flex items-center gap-5'>
                                <div>
                                    <Image src={p.img} alt='' width={100} height={100} className='h-10' />
                                </div>
                                <div>
                                    <div className=' flex items-center justify-between'>
                                        <p className=' text-sm text-neutral-800'>
                                            {p.name}
                                        </p>
                                        <p className=' text-xs'>
                                            {p.time}
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-xs'>
                                            {p.username}
                                        </p>
                                    </div>
                                    <div>
                                        <p className=' text-xs'>
                                            {p.message}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <p className=' purple-btn-long text-[0.7rem]'>
                                    View proposal
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Submitted