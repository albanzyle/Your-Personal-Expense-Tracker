import React from "react";
import styles from '../../../styles/Details/Search/SearchArea.module.css';
import { FaSearch } from "react-icons/fa";

function SearchArea(){
    return(
        <input className={styles.search} type="text" placeholder="Search"/>
        
    );
}

export default SearchArea;