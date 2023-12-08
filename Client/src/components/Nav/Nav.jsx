import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';

import {info} from '../../assets/langInfo';

let i=0;

 
export default function Nav({onSearch,logout}) {
    return (
        <div className={styles.divBar}>
            <div className={styles.divLeft}>
            <button className={styles.buttonNav}>
                <Link to={'/about'}>{info.routNam.about[i]}</Link>
            </button>
            <button className={styles.buttonNav}>
                <Link to={'/home'}>{info.routNam.home[i]}</Link>
            </button>            
            <button className={styles.buttonNav}>
                <Link to={'/favorites'}>{info.routNam.favorites[i]}</Link>
            </button>
            <button className={styles.buttonNav} onClick={logout}>{info.routNam.logout[i]}</button>

            </div>
            
            <SearchBar onSearch={onSearch} />
        </div>        
    )  
    
}

