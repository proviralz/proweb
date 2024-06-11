import { userRequest } from '@/requestMethods';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'
import { useSelector } from 'react-redux';

const Account = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [error, setError] = useState('');
    const user = useSelector(state => state.user.info)
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Check if newPassword matches confirmNewPassword
        if (newPassword !== confirmNewPassword) {
          setError('New passwords do not match');
          return;
        }
    
        try {
          const response = await userRequest.post('users/change-password', {
            currentPassword,
            newPassword,
            userId: user?._id,
          });
          alert(response.data.message);
          router.push('/')
        } catch (err) {
          alert(err.response.data.error);
        }
      };
  return (
    <div>
        <div>
            <form className="text-neutral-600" onSubmit={handleSubmit}>
                <h2 className="text-lg mb-4">Change Password</h2>
                {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
                <div className="flex items-center mb-4">
                    <label className="w-1/3 block text-gray-700 text-sm  " htmlFor="currentPassword">
                    Current Password
                    </label>
                    <input
                    type="password"
                    id="currentPassword"
                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 block text-gray-700 text-sm " htmlFor="newPassword">
                    New Password
                    </label>
                    <input
                    type="password"
                    id="newPassword"
                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    />
                </div>
                <div className="flex items-center mb-4">
                    <label className="w-1/3 block text-gray-700 text-sm " htmlFor="confirmNewPassword">
                    Confirm New Password
                    </label>
                    <input
                    type="password"
                    id="confirmNewPassword"
                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ml-auto"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
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