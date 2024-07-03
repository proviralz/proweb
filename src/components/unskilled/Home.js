import React, { useEffect, useState } from 'react'
import FeaturedJob from './FeaturedJob'
import Earn from '../footer/Earn'
import Footer from '../footer/Footer'
// import { FiSearch } from 'react-icons/fi'
import Sidebar from './Sidebar'
import HeaderTwo from '../header/HeaderTwo'
import { publicRequest } from '@/requestMethods'
import { useSelector } from 'react-redux'
import VerifyEmail from '../skilled/VerifyEmail'
import SearchJobs from './SearchJobs'
// import { useSession } from 'next-auth/react'
// import HeaderTwo from './HeaderTwo'

const UnskilledHome = () => {


    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)
    const user = useSelector(state => state.user.info)
    const [showForm, setShowForm] = useState(!user?.emailVerified)
    const [searchTerm, setSearchTerm] = useState('');


    useEffect(()=> {
        const getJobs = async ()=> {
            try {
                const res = await publicRequest.get('jobs')

                setJobs(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
                setLoading(false)
            }
        }

        getJobs()
    }, [])

    console.log(jobs)

    const handleSearch = (term) => {
        setSearchTerm(term);
    };

    const filteredJobs = jobs?.filter((job) =>
        searchTerm
            ? job.title.toLowerCase().includes(searchTerm.toLowerCase()) || job.description.toLowerCase().includes(searchTerm.toLowerCase())
            : user?.interests?.some((interest) => interest === job?.category)
    );
    


    if(loading) {
        return (
            <div className="section-center">
                <div className="section-path">
                    <div className="globe">
                    <div className="wrapper">
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    </div>
                </div>
            </div>
        )
    }

  return (
    <div className=' bg-neutral-100'>
        <div>
            <HeaderTwo /> 
        </div>

        <div>
            <VerifyEmail 
                setShowForm={setShowForm} 
                showForm={showForm}
                user={user} />
        </div>

        <div>
            <SearchJobs onSearch={handleSearch} />
        </div>

        {/* featured jobs */}
        <div className=' px-5 md: flex gap-5'>
            <div className=' flex-1 mt-6 bg-white py-5 px-4 rounded-lg'>
                <p className=' text-center text-xl font-light'>
                    Featured jobs
                </p>
                <div className=' mt-5'>
                    <FeaturedJob user={user} jobs={filteredJobs} />
                </div>
            </div>

            <div>
                <Sidebar />
                <div className=' hidden md:flex mt-10'>
                    <Earn />
                </div>
            </div>


        </div>
        
        <div className=' mt-10 md:hidden'>
            <Earn />
        </div>

        <div>
            <Footer />
        </div>
    </div>
  )
}

export default UnskilledHome