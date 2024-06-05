'use client'
import React, { useState } from 'react'
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const History = () => {

    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    const handleDateChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    }

    const tableData = [
      { date: '2024-05-30', orderId: 'ORD12345', service: 'Service A', status: 'Completed', amount: '$100.00' },
      { date: '2024-05-15', orderId: 'ORD54321', service: 'Service B', status: 'Pending', amount: '$75.00' }
    ];


    const filteredData = tableData.filter(item => {
      if (!startDate || !endDate) return true; // If no date range is selected, show all items
      const itemDate = new Date(item.date);
      return itemDate >= startDate && itemDate <= endDate;
  });

  return (
    <div>
      <div className='  space-y-10'>

        {/* header */}
        <div>
          <p>
            Transaction history
          </p>
        </div>

        {/* date selector */}
        <div className='  space-y-2'>
          <div>
            <p>
              Date  range
            </p>
          </div>
          <div className=' flex flex-col md:flex-row gap-4 overflow-x-scroll items-center'>
            <DatePicker
                selected={startDate}
                onChange={(date)=> setStartDate(date)}
                startDate={startDate}
                endDate={endDate}
                selectsStart
                className=' border  p-1 rounded-md'
            />

            <DatePicker
                selected={endDate}
                onChange={(date)=> setEndDate(date)}
                startDate={startDate}
                endDate={endDate}
                selectsEnd
                minDate={startDate}
                className=' border  p-1 rounded-md'
            />
          </div>
        </div>

        {/* history table */}
        <div>
          <div>
            <div className="overflow-x-auto">
              <table className="table-auto w-full border-collapse border border-gray-300">
                  <thead>
                      <tr>
                          <th className="px-4 py-2 bg-gray-100 border border-gray-300">Date</th>
                          <th className="px-4 py-2 bg-gray-100 border border-gray-300">Order ID</th>
                          <th className="px-4 py-2 bg-gray-100 border border-gray-300">Service</th>
                          <th className="px-4 py-2 bg-gray-100 border border-gray-300">Status</th>
                          <th className="px-4 py-2 bg-gray-100 border border-gray-300">Amount</th>
                      </tr>
                  </thead>
                  <tbody className=' text-sm  text-neutral-500'>
                      {/* Example rows, replace with your data */}
                      {filteredData.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-gray-300">{item.date}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.orderId}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.service}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.status}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.amount}</td>
                            </tr>
                        ))}
                  </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default History