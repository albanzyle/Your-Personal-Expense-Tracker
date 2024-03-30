import React from 'react';
import { CiLogout } from "react-icons/ci";
import styles from '../../styles/Navbar/Logout.module.css';

function Logout() {
return (
  <div className={styles.logout}>
    <div className={styles.card}>

        <button className={styles.logoutBtn}><CiLogout className={styles.icon}/>Logout</button>
    </div>

  </div>
);
}

export default Logout;
