'use client'
import UserProfile from '@/components/profile/UserProfile'
import ClientProfile from '@/components/profile/client/ClientProfile'
import UnskilledProfile from '@/components/profile/unskilled/UnskilledProfile'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'

const Page = () => {

  const userGroup = useSelector(state => state.user?.info?.group)
  const router = useRouter()

  useEffect(()=> {
    if(!userGroup) {
      router.push('/login')
    }
  })

  console.log(userGroup)
  return (
    <div>
      {userGroup === 'skilled' && (
        <UserProfile />
      )}
      {userGroup === 'unskilled' && (
        <UnskilledProfile />
      )}
      {userGroup === 'client' && (
        <ClientProfile />
      )}
    </div>
  )
}

export default Page