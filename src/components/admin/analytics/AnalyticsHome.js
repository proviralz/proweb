import React, { useEffect, useState } from 'react'
import Layout from '../dashboard/Layout'
import FreelancersChart from './FreelancersChart'
import { publicRequest } from '@/requestMethods'
import { FadeLoader } from 'react-spinners'
import axios from 'axios'
import ProjectChart from './ProjectChart'

const AnalyticsHome = () => {

    const [users, setUsers] = useState(null)
    const [projects, setProjects] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=> {
        const getUsers = async()=> {
            try {
                const res = await publicRequest.get('users')
                const proRes = await axios.get('http://localhost:5000/api/project/find/all')

                setUsers(res.data)
                setProjects(proRes.data)
                setLoading(false)
            
            } catch (error) {
               console.log(error) 
               setLoading(false)
            }
        }

        getUsers()
    }, [])

    // console.log(projects)


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
        <div className=' space-y-10'>
            <div>
                <FreelancersChart data={users} />
            </div>
            
            <div>
                <ProjectChart data={projects} />
            </div>
        </div>
      </Layout>
    </div>
  )
}

export default AnalyticsHome
