import React from "react";
import styles from "../../../../../styles/Details/Overview/OverviewPage/OverviewLeft/YourBalance.module.css"
import srcImage from '../../../../../assets/bacground.jpeg'
const YourBalance =()=>{
    return(
        <div className={styles.card}>
            <h4 className={styles.balance}>YOUR BALANCE</h4>
            <h1>$20,000</h1>
        </div>
    );
}

export default YourBalance;