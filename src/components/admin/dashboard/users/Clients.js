import React, { useEffect, useState } from 'react'
import ClientTable from './ClientTable'
import Search from '../common/Search'
import Layout from '../Layout'
import { publicRequest } from '@/requestMethods'

const Clients = () => {

  const [users, setUsers] = useState({})

  useEffect(()=> {
    const getUsers = async ()=> {
      try {
        const res = await publicRequest.get('users')

        setUsers(res.data)
      } catch (error) {
        
      }
    }
    getUsers()
  }, [])

  return (
    <div>
      <Layout>
        <div className=' space-y-5'>
          <div>
            <Search />
          </div>
          <div>
            {users?.length > 0 && <ClientTable users={users} />}
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default Clients
