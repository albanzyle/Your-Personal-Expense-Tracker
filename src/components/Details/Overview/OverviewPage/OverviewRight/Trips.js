import React from "react"; 
import styles from '../../../../../styles/Details/Overview/OverviewPage/OverviewRight/Trips.module.css';
import imageSrc from "../../../../../assets/milan.webp";

const data = {
    datasets:[
        {
            image: imageSrc,
            place: "Milan",
            spent: 1000,
            startDate: "12/03/2024",
            endDate: "13/03/2024"
        },
        {
            image: imageSrc,
            place: "Paris",
            spent: 100,
            startDate: "17/03/2024",
            endDate: "18/03/2024"
        },
        {
            image: imageSrc,
            place: "Annecy",
            spent: 400,
            startDate: "30/03/2024",
            endDate: "31/03/2024"
        }
        
    ]
};

const Trips = () => {
    return (
        <div className={styles.trips}>
            <h2>Recent Trips</h2>
            {data.datasets.map((dataset,index) => (
                <div key={index} className={styles.placevisited}>
                    <div className={styles.image}>
                        <img src={dataset.image} alt="Place Visited"/>
                    </div>
                    <div className={styles.details}>
                        <h3>{dataset.place}</h3>
                        <p>-${dataset.spent}</p>
                    </div>
                    <div className={styles.details}>
                        <p>{dataset.startDate}</p>
                        <p>{dataset.endDate}</p>
                    </div>
                </div>
            ))}
            <div className={styles.lastdiv}>
                <button>View All Trips</button>
            </div>
        </div>
    );
};

export default Trips;
