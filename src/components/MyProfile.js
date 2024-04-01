import React, {useState} from "react";
import Search from './Details/Search';
import styles from '../styles/MyProfile.module.css';
import imgSrc1 from '../assets/milan.webp';
import imgSrc2 from '../assets/AlbanPhoto.jpeg';
import { CiEdit } from "react-icons/ci";
import Photos from "./MyProfile/Photos";
import ProfileInformation from "./MyProfile/ProfileInfomations";

const MyProfile =()=>{
    const [navIndex,setNavIndex] =useState(0);
    const data = [1, 2,3,4,5,6,7,8,9,10,11,212,13,45,46,47];
    return(
        <div className={styles.myprofile}>
            <Search/>
            <ProfileInformation/>
            <div className={styles.nav}>
                <div className={navIndex === 0 ? styles.active : ''} onClick={() => setNavIndex(0)}>
                    <p>POSTS</p>
                </div>
                <div className={navIndex === 1 ? styles.active : ''} onClick={() => setNavIndex(1)}>
                    <p>FRIENDS</p>
                </div>
                <div className={navIndex === 2 ? styles.active : ''} onClick={() => setNavIndex(2)}>
                    <p>TRIPS</p>
                </div>
            </div>
            {navIndex ===0 && <Photos data={data}/>}
        </div>
    );
}

export default MyProfile;