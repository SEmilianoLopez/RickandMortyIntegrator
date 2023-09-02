const validation = (userData) =>{
    const errors = {};

    if(!/\S+@\S+\.\S+/.test(userData.email)){

        errors.email = 'El mail ingresado no es valido';
    }
    if(!userData.email){
        errors.email = 'Debe ingresar un email';
    }
    if(userData.email.length > 35){
        errors.email = 'El email debe tener menos de 35 caracteres';
    }
    if(!/.*\d+.*/.test(userData.password)){
        errors.password= 'La contraseña debe contener al menos un numero';
    }
    if(userData.password.length < 6 || userData.password.length > 10){
        errors.password = 'La contraseña debe tener entre menos de 6 y mas de 10 caracteres';
    }

    return errors;

}

export default validation;