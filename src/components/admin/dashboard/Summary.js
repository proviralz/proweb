import React, { useEffect, useState } from 'react'
import SummaryCards from './summary/SummaryCards'
import UserTable from './summary/UserTable'
import { publicRequest } from '@/requestMethods'

const Summary = () => { 

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
    <div className=' w-full'>
      <div className=' space-y-5'>
        <div className=''>
            {users?.length >0 && <SummaryCards users={users} />}
        </div>
        <div>
            {users?.length >0 && <UserTable users={users} />}
        </div>
      </div>
    </div>
  )
}

export default Summary
