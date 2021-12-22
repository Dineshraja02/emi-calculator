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
           <div className="emiPage_Container">
           <form className="emiPage_Form" onSubmit={handleSubmit}>
                <h3 className="emiForm_Heading">Loan Details</h3>
                <input type="number" 
                name="loanAmount"
                className="emipage_Inputs"
                placeholder="Loan Amount" 
                value={values.loanAmount}
                onChange={handleChange}
                />
                {errors.loanAmount && <p>{errors.loanAmount}</p>}
                <input type="number" 
                name="interest"
                className="emipage_Inputs"
                placeholder="Interest" 
                value={values.interest}
                onChange={handleChange}
                />
                {errors.interest && <p>{errors.interest}</p>}
                <input type="number" 
                name="month"
                className="emipage_Inputs"
                placeholder="Periods in Months" 
                value={values.month}
                onChange={handleChange}
                />
                {errors.month && <p>{errors.month}</p>}
                <button 
                className="emiPage_SubmitButton" 
                type="submit">Calculate</button>
           </form>
           <div className="emiDetails">
               <h3 className="emiDetail_Heading">EMI Details</h3>
               <table className="emi_Table">
                <tr className="table_Header">
                <th>Month</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
                </tr>
                {emiDetails.map((emi,index)=>{
                 return(
                <tr key={index}>
                <th>{index+1}</th>
                <th>{emi.principal}</th>
                <th>{emi.monthInterestAmount}</th>
                <th>{emi.balance}</th>
                </tr>
                 )})}
                </table>
           </div>
           </div>
       </div>
    )
}

export default Emi;
