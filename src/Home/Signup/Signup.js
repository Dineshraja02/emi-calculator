import React from 'react';
import useForm from "./useForm";
import validate from './validateInfo';
import "./Signup.css";

const SignUp = (props) => {
    const {values,handleChange,handleSubmit,errors}=useForm(validate,props);
    return (
        <div className="background">
        <div className= "signup__form">
            <div className="signup__Form__content">
                <form className="signup__Form" onSubmit={handleSubmit}>
                <h1 className="signup_header">EMI CALCULATOR</h1> 
                    <h1>SignUp</h1>
                    <div className="signup__FormInputs">
                            <input 
                            id="name"
                            type="text"
                            name='name'
                            className="signup__FormInputs"
                            placeholder="Name"
                            value={values.name}
                            onChange={handleChange}
                            />
                            {errors.name && <p>{errors.name}</p>}
                    </div>
                    <br/>
                    <div className="signup__FormInputs">
                           <input 
                            id="email"
                            type="email"
                            name='email'
                            className="signup__FormInputs"
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                    </div>
                    <br/>
                    <div className="signup__FormInputs">
                       <input 
                            id="password"
                            type="password"
                            name='password'
                            className="signup__FormInputs"
                            placeholder="Password"
                            value={values.password}
                            onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                    </div>
                    <br/>
                    <div className="signup__FormInputs">
                           <input 
                            id="password2"
                            type="password"
                            name='password2'
                            className="signup__FormInputs"
                            placeholder="Password"
                            value={values.password2}
                            onChange={handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <br/>
                    <button className="signup__FormButton" 
                    type="submit">
                    Signup
                    </button>
                    <br/>
                    <span className="signup__Formlogintag">
                        Already have an account? <button  onClick={()=>{
                    props.history.push("/login");}} >click here</button>
                    </span>
                </form>
            </div>
        </div>
        </div>
    )
}

export default SignUp;
