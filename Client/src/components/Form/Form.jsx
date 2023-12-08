import React from "react";
import { useState } from "react";
import validation from "../../validation";
import styles from './Form.module.css';


export default function Form({login}) {

    const [userData, setUserData] = useState({
        email:'',
        password: '',
     });

     const [regUserData, setRegUserData] = useState({
        email:'',
        password: '',
     });

    const [errors,setErrors] = useState({
        email:'',
        password:'',
     })

    const handleEChange = (event) =>{
        const property = event.target.name;
        const value = event.target.value;
        setErrors(validation({...userData, [property]: value}))
        setUserData({...userData, [property]: value});
    }

    const handleEntry = (event) => {
        event.preventDefault();
        login(userData);
     }

    const handleReg = (event) => {
        event.preventDefault();
        login(regUserData);
     }

    return(
        <form className={styles.forms}>
            <div className={styles.titulo}>
                <h1>Rick and Morty Form</h1>    
            </div>
            
            <div className={styles.container1}>
            
                <div className={styles.container2}>
                    <h6>User Logging</h6>
                    <div className={styles.label}>
                        <img src="./images/rick_1.png" alt="" className={styles.imgsize}/>
                        <label htmlFor="email">Email:</label>
                        <input
                            type="text" 
                            name="email" 
                            value={userData.email}
                            onChange={handleEChange} />
                            {errors.email && <p>{errors.email}</p>}
                    </div>

                    <div className={styles.label}> 
                        <label htmlFor="password">Password:</label>
                        <input
                        type="password" 
                        name="password" 
                        value={userData.password} 
                        onChange={handleEChange} />
                        {errors.password && <p>{errors.password}</p>}
                    </div>              
                        {Object.keys(errors).length === 0 && <button className={styles.buttonFM} onClick={handleEntry}>Submit</button>}
                </div>

                </div> 
            </form>  
        )
    }