'use client'
import Details from '@/components/jobs/Details'
import ClientJobDetails from '@/components/jobs/client/ClientJobDetails'
import UnskilledDetails from '@/components/jobs/unskilled/Details'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const router = useRouter()

  const user = useSelector(state => state.user?.info)
  const userGroup  = user?.group
  if(!user) {
    router.push('/home')
  }
  return (
    <div>
      {userGroup === 'skilled' && (
        <Details />
      )}
      {userGroup === 'unskilled' && (
        <UnskilledDetails />
      )}
      {userGroup === 'client' && (
        <ClientJobDetails/>
      )}
      
    </div>
  )
}

export default Page