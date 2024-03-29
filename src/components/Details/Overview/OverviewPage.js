import React from "react";
import OverviewLeft from "./OverviewPage/OverviewLeft";
import OverviewRight from "./OverviewPage/OverviewRight";
import styles from "../../../styles/Details/Overview/OverviewPage.module.css"
function OverviewPage (){
    return (
    <>
        <div className={styles.top}>
            <h1>Overview</h1>
            <h3>Hello Alban, welcome back!</h3>
        </div>
        <div className={styles.bottom}>
            <OverviewLeft/>
            <OverviewRight/>
        </div>
    </>
    );
}

export default OverviewPage;