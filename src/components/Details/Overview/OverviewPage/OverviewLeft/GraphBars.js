import React from "react";
import styles from "../../../../../styles/Details/Overview/OverviewPage/OverviewLeft/GraphBars.module.css";
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July','August', 'Septemre', 'Novembre', 'Decembre'];

const generateRandomData = () => {
    return labels.map(() => Math.floor(Math.random() * 2000));
  };
  
const data = {
  labels,
  datasets: [
    {
      label: 'Dataset 1',
      data: generateRandomData(),
      backgroundColor: 'rgb(255, 99, 132)',
      stack: 'Stack 4',
    },
    {
      label: 'Dataset 2',
      data: generateRandomData(),
      backgroundColor: 'rgb(75, 192, 192)',
      stack: 'Stack 0',
    },
    {
      label: 'Dataset 3',
      data: generateRandomData(),
      backgroundColor: 'rgb(53, 162, 235)',
      stack: 'Stack 1',
    },
    {
        label: 'Dataset 4',
        data: generateRandomData(),
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 3',
      },
      {
        label: 'Dataset 4',
        data: generateRandomData(),
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 5',
      },
      {
        label: 'Dataset 4',
        data: generateRandomData(),
        backgroundColor: 'rgb(53, 162, 235)',
        stack: 'Stack 6',
      },
  ],
};

const options = {
  plugins: {
    title: {
      display: true,
      text: 'Chart.js Bar Chart - Stacked',
    },
  },
  responsive: true,
  interaction: {
    mode: 'index',
    intersect: false,
  },
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

const GraphBars = () => {
  return (
    <div className={styles.card}>
      <h2>Leket qe ke ne banka te ndryshme, cach ...</h2>
      <Bar data={data} options={options} />
    </div>
  );
}

export default GraphBars;
