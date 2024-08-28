import React from 'react'
import { Line } from 'react-chartjs-2';
import { 
    Chart,
    LineElement,
    PointElement,
    LinearScale,
    Title,
    Tooltip,
    CategoryScale,
    Legend
 } from 'chart.js';

Chart.register(LineElement, PointElement, LinearScale, CategoryScale, Title, Tooltip, Legend);


const processData = (data) => {
    const result = {
      labels: [],
      clients: [],
      skilled: [],
      unskilled: []
    };
  
    data.forEach(user => {
      const createdAt = new Date(user.createdAt);
      const month = `${createdAt.getFullYear()}-${String(createdAt.getMonth() + 1).padStart(2, '0')}`;
      if (!result.labels.includes(month)) {
        result.labels.push(month);
      }
      const monthIndex = result.labels.indexOf(month);
  
      if (user.group === 'client') {
        result.clients[monthIndex] = (result.clients[monthIndex] || 0) + 1;
      } else if (user.group === 'skilled') {
        result.skilled[monthIndex] = (result.skilled[monthIndex] || 0) + 1;
      } else if (user.group === 'unskilled') {
        result.unskilled[monthIndex] = (result.unskilled[monthIndex] || 0) + 1;
      }
    });
  
    return result;
  };

const FreelancersChart = ({data}) => {

    // const processedData = processData(data)

    // console.log(processedData)

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'User Activities by Month',
          },
        },
        elements: {
            line: {
                tension: 0.4, // Set this value to adjust the curve (0 for straight lines, 1 for maximum curve)
            },
        },
      };


      const processedData = data.reduce((acc, user) => {
        const month = new Date(user.createdAt).getMonth();
        if (!acc[month]) {
          acc[month] = { clients: 0, skilled: 0, unskilled: 0 };
        }
        if (user.group === 'client') {
          acc[month].clients += 1;
        } else if (user.group === 'skilled') {
          acc[month].skilled += 1;
        } else if (user.group === 'unskilled') {
          acc[month].unskilled += 1;
        }
        return acc;
      }, {});
    
      const labels = Object.keys(processedData).map(month => 
        new Date(0, month).toLocaleString('default', { month: 'long' })
      );
    
      const clientsData = Object.values(processedData).map(monthData => monthData.clients);
      const skilledData = Object.values(processedData).map(monthData => monthData.skilled);
      const unskilledData = Object.values(processedData).map(monthData => monthData.unskilled);

    //   console.log(clientsData)


      const chartData = {
        labels,
        datasets: [
          {
            label: 'Clients',
            data: clientsData,
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            fill: false,
            tension: 0.4
          },
          {
            label: 'Skilled Freelancers',
            data: skilledData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            fill: false,
            tension: 0.4
          },
          {
            label: 'Unskilled Freelancers',
            data: unskilledData,
            backgroundColor: 'rgba(255, 206, 86, 0.2)',
            borderColor: 'rgba(255, 206, 86, 1)',
            fill: false,
            tension: 0.4
          },
        ],
      };


  return (
    <div>
      <Line options={options} data={chartData} />
    </div>
  )
}

export default FreelancersChart
