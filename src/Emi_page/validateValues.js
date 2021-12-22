export default function validateValues(values){
    let errors={}
    if(!values.loanAmount){
        errors.loanAmount="Enter the Loan Amount"
    }else if(values.loanAmount==0){
        errors.loanAmount = "Enter Non Decimal Value"
    }

    if(!values.interest){
        errors.interest = "Enter the interest value"
    }

    if(!values.month){
        errors.month="Enter the period"
    }else if((values.month)== 0){
        errors.month = "Enter Non Decimal Value"
    }

    return errors;
}

