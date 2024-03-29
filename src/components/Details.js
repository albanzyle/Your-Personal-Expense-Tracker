import React from 'react';
import styles from '../styles/Details.module.css'
import Search from './Details/Search';
import Overview from './Details/Overview';


function Details() {
  return (
    <div className={styles.details}>
      <Search/>
      <Overview/>
    </div>
  );
}

export default Details;
