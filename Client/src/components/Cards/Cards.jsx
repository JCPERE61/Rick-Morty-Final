import React from 'react';
import Card from '../Card/Card';
import styles from './Cards.module.css';

export default function Cards({i,characters,onClose}) {

    return (
   <>
   <div className={styles.various}>
               {i===0 ? <p>Please click on underlined name to see more character details</p>:<p>Favor haga "click" en el nombre subrayado para mas detalles del personaje</p>}
      </div> 
   <div className={styles.allCards}>
        
      {characters.map (({id, name, status, species, gender, origin, image}) => {
         return (
            <Card 
               key={id}
               id={id}
               name={name}
               status={status}
               species={species}
               gender={gender}
               origin={origin.name}
               image={image}
               onClose={onClose}
            />
            )
      }
      )}
   </div>
   </>);
}