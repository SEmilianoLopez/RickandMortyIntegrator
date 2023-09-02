import { useState } from "react";
import validation from "../Validation/Validation";

const Form = ({login}) => {

    const [errors, setErrors] = useState({})
    const[userData,setuserData] = useState({

        email: '',
        password: '',
    });

    const handleChange = (event) =>{
        setuserData({
            ...userData,
            [event.target.name]: event.target.value
        })
        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        login(userData);
    }
    

    return(
        <form onSubmit={handleSubmit}>
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" value={userData.email} onChange={handleChange} placeholder="ingrese su email"/>
            {errors.email && <p style={{color:'red'}}>{errors.email}</p>}
            <br/>
            <label htmlFor="password">Password:</label> 
            {errors.password && <p style={{color:'red'}}>{errors.password}</p>}
            <input type="password" name="password" value={userData.password} onChange={handleChange} placeholder="ingrese una password"/>
            <br/>
            <button>submit</button>
        </form>
    )
}

export default Form;