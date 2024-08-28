import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BsTelephone } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa6'
import { IoMailOutline } from 'react-icons/io5'
import { MdOutlinePayments } from 'react-icons/md'

const Client = () => {
  return (
    <div>
      <div className=' p-10 space-y-7 bg-white rounded-md flex flex-col gap-1'>

        <div className=' rounded-sm flex gap-5'>
            <div>
                <div className=' h-40 w-40 rounded-sm overflow-hidden'>
                    <Image src={'/assets/profile/ibm.svg'} alt={""} height={100} width={100} className=' h-full w-full object-cover' />
                </div>
            </div>
            <div>
                <div className=' space-y-5'>
                    <div>
                        <p>
                            {"Business company"}
                        </p>
                    </div>
                    <div>
                      <p>
                        Client
                      </p>
                    </div>
                    <div>
                        <p className=' text-sm font-light'>
                            {"a long Lorem Ipsum text describing the awesomenness of the industry."}
                        </p>
                    </div>
                    <div>
                        {/* <div>
                          <Link href={'/user/jobs/${id}/'}>
                            <p className='purple-btn-long text-xs'>
                                View jobs
                            </p>
                          </Link>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>

        <div>
          <div className=' flex items-center gap-4 text-sm font-light'>
              <p>
                  Location
              </p>
              <p>
                  Lagos, Nigeria
              </p>
          </div>
          <div className=' flex items-center gap-4 text-sm font-light'>
              <p>
                  Industry
              </p>
              <p>
                  Automobile
              </p>
          </div>
        </div>

        <div>
          <div className=' mt-4 flex flex-col gap-2'>
              <p className=''>
                  Verifications
              </p>
              <div className=' flex items-center gap-4 text-sm font-light'>
                  <p>
                      <FaRegAddressCard />
                  </p>
                  <p>
                      Identity verified
                  </p>
              </div>
              <div className=' flex items-center gap-4 text-sm font-light'>
                  <p>
                      <IoMailOutline />
                  </p>
                  <p>
                      Email verified
                  </p>
              </div>
              <div className=' flex items-center gap-4 text-sm font-light'>
                  <p>
                      <BsTelephone />
                  </p>
                  <p>
                      Phone verified
                  </p>
              </div>
              <div className=' flex items-center gap-4 text-sm font-light'>
                  <p>
                      <MdOutlinePayments />
                  </p>
                  <p>
                      Payment verified
                  </p>
              </div>
          </div>
        </div>

        <div>
          <div>
            <Link href={'/admin/user/jobs/1234'}>
              <p className='purple-btn-long text-xs'>
                  View jobs
              </p>
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Client
