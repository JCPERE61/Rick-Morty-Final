import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import './App.css';
import { useDispatch } from 'react-redux';
import About from './components/About/About';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import { removeFav } from './redux/actions';
import Language from './Language.jsx';

function App() {

//
   const [characters,setCharacters] = useState([]);

// Creado estado que guarda los caracteres ya agregados para control de que 
// no se repitan
   const[hecho,setHecho] = useState([]);

// Estado del acceso a /home
   const [access,setAccess] = useState(false);

// Define lenguaje a usar
   const [lang,setLang]=useState(0);

//
   const navigate = useNavigate();

//

async function login(userData) {

   try {
      const { email, password } = userData;
      const URL = 'http://localhost:3001/rickandmorty/login/';

      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(access);         
      access && navigate('/home');

   } catch (error) {
      let respuesta=error.response.data.error.message;
      if(lang===0 && respuesta==="Contraseña incorrecta") {respuesta="Wrong Password"}
      if(lang===0 && respuesta==="Usuario no encontrado") {respuesta="User not found"}
      alert(respuesta);
   }
   
   };   

//

function logout() {
      setAccess(false);
         navigate('/');

   }
//

useEffect(() => {
      !access && navigate('/');
   }, [access]); 

//

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

//
   const dispatch = useDispatch();

//

const onClose = (id) =>{

      const filterChar = characters.filter(character=> Number(id) !== character.id);
      const filterHecho = hecho.filter(ident=>Number(id) !== Number(ident));
      setCharacters(filterChar);
      setHecho(filterHecho);
      dispatch(removeFav(id));
   };

// Define el idioma al hacer el click

  const handleEs = () => {setLang(1);clearContent()};
  const handleEn = () => setLang(0);

  
//
   const location = useLocation();
   const path = location.pathname;

// RENDERIZACION 
   
   return (   
      <div className='App'>
         {(path !== '/') && <Nav i={lang} onSearch={onSearch} logout={logout}/>}
            <Routes>
               <Route path='/' element={<Language handleEs={handleEs} handleEn={handleEn} login={login} i={lang} />}/>
               <Route path='/home' element={<Cards i={lang} characters={characters} onClose={onClose} /> } />;
               <Route path='/about' element={<About i={lang} />} />;
               <Route path='/detail/:id' element={<Detail i={lang}/>} />;
               <Route path='/favorites' element={<Favorites i={lang}/>} />;
            </Routes>
      </div>  
   );
}

export default App;