import React from 'react';
import { CiLogout } from "react-icons/ci";
import styles from '../../styles/Navbar/Logout.module.css';

function Logout() {
return (
  <div className={styles.logout}>
    <div className={styles.card}>
      <CiLogout className={styles.icon}/>
      <button className={styles.logoutBtn}><h3>Logout</h3></button>
    </div>

  </div>
);
}

export default Logout;
