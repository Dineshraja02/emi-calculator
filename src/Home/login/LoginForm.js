import React from 'react';
import useLoginForm from './useLoginForm';
import validate from "./validate";
import "./login.css"


const LoginForm = (props) => {
    const {values,handleChange,handleSubmit,errors}=useLoginForm(validate,props);
    return (
        <div className="background" >
        <div className= "login__form">
            <div className="login__Form__content">
                <form className="login__Form" onSubmit={handleSubmit}>
                <h1 className="login_header">PORTFOLIO CREATER</h1> 
                    <h1>login</h1>
                    <div className="login__FormInputs">
                            <input 
                            id="email"
                            type="email"
                            name='email'
                            className="login__FormInputs"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                    </div>
                    <br/>
                    <div className="login__FormInputs">
                       <input 
                            id="password"
                            type="password"
                            name='password'
                            className="login__FormInputs"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            />
                             {errors.password && <p>{errors.password}</p>}
                            
                    </div>
                    <br/>
                    <button className="login__FormButton" 
                    type="submit">
                    login
                    </button>
                    <br/>
                    <span className="login__Formlogintag">
                        Already have an account? 
                        <button type="button" onClick={()=>{
                    props.history.push("/Register");}}>click here</button>
                  
                    </span>
                </form>
            </div>
        </div>
        </div>
    )
}

export default LoginForm;
