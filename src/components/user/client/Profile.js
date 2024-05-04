import Footer from '@/components/footer/Footer'
import HeaderTwo from '@/components/header/HeaderTwo'
import Image from 'next/image'
import React, { useState } from 'react'
import { BsClockHistory, BsTelephone } from 'react-icons/bs'
import { CiLocationOn } from 'react-icons/ci'
import { FaRegAddressCard } from 'react-icons/fa6'
import { GiWorld } from 'react-icons/gi'
import { IoMailOutline } from 'react-icons/io5'
import { MdOutlinePayments } from 'react-icons/md'
import SendMessage from './SendMessage'

const ClientProfile = ({user}) => {

    const [showForm, setShowForm] = useState(false)
  return (
    <div className=' bg-neutral-100'>
        <div>
            <HeaderTwo />
        </div>


        <div>
            <SendMessage 
                showForm={showForm} 
                setShowForm={setShowForm}
                clientData={user} />
        </div>


        <div className=' p-10 md:flex md:justify-between gap-5'>
            <div className=' flex-1'>
                <div className=' p-5 bg-white rounded-md flex flex-col gap-1'>


                    <div className=' border rounded-sm p-5 flex gap-5'>
                        <div>
                            <div className=' h-20 w-20 rounded-full overflow-hidden'>
                                <Image src={user?.profilePic} alt={user?.fullName} height={100} width={100} className=' h-full w-full object-cover' />
                            </div>
                        </div>
                        <div>
                            <div className=' space-y-5'>
                                <div>
                                    <p>
                                        {user?.fullName}
                                    </p>
                                </div>
                                <div>
                                    <p className=' text-sm font-light'>
                                        {user?.companyProfile.description}
                                    </p>
                                </div>
                                <div>
                                    <div>
                                        <p onClick={()=> setShowForm(true)} className='purple-btn-long text-xs'>
                                            Send a message
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>


            <div className=' w-full md:w-72  lg:w-[400px]'>
                <div className=' mt-5 md:mt-0 bg-white p-5 rounded-md flex flex-col gap-1'>
                    
                    <div className='py-4'>
                        
                        
                        <div className=' mt-4 flex flex-col gap-2'>
                            <p className=' text-sm'>
                                Client verification
                            </p>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <FaRegAddressCard />
                                </p>
                                <p>
                                    Identity verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <IoMailOutline />
                                </p>
                                <p>
                                    Email verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <BsTelephone />
                                </p>
                                <p>
                                    Phone verified
                                </p>
                            </div>
                            <div className=' flex items-center gap-4 text-xs font-light'>
                                <p>
                                    <MdOutlinePayments />
                                </p>
                                <p>
                                    Payment verified
                                </p>
                            </div>
                        </div>
                        {/* <div className=' mt-3'>
                            <div>
                                <p className=' text-sm'>
                                    Job link
                                </p>
                            </div>
                            <div className='  gap-5 space-y-3 text-xs mt-2'>
                                <p className=' text-[0.6rem] p-2 bg-neutral-100 font-light rounded-md'>
                                    https://provirals.com/jobs/{params.id}
                                </p>
                                <p>
                                    copy link
                                </p>
                            </div>
                        </div> */}
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

export default ClientProfile