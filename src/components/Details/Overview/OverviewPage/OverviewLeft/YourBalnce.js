import React from "react";
import styles from "../../../../../styles/Details/Overview/OverviewPage/OverviewLeft/YourBalance.module.css"
import srcImage from '../../../../../assets/bacground.jpeg'
const YourBalance =()=>{
    return(
        <div className={styles.card}>
            <h2 className={styles.balance}>YOUR BALANCE: <span>$20,000</span></h2>
            <span className={styles.cardDetails}>
                <div>
                    <div>**** **** **** 1234</div>
                    <span>VALID DATE</span>
                    <div>03\25</div>
                </div>
                <div>
                    <span>CARD HOLDER</span>
                    <div>ALBAN ZYLE</div>
                </div>
            </span>
        </div>
    );
}

export default YourBalance;