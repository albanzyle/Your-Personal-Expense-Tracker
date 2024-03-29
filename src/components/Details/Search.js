import React from "react";
import styles from '../../styles/Details/Search.module.css'
import SearchArea from "./Search/SearachArea";
import Notifications from "./Search/Notifications";

function Search(){

    return(
        <div className={styles.search}>
            <SearchArea/>
            <Notifications/>
        </div>
    );
    
}

export default Search;