import {useState, useEffect} from 'react';
import axios from 'axios';
import {toast} from "react-toastify";

const API_URL="https://portfoliocreater-backend.herokuapp.com/api/register";
const useForm = (validate,props) => {
    const [values,setValues] = useState({
        name:"",
        email:"",
        password:"",
        password2:"",
    });
    const [errors,setErrors]=useState({});
    const [submit,setSubmit]=useState(false);


const handleChange= e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
   
    };
const handleSubmit=async(e)=>{
    e.preventDefault();
    await setErrors( await validate(values));
    setSubmit(true);
    
}
useEffect(() => {
    if(Object.keys(errors).length===0 && submit){
        axios.post(API_URL,{
        name:values.name,
        email:values.email,
        password:values.password,
      
    })
    .then(res=>{
        props.history.push('/portfolioForm');
        console.log(res.data)
    })
    .catch(err =>{
        toast.error("Registration failed.Please check the Credentials");
    })
    }
}, [errors])// eslint-disable-line react-hooks/exhaustive-deps
return {handleChange,values,handleSubmit,errors};
}

export default useForm;
