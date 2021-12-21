import {useState,useEffect} from 'react';
import axios from 'axios';
import {toast} from "react-toastify";

const API_URL='https://portfoliocreater-backend.herokuapp.com/api/login';
const useLoginForm = (validate,props) => {
   
    const [values,setValues] = useState({
        email:"",
        password:""
    });
    const [errors,setErrors]=useState({});
    const [submit,SetSubmit]=useState(false);


const handleChange= e =>{
        const {name,value}=e.target;
        setValues({
            ...values,
            [name]:value
        });
    };
const handleSubmit=async(e)=>{
    e.preventDefault();
   
    setErrors(validate(values));
    SetSubmit(true);
    
}
useEffect(() => {
    if(Object.keys(errors).length===0 && submit){
        axios.post(API_URL,{
        email:values.email,
        password:values.password
    })
    .then(res=>{
        localStorage.setItem('auth',JSON.stringify(res.data))
        props.history.push('/portfolioForm');

    })
    .catch(err =>{
         toast.error("Email or password invalid");
         console.log(err)
    })
    }
}, [errors])// eslint-disable-line react-hooks/exhaustive-deps
return {handleChange,values,handleSubmit,errors};
}

export default useLoginForm;
