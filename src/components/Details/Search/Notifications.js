import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import imageSrc from '../../../assets/AlbanPhoto.jpeg'
import styles from "../../../styles/Details/Search/Notifications.module.css"

function Notifications (){
    return(
        <div className={styles.notification}>
            <div className={styles.iconsContainer}>
                <IoIosNotificationsOutline className={styles.icons} size={25}/>
                <BsThreeDotsVertical size={20} className={styles.icons}/>
            </div>
            <img src={imageSrc} alt="Credit Card" className={styles.image}/>
        </div>
    );
}

export default Notifications;
