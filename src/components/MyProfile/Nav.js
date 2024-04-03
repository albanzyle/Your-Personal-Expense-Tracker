import React from "react";
import styles from '../../styles/MyProfile/Nav.module.css'
const Nav =({navIndex, setNavIndex})=>{
    return(
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
    );
}

export default Nav;