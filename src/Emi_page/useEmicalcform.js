import {useState, useEffect} from 'react';
import emicalc from './emicalc';
import axios from 'axios';

const API_URL='http://localhost:3001/data/history';
const useEmicalcform = (validateValues) => {
   
    const [values,setValues] = useState({
        loanAmount:"",
        interest:"",
        month:"",
    });
    const [errors,setErrors]=useState({});
    const [emiDetails, setEmiDetails]=useState([]);
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
    setErrors(validateValues(values));
    if(Object.keys(errors).length===0){
     setEmiDetails(emicalc(values));
     SetSubmit(true);
    }
}

const viewDetails = (values) =>{
    setValues((values))
    emicalc(values)
}

useEffect(() => {
    if(Object.keys(errors).length===0 && submit){
        axios.post(API_URL,{
        loanAmount: values.loanAmount,
        interest : values.interest,
        month : values.month   
    },{headers:{'auth':`${sessionStorage.getItem('auth')}`}})
    .then(res=>{
        console.log(res.data);
        setValues({});
    })
    .catch(err =>{
         console.log(err)
    })
    }
}, [errors])// eslint-disable-line react-hooks/exhaustive-deps

return {handleChange,values,handleSubmit,errors,emiDetails,viewDetails};
}

export default useEmicalcform;
