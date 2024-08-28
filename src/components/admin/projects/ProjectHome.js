import React, { useEffect, useState } from 'react'
import Layout from '../dashboard/Layout'
import FeaturedJobs from './FeaturedJobs'
import { FadeLoader } from 'react-spinners'
import { publicRequest } from '@/requestMethods'

const ProjectHome = () => {

    const [jobs, setJobs] = useState(null)
    const [loading, setLoading] = useState(true)


    useEffect(()=> {
        const getJobs = async ()=> {
            try {
                const res = await publicRequest.get('jobs')


                setJobs(res.data)
                setLoading(false)
            } catch (error) {
                console.log(error)
            }
        }

        getJobs()
    }, [])


    if(loading) {
        return (
            <Layout>
                <div className=' h-full w-full flex items-center justify-center bg-white'>
                    <FadeLoader />
                </div>
            </Layout>
        )
    }
  return (
    <div>
      <Layout>
        <div className=' p-5 bg-white rounded-md '>
            <FeaturedJobs jobs={jobs} />
        </div>
      </Layout>
    </div>
  )
}

export default ProjectHome
