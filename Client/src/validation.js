const regexEmail = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;


export default function validation (userData) {
    let errors = {};

    // Chequeo de errores del Correo Electrónico

    if(!userData.email.length) {
      errors.email = "Correo Electrónico no puede estar vacío";}
    if(!regexEmail.test(userData.email)) {
      errors.email = "Debe ser un correo electrónico";}
    if(userData.email.length > 35) {
      errors.email = "El Correo Electrónico no puede tener mas de 35 caracteres";}

    // Chequeo de errores de la Contraseña

  if(!userData.password.length) {
        errors.password = "La Contraseña no puede estar en blanco";} 
        
        else {
            /* if (!/^{6,10}$/.test(userData.password)){
                    errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres"} 
                
            if (![0-9].test(userData.password)){
                    errors.password = "La contraseña tiene que tener al menos un número"} */
            let count1 = 0; // Cuenta los números que hay
            let count2 = 0; // Cuenta cuantos caracteres hay

            for (let i=0;i<userData.password.length;i++){

                if(isNaN(userData.password[i])) {count1++}
                count2++

                }
            if (count1 = 0) {
                errors.password = "La contraseña tiene que tener al menos un número"} 

            if (count2 < 6 || count2 > 10) {
                errors.password = "La contraseña debe tener una longitud entre 6 y 10 caracteres"} 
            
            }
         
    return errors;
    
  }