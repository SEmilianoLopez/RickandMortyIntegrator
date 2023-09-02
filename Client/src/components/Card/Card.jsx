import style from "./Card.module.css"
import { Link } from "react-router-dom";
import {addFav, removeFav} from "../../Redux/Action"
import { connect } from "react-redux";
import { useState, useEffect } from "react";


 function Card({id, name, status, species,gender, image, onClose, addFav, removeFav,myFavorites}) {
   
   const [isFav, setIsFav] = useState (false);

   const handleFavorite = () =>{
      if(isFav){
         setIsFav(false);
         removeFav(id);
      }
      else{
         setIsFav(true)
         addFav({id, name, species,gender, image})
      }
   }


   useEffect(() => {
      myFavorites.forEach((fav) => {
         if (fav.id === id) {
            setIsFav(true);
         }
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [myFavorites]);
   
   
   return (
      <div className={style.container}> 
    
         <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
         <button onClick={() =>onClose(id)}>X</button>
         <img src={image} alt='' />
         <Link to={`/detail/${id}`}>
         <h2>{name}</h2>
         </Link>
         <h2>{status}</h2>
         <h2>{species}</h2>
         <h2>{gender}</h2>
         
      </div>
   );
}

const mapStateToProps = (state) =>{
   return{
      myFavorites: state.myFavorites
   }

}


const mapDispatchToProps = (dispatch)=>{
   return{
      addFav: (character) =>{ dispatch(addFav( character))},
      removeFav: (id) => {dispatch(removeFav(id))}
   }
}

export default connect(
   mapStateToProps,
   mapDispatchToProps
)(Card);



// {/* <script
//   crossorigin
//   src="https://unpkg.com/react@16/umd/react.development.js"
// ></script>
// <script
//   crossorigin
//   src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"
// ></script>
// <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>
// <script type="text/babel">
//   ...
// </script> */}


