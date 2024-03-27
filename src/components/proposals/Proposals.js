import React from 'react'
import Header from '../profile/Header'
import Footer from '../footer/Footer'
import HeaderTwo from '../skilled/HeaderTwo'
import Link from 'next/link'

const Proposals = () => {
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
                <div className=' border rounded-md p-4 text-sm'>
                    <Link href={'/proposals/submitted'}>
                        Submitted proposals (2)
                    </Link>
                </div>
                <div className=' border rounded-md p-4 text-sm'>
                    <p>
                        Accepted proposals (2)
                    </p>
                </div>
                <div className=' border rounded-md p-4 text-sm'>
                    <p>
                        Archive (2)
                    </p>
                </div>
            </div>
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Proposals