import axios from "axios";
import { useParams } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import styles from './Detail.module.css';

export default function Detail() {

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

         <div>
            <h1>Character's detail</h1>
            <div className={styles.Card}>
               <div>               
                <img className={styles.imageChar} src={image} alt='' /> 
                <h1>{name}</h1>
               </div>
               <div className={styles.others}>
               {status !== "unknown" ?<h2>Status: {status}</h2>:<h2 className={styles.strange}>Character could be alive or dead, but nobody knows</h2>}
                <h2>Specie: {species}</h2>
                {gender !== "unknown" ? <h2> Gender: {gender}</h2>:<h2 className={styles.strange}>Character could be Male, Female or with no gender, but nobody knows</h2>}
                {origin.name && origin.name !== "unknown" && 
                ( <h2>Character comes from "{origin.name}". At this time, is living in "{location.name}"</h2> )}
                <h2>Some Episodes: </h2>

               </div> 
        </div> 

            
      </div>        
                   
        )
}