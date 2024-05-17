import React, { useState } from 'react'

const ChangePassword = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add your form submission logic here
        console.log('Current Password:', currentPassword);
        console.log('New Password:', newPassword);
        console.log('Confirm New Password:', confirmNewPassword);
    };


  return (
    <div>
        <form className="max-w-md mx-auto p-4 border rounded-lg shadow-lg" onSubmit={handleSubmit}>
            {/* <h2 className="text-2xl font-bold mb-4">Change Password</h2> */}
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="currentPassword">
                    Current Password
                </label>
                <input
                    type="password"
                    id="currentPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="newPassword">
                    New Password
                </label>
                <input
                    type="password"
                    id="newPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmNewPassword">
                    Confirm New Password
                </label>
                <input
                    type="password"
                    id="confirmNewPassword"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                    required
                />
            </div>
            <div className="mb-4">
                <button
                    type="submit"
                    className=" purple-btn"
                >
                    Change Password
                </button>
            </div>
        </form>
    </div>
  )
}

export default ChangePassword