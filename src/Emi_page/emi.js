import {useState, useEffect} from 'react';
import "./emi.css";
import React from 'react'
import validateValues from "./validateValues";
import axios from 'axios';
import useEmicalcform from "./useEmicalcform";


const Emi = () => {
    
    const [info,setInfo]=useState([]);
    const getInfo= async () =>{
        try{
          const res = await axios.get('https://emi-calcu.herokuapp.com/data/searchHistory',
          {headers:
              {'auth':`${sessionStorage.getItem('auth')}`}});
              setInfo(res.data);
        }catch(err){
             console.log(err);
        }
    }
       useEffect(()=>{
      getInfo();
    },[])// eslint-disable-line react-hooks/exhaustive-deps


    const {values,handleChange,handleSubmit,errors,emiDetails,viewDetails}=useEmicalcform(validateValues);
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
            <div className="searchHistory">
            {(()=>{
               if(info.length !==0) {
                return(               
                <>     
               <h4>Recent Searches</h4>
               <table className="emi_Table">
                <tr className="table_Header">
                <th>S.No</th>
                <th>loanAmount</th>
                <th>Interest</th>
                <th>Month</th>
                </tr>
                {info.map((data,index)=>{
                 return(
                <>
                <tr key={index} className="table-Content">
                <th>{index+1}</th>
                <th>{data.loanAmount}</th>
                <th>{data.interest}</th>
                <th>{data.month}</th>
                </tr>
                <button onClick={()=>viewDetails(info[index])}>View details</button>
                </>
                 )})}
                </table>
                </>
)}})()}
           </div>
           </form>
           <div className="emiDetails">
               {(()=>{
               if(emiDetails.length !==0) {
                return(               
                <>   
               <h2 className="emiDetail_Heading"><b>EMI Details</b></h2>
               <p>Loan Amount:{emiDetails[0].loanAmount}</p>
               <p>Total Interest: {emiDetails[0].totalInterest}</p>
               <p>Total Payment : {emiDetails[0].totalPayment}</p>
               <p>EMI :{emiDetails[0].emiPerMonth}</p>
               <table className="emi_Table">
                <tr className="table_Header">
                <th>Month</th>
                <th>Principal</th>
                <th>Interest</th>
                <th>Balance</th>
                </tr>
                {emiDetails.map((emi,index)=>{
                 return(
                <tr key={index} className="table-Content">
                <th>{index+1}</th>
                <th>{emi.principal}</th>
                <th>{emi.monthInterestAmount}</th>
                <th>{emi.balance}</th>
                </tr>
                 )})}
                </table>
                </>
)}})()}
           </div>
           </div>
       </div>
    )
}

export default Emi;
