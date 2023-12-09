import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import {info} from '../../assets/langInfo';

 
export default function Nav({i,onSearch,logout}) {
    return (
        <div className={styles.divBar}>

            <div className={styles.divLeft}>
                <button className={styles.buttonLNav}>
                    <Link to={'/about'}>{info.routNam.about[i]}</Link>
                </button>
                <button className={styles.buttonNav}>
                    <Link to={'/home'}>{info.routNam.home[i]}</Link>
                </button>            
                <button className={styles.buttonNav}>
                    <Link to={'/favorites'}>{info.routNam.favorites[i]}</Link>
                </button>
                <button className={styles.buttonRNav}>
                    <Link to={'/'}>{info.routNam.logout[i]}</Link>
                </button>

        </div>
            
        <div className={styles.searchDiv}>
            <SearchBar i={i} onSearch={onSearch} />
        </div>           
            
        </div>        
    )  
    
}

