import React, {useState} from "react";
import styles from '../../styles/MyProfile/Photos.module.css';
import imgSrc1 from '../../assets/milan.webp';
import imgSrc2 from '../../assets/AlbanPhoto.jpeg';

const Photos =(props)=>{
    const data = props.data;
    return(
            <div className={styles.photos}>
            <img src={imgSrc2} alt="Album of photos" />

            {data.map((_, index) => (
                <img key={index} src={imgSrc1} alt="Album of photos" />
            ))}
            </div>
    );
}

export default Photos;