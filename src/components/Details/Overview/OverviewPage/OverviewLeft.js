import React from "react"; 
import styles from "../../../../styles/Details/Overview/OverviewPage/OverviewLeft.module.css"
import ExchangeRate from "./OverviewLeft/ExchangeRate";
import GraphBars from "./OverviewLeft/GraphBars";
import History from "./OverviewLeft/History";
import YourBalance from "./OverviewLeft/YourBalnce";

const OverviewLeft = ()=>{
    return(
        <>
            <div className={styles.left}>
                <YourBalance/>
                <History/>
                <GraphBars/>
                <ExchangeRate/>    
            </div>

        </>
    ); 
}

export default OverviewLeft;