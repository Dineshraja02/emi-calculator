export default function validateValues(values){
    let errors={}
    
       if(!values.loanAmount){
        errors.name="Enter the Loan Amount"
    }

    return errors;
}

