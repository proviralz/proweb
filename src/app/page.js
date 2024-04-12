'use client'
import ClientHome from "@/components/client/Home";
import Landing from "@/components/skilled/Home";
import UnskilledHome from "@/components/unskilled/Home";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {

  const user = 's'
  const userInfo = useSelector(state => state.user.info)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(true)

  console.log(userInfo)

  useEffect(()=> {
    if(!userInfo) {
      router.push('/login')
    }
  })

  // if(isLoading) {
  //   return (
  //     <div className=" h-screen w-full flex items-center justify-center">
  //       <div className="animate-spin inline-block size-12 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500" role="status" aria-label="loading">
  //         <span className="sr-only">Loading...</span>
  //       </div>
  //     </div>
  //   )
  // }

  return ( userInfo &&
    <main className="">
      { userInfo?.group === 'skilled' && <Landing />}
      { userInfo?.group === 'client' && <ClientHome />}
      { userInfo?.group === 'unskilled' && <UnskilledHome />}
    </main>
  );
}
