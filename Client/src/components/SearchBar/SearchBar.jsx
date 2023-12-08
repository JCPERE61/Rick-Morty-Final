import React from 'react';
import { useState } from 'react';
import styles from './SearchBar.module.css';

import {info} from '../../assets/langInfo';

let i=0;

export default function SearchBar({onSearch}) {

   const [id,setId] = useState('');
   const[inpId,setInpId] = useState('');

   const handleChange = (event) => {
      setInpId(event.target.value);
      setId(event.target.value);
   }

   return (
      <div className={styles.searchDiv}>
        <input onChange={handleChange} placeholder='id' className={styles.input} type='search' value={inpId}/>
        <button className={styles.buttonSB} onClick={()=>{
         onSearch(id)
         setInpId('')}
         }>{info.routNam.addChar[i]}</button>
       </div>
    );
 }