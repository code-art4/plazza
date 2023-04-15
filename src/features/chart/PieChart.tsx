import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  plugins: {
    title: {
      display: false,
      text: 'Chart.js Doughnut Chart',
    },
     tooltip: {
      position: 'bottom',
    },
  },
  responsive: true,
  // Reverse legend order
   legend: {
    display: false,
  },
};

export const data = {
  labels: ['Delivered', 'Pending', 'Cancelled'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3],
      backgroundColor: [
          '#16962B',
          '#B9F1C2',        
          '#FF3E3E',
      ],
      borderColor: [
          '#16962B',
          '#B9F1C2',        
          '#FF3E3E',
      ],
      borderWidth: 1,
    },
  ],  
};

export default function App() {
  return <Doughnut options={options} data={data} />;
}
