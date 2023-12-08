import React, {useState} from "react";
import { useSelector,  useDispatch} from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Card from "../Card/Card";
import styles from './Favorites.module.css';

const Favorites = ({onClose}) => {

    const myFavorites = useSelector ((state) => state.myFavorites);
    const dispatch = useDispatch();

    const handlerOrder = (event) => {
        const order = event.target.value;
        dispatch(orderCards(order))
     }

    const handlerFilter = (event) => {
        const filter = event.target.value;
        dispatch(filterCards(filter))
    }

return (
    <>
     <div className={styles.selectors}>

        <div className={styles.order}>
            <select name="" id=" " onChange={handlerOrder}>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
            </select>
        </div>

        <div className={styles.order}>
            <select name="" id="" onChange={handlerFilter}>
                <option value="Todos">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>

        <div className={styles.boton}><button >Mostrar</button></div> 

    </div> 

    <div className={styles.allCards}>
        {myFavorites.map (({id, name, status, species, gender, origin, image}) => {
        return (
            <Card 
                key={id}
                id={id}
                name={name}
                status={status}
                species={species}
                gender={gender}
                image={image}
                onClose={onClose}
            />)
            })
        }            
    </div> 
     
    </>)
}

export default Favorites;
