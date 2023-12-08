const server= require ('./app');

const PORT = process.env.PORT || 3001;
const { conn } = require('./DB_connection');

// Colocar el {force:true} hace que se borren los datos

conn.sync()
   .then (()=> {
      server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})
.catch((err) => console.log(err));