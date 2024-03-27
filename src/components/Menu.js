import React, { useState } from 'react';
import Logo from './Navbar/Logo'; 
import Options from './Navbar/Options'; 
import Image from './Navbar/Image';
import Logout from './Navbar/Logout'; 
import styles from '../styles/Menu.module.css';
function Menu() {
  return (
    <div className={styles.menu}>
      <Logo />
      <Options/>
      <Image/>
      <Logout/>
    </div>
  );
}

export default Menu;
