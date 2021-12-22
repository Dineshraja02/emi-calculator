import {useState} from 'react';
import emicalc from './emicalc';

const useEmicalcform = (validateValues) => {
   
    const [values,setValues] = useState({
        loanAmount:"",
        interest:"",
        month:"",
    });
    const [errors,setErrors]=useState({});
    const [emiDetails, setEmiDetails]=useState([]);


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
    }
}

return {handleChange,values,handleSubmit,errors,emiDetails};
}

export default useEmicalcform;
