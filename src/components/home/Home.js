import React from 'react'
import Header from './Header'
import FeaturedJob from './FeaturedJob'
import Earn from '../footer/Earn'
import Footer from '../footer/Footer'

const Landing = () => {
  return (
    <div className=' bg-neutral-100'>
        <div>
            <Header />
        </div>

        {/* featured jobs */}
        <div className=' px-5'>
            <div className=' mt-6 bg-white py-5 px-4 rounded-lg'>
                <p className=' text-center text-xl font-light'>
                    Featured jobs
                </p>
                <div className=' mt-5'>
                    <FeaturedJob />
                </div>
            </div>

        </div>
        
        <div className=' mt-10'>
            <Earn />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default Landing