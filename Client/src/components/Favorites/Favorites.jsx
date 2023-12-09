import React, {useState} from "react";
import { useSelector,  useDispatch} from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";
import Cards from "../Cards/Cards";
import styles from './Favorites.module.css';

const Favorites = ({i}) => {

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

        <div className={styles.filter}>
            <select name="" id="" onChange={handlerFilter}>
                <option value="Todos">All</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Genderless">Genderless</option>
                <option value="unknown">unknown</option>
            </select>
        </div>
        </div> 

        <Cards i={i} characters={myFavorites}/>           
   
    </>)
}

export default Favorites;
