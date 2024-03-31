import React from "react";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from 'react-chartjs-2';
import styles from '../../../../../styles/Details/Overview/OverviewPage/OverviewRight/CharLine.module.css'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);
const generateRandomData = () => {
    return labels.map(() => Math.floor(Math.random() * 2000));
  };

const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Trips expense or I do not know...',
      },
    },
};
  
const labels = ['January', 'February', 'March'];

const data = {
    labels,
    datasets: [
      {
        label: 'Dataset 1',
        data: generateRandomData(),
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Dataset 2',
        data: generateRandomData(),
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

const ChartLine =() =>{
    return(
        <div className={styles.chartline}>
            <Line className={styles.line} options={options} data={data} />
        </div>
    );
};

export default ChartLine;