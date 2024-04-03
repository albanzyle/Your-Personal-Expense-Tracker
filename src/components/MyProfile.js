import React, {useState} from "react";
import Search from './Details/Search';
import styles from '../styles/MyProfile.module.css';
import imgSrc1 from '../assets/milan.webp';
import imgSrc2 from '../assets/AlbanPhoto.jpeg';
import imgSrc3 from '../assets/bacground.jpeg';
import imgSrc4 from '../assets/backgroundCC.avif';
import imgSrc5 from '../assets/i2.jpg';
import imgSrc6 from '../assets/credit-card.jpg';

import { CiEdit } from "react-icons/ci";
import Photos from "./MyProfile/Photos";
import ProfileInformation from "./MyProfile/ProfileInfomations";
import Nav from "./MyProfile/Nav";

const MyProfile =()=>{
    const [navIndex,setNavIndex] =useState(0);
    const data = [imgSrc1, imgSrc2, imgSrc3, imgSrc4, imgSrc5, imgSrc6];
    return(
        <div className={styles.myprofile}>
            <Search/>
            <ProfileInformation/>
            <Nav navIndex={navIndex} setNavIndex={setNavIndex}/>
            {navIndex ===0 && <Photos data={data}/>}
        </div>
    );
}

export default MyProfile;