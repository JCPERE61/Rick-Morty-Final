const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
   sequelize.define('User', {
    id:{
        type:DataTypes.INTEGER,
        allowNull:false,
        primaryKey:true,
        autoIncrement:true,

   // UUID Crea un dato aleatorio para el id y 
   // se coloca el defaultValue en UUID4 hace unos caracteres especiales
   // Otra opcion es INTEGER con autoincrement: true
   
     },
     email:{
        type:DataTypes.STRING,
        unique: true,
        allowNull:false,
        isEmail:true,
     },
     password: {
        type:DataTypes.STRING,
        allowNull:false,
     }
   }, { timestamps: false });
};