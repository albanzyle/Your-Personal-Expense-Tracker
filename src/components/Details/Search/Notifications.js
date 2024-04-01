import React from "react";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import imageSrc from '../../../assets/AlbanPhoto.jpeg'
import styles from "../../../styles/Details/Search/Notifications.module.css"
import { Link } from 'react-router-dom';

function Notifications (){
    return(
        <div className={styles.notification}>
            <div className={styles.iconsContainer}>
                <IoIosNotificationsOutline className={styles.icons} size={25}/>
                <BsThreeDotsVertical size={20} className={styles.icons}/>
            </div>
            <Link to="/myprofile">
                <img src={imageSrc} alt="User Image" className={styles.image}/>
            </Link>

        </div>
    );
}

export default Notifications;
