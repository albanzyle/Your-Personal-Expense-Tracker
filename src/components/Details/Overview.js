import React from "react";
import styles from '../../styles/Details/Overview.module.css'
import OverviewPage from "./Overview/OverviewPage";

function Overview (){

    return(
        <div className={styles.overview}>
            <OverviewPage/>
        </div>
    );

}

export default Overview;