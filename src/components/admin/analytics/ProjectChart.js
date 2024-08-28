import React from 'react'
import { Line } from 'react-chartjs-2';
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  CategoryScale,
} from 'chart.js';

// Register required elements
Chart.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);


const ProjectChart = ({data}) => {

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
          },
          title: {
            display: true,
            text: 'Projects Done Monthly',
          },
        },
        elements: {
          line: {
            tension: 0.4, // Adjust this value for curve (0 for straight lines, 1 for maximum curve)
          },
        },
      };

    
    // Process the data to count projects by month
    const processedData = data.reduce((acc, project) => {
        const month = new Date(project.createdAt).getMonth();
        acc[month] = (acc[month] || 0) + 1;
        return acc;
    }, {});

    const labels = Object.keys(processedData).map(month =>
        new Date(0, month).toLocaleString('default', { month: 'long' })
    );

    const projectsData = Object.values(processedData);

    // console.log(projectsData)

    const chartData = {
        labels,
        datasets: [
        {
            label: 'Projects',
            data: projectsData,
            borderColor: 'rgba(75, 192, 192, 1)',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            fill: false,
            tension: 0.4, // Adjust this value for curve (0 for straight lines, 1 for maximum curve)
        },
        ],
    };


  return (
    <div>
      <Line options={options} data={chartData} />
    </div>
  )
}

export default ProjectChart
