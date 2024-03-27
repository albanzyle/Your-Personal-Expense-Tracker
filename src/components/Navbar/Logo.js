import React from 'react';
import styles from '../../styles/Navbar/Logo.module.css'
import { FaMoneyBill } from 'react-icons/fa';

function Logo() {
  return (
    <div className={styles.logo}>
      <FaMoneyBill margin-top="10px" align-items="bottom" color="green" size={32} />
      <h1>Personal Expense Tracker</h1>
    </div>
  );
}

export default Logo;
