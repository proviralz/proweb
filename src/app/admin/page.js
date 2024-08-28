'use client'
import Home from '@/components/admin/dashboard/Home'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';

const Page = () => {

  const router = useRouter();
  const admin = useSelector(state => state.admin.info); // Assuming 'admin' state is stored here
  console.log(admin)

  useEffect(() => {
    if (!admin) {
      router.push('/admin/login'); // Redirect to admin login page
    }
  }, [admin, router]);

  if (!admin) {
    return null; // Render nothing or a loading spinner while redirecting
  }
  return (
    <div>
      <Home />
    </div>
  )
}

export default Page
