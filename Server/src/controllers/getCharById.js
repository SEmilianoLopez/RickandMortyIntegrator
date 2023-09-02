const { error } = require("console");

const URL =  "https://rickandmortyapi.com/api/character/"
const axios = ('axios')

const  getChardById = async (req, res)=>{
    try{
        const { id } = req.params;
        const { data } = await axios(`${URL}/${od}`)
        
        
        
             if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`)

                const character ={
                    id: data.id,
                    name: data.name,
                    species: data.species,
                    origin: data.origin,
                    image: data.image,
                    gender: data.gender,
                    status: data.status,
                }
                return res.status(200).Json(character)  
                // return res.status(404).send('Not found');

    } catch (error){
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error)

    }
}


module.exports={
    getChardById
};