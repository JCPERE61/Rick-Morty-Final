import axios from "axios";
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import styles from './Detail.module.css';

import {info} from '../../assets/langInfo';


export default function Detail({i}) {

   

    const [character, setCharacter] = useState({});
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    useEffect(() => {
        axios(`http://localhost:3001/rickandmorty/character/${id}`).then(({ data }) => {
           if (data.name) {
              setCharacter(data);
              setLoading(false);
           } else {
              window.alert('No hay personajes con ese ID');
           }
        });
        return setCharacter({});
     }, [id]);

     const {name, image, status, species, gender, origin,location} = character
    
    return loading? (

      <h1>Loading...</h1>) : (

         <div className={styles.container}>
            <h1 className={styles.titulo}>{info.detail.title[i]}</h1>
            <div className={styles.Card}>
               <div>               
                <img className={styles.imageChar} src={image} alt='' /> 
                {i === 0 ? <h2 className={styles.fontDecor}>{name} with id# {id}</h2>:<h2 className={styles.fontDecor}>{name} con identificación No. {id}</h2>}
               </div>
               <div className={styles.others}>

               {status === "unknown" && <h2 className={styles.strange}>{info.detail.statUk[i]}</h2>}
               {status === "Alive" && <h2 className={styles.normal}>{info.detail.statAli[i]}</h2>}
               {status === "Dead" && <h2 className={styles.normal}>{info.detail.statDead[i]}</h2>}                    
               
               {species === "Human" && <h2 className={styles.normal}>{info.detail.specHuman[i]}</h2>}
               {species === "Alien" && <h2 className={styles.normal}>{info.detail.specAlien[i]}</h2>}
               {species === "Robot" && <h2 className={styles.normal}>{info.detail.specRob[i]}</h2>}         

                {gender === "unknown" && <h2 className={styles.strange}>{info.detail.genUk[i]}</h2>}
                {gender === "Male" && <h2 className={styles.normal}>{info.detail.genMale[i]}</h2>}
                {gender === "Female" && <h2 className={styles.normal}>{info.detail.genFem[i]}</h2>}
                {gender === "Genderless" && <h2 className={styles.strange}>{info.detail.genLess[i]}</h2>}

               {origin.name && origin.name !== "unknown" && 
                (<h2 className={styles.normal}>{info.detail.origin[i]} "{origin.name}".</h2>)}
                <h2 className={styles.normal}>{info.detail.location1[i]}"{name}"{info.detail.location2[i]}"{location.name}"</h2> 
                

               </div> 
        </div> 

            
      </div>        
                   
        )
}