export default function validateValues(values){
    values.loanAmount=parseInt(values.loanAmount)
    values.month=parseInt(values.month)
    let errors={}
    if(!values.loanAmount){
        errors.loanAmount="Enter the Loan Amount"
    }else if(values.loanAmount<100){
        errors.loanAmount = "Enter greater than 100"
    }


    if(!values.interest){
        errors.interest = "Enter the interest value"
    }
    if(!values.month){
        errors.month="Enter the period"
    }else if(values.month<=0){
        errors.month = "Enter valid Month"
    }

    return errors;
}

