import React from "react";
import { useState } from "react";
import validation from "../../validation";
import styles from './Form.module.css';

import {info} from '../../assets/langInfo';


export default function Form({login,i}) {

    const [userData, setUserData] = useState({
        email:'',
        password: '',
     });   

    let valida = validation(userData);
    let sucess=valida[0] && valida[1] && valida[2] && valida[3] && valida[4] && valida[5];
     
    const handleEChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
    
        setUserData({...userData, [property]: value});
    }

    const handleEntry = (event) => {
        event.preventDefault();
        login(userData);
     }

    return(
        <form className={styles.forms}>
            <div className={styles.titulo}>
                <h1 className={styles.title}>{info.forms.title[i]}</h1> 
                <h2 className={styles.usData}>{info.forms.title2[i]}</h2>   
            </div>
            
            <div className={styles.container1}>
            
                <div className={styles.container2}>
                    <h6 className={styles.ingreso}>{info.forms.login[i]}</h6>
                    <div className={styles.label}>
                        <img src="./images/rick_1.png" alt="" className={styles.imgsize}/>
                        <label htmlFor="email">{info.forms.email[i]}</label>
                        <input className={styles.input}
                            type="text" 
                            name="email" 
                            value={userData.email}
                            onChange={handleEChange} />
                        </div>

                    <div className={styles.label}> 
                        <label htmlFor="password">{info.forms.password[i]}</label>
                        <input className={styles.input}
                        type="password" 
                        name="password" 
                        value={userData.password} 
                        onChange={handleEChange} />
                    </div>              
                        {sucess && <button className={styles.buttonFM} onClick={handleEntry}>{info.forms.submit[i]}</button>}
                </div>

                <div className={styles.container2a}></div>

                <div className={styles.container3}>
                    {valida[0] ? <h3 className={styles.mist}>✔️{info.mailErrors.empty[i]}</h3>:
                    <h3 className={styles.mist}>❌{info.mailErrors.empty[i]}</h3>}
                    {valida[1] ? <h3 className={styles.mist}>✔️{info.mailErrors.type[i]}</h3>:
                    <h3 className={styles.mist}>❌{info.mailErrors.type[i]}</h3>}
                    {valida[2] ? <h3 className={styles.mist}>✔️{info.mailErrors.length[i]}</h3>:
                    <h3 className={styles.mist}>❌{info.mailErrors.length[i]}</h3>}

                    {valida[3] ? <h3 className={styles.mist}>✔️{info.passErrors.empty[i]}</h3>:
                    <h3 className={styles.mist}>❌{info.passErrors.empty[i]}</h3>}
                    {valida[4] ? <h3 className={styles.mist}>✔️{info.passErrors.number[i]}</h3>:
                    <h3 className={styles.mist}>❌{info.passErrors.number[i]}</h3>}
                    {valida[5] ? <h3 className={styles.mist}>✔️{info.passErrors.size[i]}</h3>:
                    <h3 className={styles.mist}>❌{info.passErrors.size[i]}</h3>}

                </div>

                </div> 
            </form>  
        )
    }