const {User} = require ('../DB_connection');

const login = async (req,res) => {

    const {email,password} = req.query;   
    
    try {
        if(!email || !password) {
            return res.status(400).json({message:"Faltan datos"})};

        const user = await User.findOne({
                where: {
                    email
                }
            })

        if(!user){
                return res.status(404).json({error:{message:"Usuario no encontrado"}});
            }

                return user.password === password ?
                    res.status(200).json({access: true})
                    : res.status(403).json({error:{message:"Contraseña incorrecta"}})
                
            }
            catch (error){
                console.log({error})
            }        
             
        }

module.exports = login;