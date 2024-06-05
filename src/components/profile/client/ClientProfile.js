import Footer from '@/components/footer/Footer'
import React from 'react'
import CompleteProfile from '../CompleteProfile'
import { MdOutlineEdit } from 'react-icons/md'
import { TbCameraPlus } from 'react-icons/tb'
import ClientHeader from '@/components/client/ClientHeader'
import Image from 'next/image'
import { useSelector } from 'react-redux'

const ClientProfile = () => {

  const user = useSelector(state => state.user.info)
  return (
    <div className=' bg-neutral-100'>
        <div>
            <ClientHeader />
        </div>


        <div  className=' p-5 md:p-10 md:flex md:justify-between gap-5'>


            <div className=' flex-1'>
                <div className=' p-5 bg-white rounded-md flex md:flex-row flex-col gap-5'>
                    <div className=' relative bg-slate-400 md:w-2/5 rounded-sm overflow-hidden'>
                        <div className=' absolute bg-white p-1 rounded-full bottom-3 left-3 text-neutral-600 text-xl'>
                            <TbCameraPlus />
                        </div>
                        <div className=' h-72 md:h-48'>
                          <Image src={user?.profilePic} alt='user' width={100} height={100} className=' h-full object-cover w-full' />
                        </div>
                    </div>
                    <div className=' md:w-3/5 text-neutral-500'>
                        <div>
                            <p>
                                {user?.fullName}
                            </p>
                            <p className=' text-xs mt-1'>
                                @{user?.username}
                            </p>
                        </div>
                        
                        <div className=' mt-3'>
                            <p className=' text-[0.7rem]'>
                                {user?.companyProfile?.description}
                            </p>
                        </div>
                        <div className=' mt-2 space-y-1'>
                          <div>
                            <p>
                              {user?.group}
                            </p>
                          </div>
                          <div>
                            <p className=' text-neutral-500 font-light' >
                              Location: <span className=' font-normal'>{user?.location.state}, {user?.location.country}</span>
                            </p>
                          </div>
                        </div>
                        
                    </div>
                </div>
                <div className='p-5 bg-white rounded-md mt-5'>
                    
                    
                    
                </div>
            </div>


            <div className=' w-full md:w-72  lg:w-[400px]'>
                

                <div className=' bg-white p-5 rounded-md mt-5 text-neutral-500'>
                    <div className=' flex justify-center '>
                        <p>
                            Edit profile
                        </p>
                    </div>
                    <div className=' mt-4 border-b pb-4 flex justify-between'>
                        <div>
                            <p className=' text-sm'>
                                Description
                            </p>
                            <p className=' text-[0.6rem] w-3/4 mt-1'>
                                {user?.bio}
                            </p>
                        </div>
                        <div>
                            <div className=' border border-[#31013f] p-1 rounded-full text-[#31013f]'>
                                <MdOutlineEdit />
                            </div>
                        </div>
                    </div>

                    
                    
                </div>

                <div className=' mt-5'>
                    <CompleteProfile />
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