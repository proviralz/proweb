import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { FaSort } from 'react-icons/fa6'
import { FiMoreHorizontal } from 'react-icons/fi'
import { data } from '../summary/data'

const FreelancerTable = ({users}) => {

    const [sortConfig, setSortConfig] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 10;

    const freelancers = users?.filter(user => user.group !== 'client')

    const sortedData = React.useMemo(() => {
        let sortableItems = [...freelancers];
        if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
            }
            return 0;
        });
        }
        return sortableItems;
    }, [sortConfig, freelancers]);

    const handleSort = (key) => {
        let direction = 'ascending';
        if (
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === 'ascending'
        ) {
        direction = 'descending';
        }
        setSortConfig({ key, direction });
    };

    const paginatedData = sortedData.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const totalPages = Math.ceil(sortedData.length / itemsPerPage);

    const formatDate =(dateString) => {
      const date = new Date(dateString);
      const options = { day: '2-digit', month: 'short', year: 'numeric' };

      const formattedDate = date.toLocaleDateString('en-US', options);

      return formattedDate;
    }
  return (
    <div className="p-5 bg-white shadow-md overflow-auto rounded-md">
      <table className="min-w-full bg-white border-gray-200">
        <thead>
          <tr>
            {['Name', 'Interest', 'State', 'Email', 'Date of Creation'].map((header) => (
              <th
                key={header}
                className="py-2 px-4 border-b border-gray-200 text-left cursor-pointer"
                onClick={() => handleSort(header.toLowerCase().replace(/ /g, ''))}
              >
                <div className="flex items-center">
                  {header}
                  <FaSort className="ml-2" />
                </div>
              </th>
            ))}
            <th className="py-2 px-4 border-b border-gray-200"></th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((user, index) => (
            <tr key={index}>
              <td className="py-2 px-4 border-gray-200 ">
                <Link href={'/admin/user/1234'}>
                  <div className='flex items-center'>
                    <Image src={user?.profilePic} width={100} height={100} alt="Profile" className="w-10 h-10 rounded-full mr-2" />
                    {user?.fullName}
                  </div>
                </Link>
              </td>
              <td className="py-2 px-4 border-gray-200">
                {user?.interests?.map((int, j)=> (
                  <p key={j}>
                    {int || ""}
                  </p>
                ))}
              </td>
              {/* <td className="py-2 px-4 border-gray-200">{user.interest}</td> */}
              <td className="py-2 px-4 border-gray-200">{user?.location.state}</td>
              <td className="py-2 px-4 border-gray-200">{user.email}</td>
              <td className="py-2 px-4 border-gray-200">{formatDate(user.createdAt)}</td>
              <td className="py-2 px-4 border-gray-200 text-right">
                <FiMoreHorizontal className="cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between mt-4">
        <button
          className="py-2 px-4 bg-gray-200 rounded"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <div>
          Page {currentPage} of {totalPages}
        </div>
        <button
          className="py-2 px-4 bg-gray-200 rounded"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  )
}

export default FreelancerTable
