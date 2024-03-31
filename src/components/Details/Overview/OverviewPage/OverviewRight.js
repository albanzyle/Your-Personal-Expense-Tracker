import React from "react"; 
import styles from "../../../../styles/Details/Overview/OverviewPage/OverviewRight.module.css"
import Profile from "./OverviewRight/Profile";
import ChartLine from "./OverviewRight/CharLine";
import Chat from "./OverviewRight/Chat";
import Trips from "./OverviewRight/Trips";

const OverviewRight = ()=>{
    return(
        <div className={styles.right}>
           <Profile/>
           <ChartLine/>
           <Trips/>
           <Chat/>
        </div>
    ); 
}

export default OverviewRight;