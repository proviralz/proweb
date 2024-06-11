import { updateError, updateStart, updateSuccess } from '@/redux/userSlice';
import { userRequest } from '@/requestMethods';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Account = () => {

    const user = useSelector(state => state.user.info)
    const [fullName, setFullName] = useState(user?.fullName);
    const [email, setEmail] = useState(user?.email);
    const [username, setUsername] = useState(user?.username);
    const [error, setError] = useState('');
    const router = useRouter()
    const dispatch = useDispatch()

    console.log(user)

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const response = await userRequest.put(`users/${user?._id}`, {
            fullName,
            email,
            username,
          });
          console.log(response);
          dispatch(updateSuccess({ ...user, fullName, email, username }))
          router.push('/')
        } catch (err) {
          console.log(err);
          
        }
      };
  return (
    <div>
        <div>
            <form className="text-neutral-600" onSubmit={handleSubmit}>
                <div className=' flex justify-end pb-2 border-b'>
                    <h2 className="text-sm mb-4">To update your public profile, go to <Link href={'/profile'} className=' text-[#31013f]' >My Profile</Link></h2>
                </div>
                {error && <div className="text-red-500 text-sm mt-2 mb-4">{error}</div>}
                <div className="flex items-center mb-4 mt-3">
                    <label className="w-1/3 block text-gray-700 text-sm  " htmlFor="name">
                    Full Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                 
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 block text-gray-700 text-sm " htmlFor="email">
                    Email Address
                    </label>
                    <input
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 block text-gray-700 text-sm " htmlFor="username">
                    Username
                    </label>
                    <input
                    type="text"
                    id="username"
                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                   
                    />
                </div>
                <div className="">
                    <button type="submit" className="purple-btn">
                        Change Password
                    </button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Account