
import Card from '../Card/Card';
import { CardsContainer } from './styledComponents';

export default function Cards({ characters, onClose }) {

   return (
   <CardsContainer>
       {
         characters.map(({id, name, status, species,gender, origin, image})=> {
            return(
               <Card
                  key = {id}
                  id = {id}
                  name ={name}
                  status = {status}
                  species = {species}
                  gender = {gender}
                  origin = {origin}
                  image = {image}
                  onClose = {onClose}
                  />
            )
         })
       }     
   </CardsContainer>
   )
            
}
         
 
 
 
 
 
 
 
 
 
 
 
 
 

/* characters.map((character) =>{ 
     return ( 
        <Card 
 key={character.id} 
    name= {character.name} 
    species= {character.species}   
    gender= {character.gender} 
   image= {character.image} 
    onClose= {()=> window.alert ("Emulamos que se cierra la card")
     ) */