const axios = require('axios');
const { API_URL,API_KEY } = process.env;

const getCharById = async (req,res) => {

    const id = Number(req.params.id);
    
    try {
        
    const {data} = await axios.get(`${API_URL}${id}?key=${API_KEY}`);

    const {name,status,gender,species,origin,location, image} = data;
    const character = {id,name,status,gender,species,origin, location, image}

    return character.name 
    ? res.status(200).json(character)
    : res.status(404).json({error:'Not found'});
       

    } catch(error) {
        return res.status(500).json({error:error.message});
    }

    
}   


module.exports = getCharById;