const {User} = require ('../DB_connection');

async function postUser (req,res) {

    const { email,password } = req.body;

    if(!email || !password) {
        return res.status(400).json({error: "Faltan datos"})
    } else {

        try {
        const [user, created] = await User.findOrCreate({
            where: { email},
            defaults: {
                password,
            }
            });

            if(!created){
                return res.status(409).json({error: "email already exists"})
            }

            return res.status(201).json(user); 
        }  
        catch (error) {
            return res.status(500).json({error:error.message})
    }
    
    }

};

module.exports = postUser;
