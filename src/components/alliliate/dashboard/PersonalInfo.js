import React from 'react'
import { useSelector } from 'react-redux';

const PersonalInfo = () => {

    const user = useSelector(state=> state.affiliateUser.info)

    // const user = {
    //     firstName: 'John',
    //     lastName: 'Doe',
    //     email: 'john.doe@example.com',
    //     country: 'USA',
    //     state: 'California',
    //     city: 'Los Angeles',
    //     address: '123 Main St',
    //     phone: '555-1234'
    // };


  return (
    <div>
        <div className="overflow-x-auto p-4">
            <table className="table-auto rounded-md  border-collapse border border-gray-300">
                {/* <thead>
                    <tr>
                        <th className="px-4 py-2 bg-gray-100 border border-gray-300">Field</th>
                        <th className="px-4 py-2 bg-gray-100 border border-gray-300">Information</th>
                    </tr>
                </thead> */}
                <tbody className=' text-xs'>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Fullname</td>
                        <td className="px-4 py-2 border border-gray-300">{user.fullName}</td>
                    </tr>
                    {/* <tr>
                        <td className="px-4 py-2 border border-gray-300">Last Name</td>
                        <td className="px-4 py-2 border border-gray-300">{user.lastName}</td>
                    </tr> */}
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Email</td>
                        <td className="px-4 py-2 border border-gray-300">{user.email}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Country</td>
                        <td className="px-4 py-2 border border-gray-300">{user.country}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">State</td>
                        <td className="px-4 py-2 border border-gray-300">{user.state}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">City</td>
                        <td className="px-4 py-2 border border-gray-300">{user.city}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Address</td>
                        <td className="px-4 py-2 border border-gray-300">{user.address}</td>
                    </tr>
                    <tr>
                        <td className="px-4 py-2 border border-gray-300">Phone</td>
                        <td className="px-4 py-2 border border-gray-300">{user.phone}</td>
                    </tr>
                </tbody>
            </table>
            <div className="mt-4 inline-block">
                <p className="trans-purple-btn">Edit</p>
            </div>
        </div>
    </div>
  )
}

export default PersonalInfo