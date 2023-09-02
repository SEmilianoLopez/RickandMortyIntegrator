import './App.css';
import Cards from './components/Cards/Cards.jsx';
import Nav from './components/Nav/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail/Detail';
import Favorites from './components/Favorites/Favorites';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import Form from './components/Form/Form';




const email = "emilopez197@gmail.com";
const password = "emiliano1";
const URL = 'http://localhost:3001/rickandmorty/login/';

function App() {
   const location = useLocation();
   const navigate = useNavigate();
   const [characters, setCharacters] = useState([]);
   const [access, setAccess] = useState(false);
   // const key = `henrym-semilianolopez`


   const login = async (userData) => {

      try {
         const { email, password } = userData;
         const { data } = await axios(URL + `?email=${email}&password=${password}`)
         const { access } = data;
         
         setAccess(access);
         access && navigate('/home');
         

      } catch (error) {
         
      }
   }

   useEffect(() => {
      !access && navigate('/');
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [access]);
 

   const onSearch =  async (id) => {
      try {
         const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`)
         
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          };
          
      } catch (error) {
         alert('¡No hay personajes con este ID!');
      }

   }

   const onClose = (id) => {
       const charactersFiltered = characters.filter(characters =>
         characters.id !== Number(id))
         setCharacters(charactersFiltered)
   }

   
   
   
   return (
      <div className='App'>
         {
            location.pathname !== '/'
            ?  <Nav onSearch={onSearch} />
            : null
            // Podemos usar "location.pathname !== '/' &&  <Nav onSearch={onSearch} />" y llegar al mismo resultado 
         }
         
         <Routes>
            <Route path='/' element={<Form login={login}/>}/>
            <Route path = '/home' element={<Cards characters={characters} onClose ={onClose} />}/>
            <Route path='/about' element ={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites'  element={<Favorites/>}/>
         </Routes>
         
      </div>
   );
}


    
export default App;

// http://localhost:3000/