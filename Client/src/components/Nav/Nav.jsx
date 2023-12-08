import React from 'react';
import SearchBar from '../SearchBar/SearchBar';
import { Link } from 'react-router-dom';
import styles from './Nav.module.css';
 
export default function Nav({onSearch,logout}) {
    return (
        <div className={styles.divBar}>
            <div className={styles.divLeft}>
            <button className={styles.buttonNav}>
                <Link to={'/about'}>About</Link>
            </button>
            <button className={styles.buttonNav}>
                <Link to={'/home'}>Home</Link>
            </button>            
            <button className={styles.buttonNav}>
                <Link to={'/favorites'}>Favorites</Link>
            </button>
            <button className={styles.buttonNav} onClick={logout}>Logout</button>

            </div>
            
            <SearchBar onSearch={onSearch} />
        </div>        
    )  
    
}

