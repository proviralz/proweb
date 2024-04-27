import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import ToggleSwitch from './ToggleSwitch';
import { CiLogout } from 'react-icons/ci';
import { useDispatch } from 'react-redux';
import { logoutUser } from '@/redux/userSlice';
import { useRouter } from 'next/navigation';

const ProfileDropdown = ({user}) => {

    const dispatch = useDispatch()
    const router = useRouter()

    const handleLogout =()=> {
        dispatch(logoutUser())
        router.push('/login')
    }
  return (
    <div className=' rounded-md bg-white shadow-md'>
        <div className=' p-5 flex flex-col items-center gap-3'>
            <div className=' w-20'>
                <Image src={user?.profilePic} alt='profile' width={100} height={100} className=' w-full h-auto' />
            </div>
            <div className=' text-center'>
                <p className=' text-neutral-600 text-sm'>
                    {user?.name}
                </p>
                <p className=' text-xs font-light'>
                    {user?.username}
                </p>
            </div>
            <div>
                <ToggleSwitch />
            </div>
            <div className=' w-full'>
                <div className=' flex flex-col gap-3 text-neutral-500 text-sm'>
                    <Link href={'/wallet'}>
                        Wallet
                    </Link>
                    <Link href={'/'}>
                        Become a seller
                    </Link>
                    <Link href={'/profile'}>
                        Settings
                    </Link>
                </div>
            </div>
        </div>
        <div className=' px-5 py-2 border-t'>
            <div onClick={handleLogout} className=' cursor-pointer flex items-center gap-3 font-light'>
                <p>
                    <CiLogout />
                </p>
                <p>
                    Logout
                </p>
            </div>
        </div>
    </div>
  )
}

export default ProfileDropdown