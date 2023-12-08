const {Favorite} = require ('../DB_connection')

const deleteFav = async (req,res) => {
    
    const {id} = req.params;

    try{

        if(!id) {
            return res.status(401).json({ error: "No ID entered"});
        }

        const idSearch = await Favorite.findByPk(Number(id));

        if(idSearch) {
            await Favorite.destroy({
            where: {id}
                })
            }
            
        const charsFavs = await Favorite.findAll();

        return res.status(200).json(charsFavs)

    }
    catch(error) {
        res.status(500).json({error:error.message})
    }

}

module.exports = deleteFav