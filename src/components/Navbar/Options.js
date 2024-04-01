import React from 'react';
import { Link } from 'react-router-dom';
import { FaRegChartBar, FaWallet, FaUser, FaCog } from 'react-icons/fa'; // Import icons from Font Awesome
import styles from '../../styles/Navbar/Options.module.css';

function Options() {
  return (
    <div className={styles.options}>
      <Link to="/" className={styles.link}><FaRegChartBar className={styles.icon} /> <span>Overview</span></Link>
      <Link to="" className={styles.link}><FaWallet className={styles.icon} /><span>My Wallet</span> </Link>
      <Link to="/myprofile" className={styles.link}><FaUser className={styles.icon} /> <span>My Profile</span> </Link>
      <Link to="" className={styles.link}><FaCog className={styles.icon} /> <span>Settings</span></Link>
    </div>
  );
}

export default Options;
