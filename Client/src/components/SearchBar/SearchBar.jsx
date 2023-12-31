import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';

import {info} from '../../assets/langInfo';

export default function SearchBar({i,onSearch}) {

   const [id,setId] = useState('');
   const[inpId,setInpId] = useState('');

   const handleChange = (event) => {
      setInpId(event.target.value);
      setId(event.target.value);
   }

   return (
      <div className={styles.container}>
        <input onChange={handleChange} placeholder='id' className={styles.input} type='search' value={inpId}/>
        <button className={styles.buttonSB} onClick={()=>{
         onSearch(id)
         setInpId('')}
         }>{info.routNam.addChar[i]}</button>
       </div>
    );
 }