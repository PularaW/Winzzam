import React from 'react'
import { Bar } from "react-chartjs-2";
 import './css/ec_salary.css';
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from 'chart.js';
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
)
const ec_salaryView = () => {
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June','July','August','Sept','Oct','Nov','Dec'],
    datasets: [
      {
        label: 'Sales Data',
        backgroundColor: '#33BDFE',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
        hoverBackgroundColor: 'rgba(75, 192, 192, 0.8)',
        hoverBorderColor: 'rgba(75, 192, 192, 1)',
        data: [6500, 5900, 8000, 8100, 5600, 5500,6500, 5900, 8000, 8100, 5600, 5500],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    scales: {
      x: {
        type: 'category', // Use 'categoryAxis' for x-axis
        ticks: {
          beginAtZero: true,
          angle: 45, // Rotate the labels by 45 degrees
        },
      },
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className='card card-view p-3 rounded-4 border-0 shadow-lg mr-4 w-50'>
      <h2 className='text-info'>Income Salary</h2>
      <div>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ec_salaryView