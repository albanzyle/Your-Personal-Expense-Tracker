import React from 'react';
import styles from '../../styles/Navbar/Image.module.css'
// import { BiSolidCreditCardAlt } from "react-icons/bi";
import imageSrc from "../../assets/credit-card.jpg"

function Image() {
  return (
    <div className={styles.image}>
        <img src={imageSrc} alt="Credit Card" />
        <button className={styles.allAccBtn}>All Accounts</button>
    </div>
  );
}

export default Image;
