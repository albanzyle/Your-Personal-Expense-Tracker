import React from "react";
import styles from '../../../../../styles/Details/Overview/OverviewPage/OverviewRight/Chat.module.css'
import imgSrc from '../../../../../assets/AlbanPhoto.jpeg'
import { MdAddBox } from "react-icons/md";
import { CgMoreO } from "react-icons/cg";

const data = {
    datasets:[
        {
            image: 1
        },
        {
            image: 1
        },
        {
            image: 1
        }        
    ]
}

const Chat =() =>{
    return(
        <div className={styles.card}>
            <h2>Start Chating</h2>
            <div className={styles.images}>
                {data.datasets.map((dataset,index)=>(
                    <img key={index} src={imgSrc}/> ))}  
                <div className={styles.more}><CgMoreO className={styles.more}/></div>              
            </div>
            
        </div>
    );
};

export default Chat;