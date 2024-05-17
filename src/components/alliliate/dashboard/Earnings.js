import React from 'react'

const Earnings = () => {

    const earningsReport = [
        { date: '2023-01-15', commissionType: 'Sale', marketingTool: 'Email', status: 'Completed', commission: 150 },
        { date: '2023-02-20', commissionType: 'Lead', marketingTool: 'Social Media', status: 'Pending', commission: 75 },
        { date: '2023-03-05', commissionType: 'Click', marketingTool: 'Website Banner', status: 'Completed', commission: 50 },
        { date: '2023-04-12', commissionType: 'Sale', marketingTool: 'Affiliate Link', status: 'Completed', commission: 200 },
        { date: '2023-05-18', commissionType: 'Lead', marketingTool: 'Email', status: 'Pending', commission: 100 },
        { date: '2023-06-22', commissionType: 'Click', marketingTool: 'Social Media', status: 'Completed', commission: 80 },
        { date: '2023-07-30', commissionType: 'Sale', marketingTool: 'Website Banner', status: 'Completed', commission: 220 },
        { date: '2023-08-15', commissionType: 'Lead', marketingTool: 'Affiliate Link', status: 'Pending', commission: 60 },
        { date: '2023-09-10', commissionType: 'Click', marketingTool: 'Email', status: 'Completed', commission: 40 },
        { date: '2023-10-25', commissionType: 'Sale', marketingTool: 'Social Media', status: 'Completed', commission: 300 },
        { date: '2023-11-17', commissionType: 'Lead', marketingTool: 'Website Banner', status: 'Pending', commission: 90 },
        { date: '2023-12-05', commissionType: 'Click', marketingTool: 'Affiliate Link', status: 'Completed', commission: 70 },
    ];


    const paymentHistory = [
        { date: '2023-01-15', type: 'Credit', status: 'Successful', commission: 150 },
        { date: '2023-02-20', type: 'Debit', status: 'Pending', commission: 75 },
        { date: '2023-03-05', type: 'Credit', status: 'Successful', commission: 50 },
        { date: '2023-04-12', type: 'Debit', status: 'Pending', commission: 200 },
        { date: '2023-05-18', type: 'Credit', status: 'Successful', commission: 100 },
        { date: '2023-06-22', type: 'Debit', status: 'Successful', commission: 80 },
        { date: '2023-07-30', type: 'Credit', status: 'Pending', commission: 220 },
        { date: '2023-08-15', type: 'Debit', status: 'Successful', commission: 60 },
        { date: '2023-09-10', type: 'Credit', status: 'Pending', commission: 40 },
        { date: '2023-10-25', type: 'Debit', status: 'Successful', commission: 300 },
        { date: '2023-11-17', type: 'Credit', status: 'Pending', commission: 90 },
        { date: '2023-12-05', type: 'Debit', status: 'Successful', commission: 70 },
    ];

    const getStatusClass = (status) => {
        return status === 'Successful' ? 'text-green-500' : 'text-red-500';
    };


  return (
    <div className=' space-y-7 pb-14'>
        <div className=' space-y-5'>
            <div>
                <p>
                    Earnings report
                </p>
            </div>
            <div>
                <div className="overflow-x-auto p-4 h-60 overflow-y-scroll">
                    <table className="table-auto w-full   border-collapse border border-gray-300">
                        <thead className=' text-sm'>
                            <tr>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Date</th>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Commission Type</th>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Marketing Tool</th>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Status</th>
                                <th className="px-4 py-2 bg-gray-100 border border-gray-300">Commission ($)</th>
                            </tr>
                        </thead>
                        <tbody className=''>
                            {earningsReport.map((item, index) => (
                                <tr key={index} className=' text-xs  '>
                                    <td className="px-4 py-2 border border-gray-300">{item.date}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.commissionType}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.marketingTool}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.status}</td>
                                    <td className="px-4 py-2 border border-gray-300">{item.commission}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <div className=' space-y-5'>
            <div>
                <p>
                    Payment history
                </p>
            </div>
            <div className="overflow-x-auto p-4 h-60 overflow-y-scroll">
                <table className="table-auto w-full border-collapse border border-gray-300">
                    <thead className=' text-sm'>
                        <tr>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-300">Date</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-300">Type</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-300">Status</th>
                            <th className="px-4 py-2 bg-gray-100 border border-gray-300">Commission (USD)</th>
                        </tr>
                    </thead>
                    <tbody className=' text-xs'>
                        {paymentHistory.map((item, index) => (
                            <tr key={index}>
                                <td className="px-4 py-2 border border-gray-300">{item.date}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.type}</td>
                                <td className={`px-4 py-2 border border-gray-300 ${getStatusClass(item.status)}`}>{item.status}</td>
                                <td className="px-4 py-2 border border-gray-300">{item.commission}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
        <div>
            <div className=' inline-block'>
                <p className=' trans-purple-btn'>
                    Withdraw funds
                </p>
            </div>
        </div>
    </div>
  )
}

export default Earnings