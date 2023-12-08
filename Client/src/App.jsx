import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import Form from './components/Form/Form';
import Favorites from './components/Favorites/Favorites';
import { removeFav } from './redux/actions';


function App() {

   const [characters,setCharacters] = useState([]);

   // Creado estado que guarda los caracteres ya agregados para control de que 
   // no se repitan

   const[hecho,setHecho] = useState([]);

   // Estado del acceso a /home
   const [access,setAccess] = useState(false);

   const navigate = useNavigate();

async function login(userData) {

   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);         
      access && navigate('/home');

   } catch (error) {
      alert("Datos incorrectos")
   }
   
   };   

   function logout() {
      setAccess(false);
         navigate('/');

   }

   useEffect(() => {
      !access && navigate('/');
   }, [access]); 

   
   const onSearch = async (id) => {

      try {
         const { data } = await axios.get(`http://localhost:3001/rickandmorty/character/${id}`)
         
         if(!hecho.includes(id)){
            setCharacters((oldChars) => [...oldChars, data]);
            setHecho([...hecho,id]);
         } else 
         {window.alert('¡Ya se ha mostrado personaje con este ID!')}
      }
      catch (error){
         alert('No existe personaje con ese ID')
         }
   }

   const dispatch = useDispatch();

   const onClose = (id) =>{

      console.log('personajes',characters);
      console.log('ids',hecho);
      


      const filterChar = characters.filter(character=> Number(id) !== character.id);
      const filterHecho = hecho.filter(ident=>Number(id) !== Number(ident));
      setCharacters(filterChar);
      setHecho(filterHecho);
      dispatch(removeFav(id));
   };

  

   const location = useLocation();
   const path = location.pathname;
   
   return (
      <div className='App'>

            {(path !== '/') && <Nav onSearch={onSearch} logout={logout}/>}
            <Routes>
               <Route path='/' element={<Form login={login}/>} />;
               <Route path='/home' element={<Cards characters={characters} onClose={onClose} /> } />;
               <Route path='/about' element={<About />} />;
               <Route path='/detail/:id' element={<Detail />} />;
               <Route path='/favorites' element={<Favorites onClose={onClose}/>} />;
            </Routes>
      </div>
   );
}

export default App;