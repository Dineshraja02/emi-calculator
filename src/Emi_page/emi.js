import "./emi.css";
import React from 'react'
import validateValues from "./validateValues"
import useEmicalcform from "./useEmicalcform";


const Emi = () => {
    const {values,handleChange,handleSubmit,errors,emiDetails}=useEmicalcform(validateValues);
    return (
       <div className="emiPage" >
           <div className="navbar">
               <h2>EMI CALCULATOR</h2>
           </div>
           <form className="emiPage_Form" onSubmit={handleSubmit}>
                <input type="number" 
                name="loanAmount"
                className="emipage_Inputs"
                placeholder="Loan Amount" 
                value={values.loanAmount}
                onChange={handleChange}
                />
                <input type="number" 
                name="interest"
                className="emipage_Inputs"
                placeholder="Interest" 
                value={values.interest}
                onChange={handleChange}
                />
                <input type="number" 
                name="month"
                className="emipage_Inputs"
                placeholder="Months" 
                value={values.month}
                onChange={handleChange}
                />
                <button 
                className="emiPage_SubmitButton" 
                type="submit">Calculate</button>
           </form>

       </div>
    )
}

export default Emi;
