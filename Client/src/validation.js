const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
const regexNumber = /^(?:[0-9]+[a-z]|[a-z]+[0-9])[a-z0-9]*$/i;
const regexpassword = /^(?=\w*\d)\S{6,10}$/;

export default function validation (userData) {

    const valida = [false,false,false,false,false,false]
    

    // Chequeo de errores del Correo Electrónico

    if(userData.email.length > 0) {
      valida[0] = true;}
    if(regexEmail.test(userData.email)) {
      valida[1] = true;}
    if(userData.email.length <= 35) {
      valida[2] = true;}

    // Chequeo de errores de la Contraseña

    if(userData.password.length > 0) {valida[3] = true;} 
        
    valida[4] = regexNumber.test(userData.password) 

    valida[5] = regexpassword.test(userData.password)
            
  return valida;
    
  }