import React from "react";
import styles from '../../../../../styles/Details/Overview/OverviewPage/OverviewRight/Profile.module.css'
import imageSrc from '../../../../../assets/AlbanPhoto.jpeg'
import { BiEdit } from "react-icons/bi";

const Profile =() =>{
    return(
        <div className={styles.card}>
            <div >
                <img src={imageSrc} alt="Alban's Photo" className={styles.image}/>
                <BiEdit className={styles.edit}/>  
            </div>
            <div className={styles.info}>
                <h3>Name: <span>Alban Zyle</span></h3>
                <h3>Email: <span>Alba.Zyle@fti.edu.al</span></h3>
                <h3>Phone:<span>+33768656699</span></h3>
            </div>
        </div>

    );
};

export default Profile;