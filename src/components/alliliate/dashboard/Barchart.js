import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);


const BarChart = ({ earningsData }) => {
    const data = {
        labels: earningsData.map(data => data.date),
        datasets: [
            {
                label: 'Earnings',
                data: earningsData.map(data => data.earnings),
                backgroundColor: '#31013f',
                // borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top'
            },
            title: {
                display: true,
                text: 'User Earnings Over 12 Months'
            }
        }
    };

    return <Bar data={data} options={options} />;
};


export default BarChart