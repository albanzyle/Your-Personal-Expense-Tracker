import React from "react";
import imgSrc1 from '../../assets/milan.webp';
import imgSrc2 from '../../assets/AlbanPhoto.jpeg';
import { CiEdit } from "react-icons/ci";
import styles from '../../styles/MyProfile/ProfileInfomations.module.css';

const ProfileInformation =()=>{
    return(
        <div>
            <img className={styles.backgoundPhoto} src={imgSrc1} alt="Bacgroung image"/>
            <img className={styles.profilePhoto} src={imgSrc2} alt="Profile picture"/>
            <div className={styles.informations}>
                <h1>Alban Zyle</h1>
                <p>Alban.Zyle@fti.edu.al</p>
                <p>+33768656699</p>
                <CiEdit className={styles.edit}/>
            </div>
            <div className={styles.posts}>
                <div>
                    <p>20</p>
                    <p>posts</p>
                </div>
                <div>
                    <p>12k</p>
                    <p>friends</p>
                </div>
                <div>
                    <p>15</p>
                    <p>trips</p>
                </div>
            </div>
        </div>
    );
}

export default ProfileInformation;