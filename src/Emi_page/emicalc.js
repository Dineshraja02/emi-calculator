export default function emicalc(values){
    let emiDetails = [];
    let details ={};
    const {loanAmount, interest, month} = values;
    const monthInterest = parseFloat((interest/12)/100);
    const a = (Math.pow((1+monthInterest),month))
    let emiPerMonth = ((loanAmount*monthInterest*a)/(a-1)) ;
    emiPerMonth = emiPerMonth.toFixed(2);
    let totalPayment = emiPerMonth*month;
    totalPayment = totalPayment.toFixed(2);
    let totalInterest = totalPayment-loanAmount;
    totalInterest = totalInterest.toFixed(2)
    console.log(totalInterest)
    let balance = parseInt(loanAmount) 
    for(let i=0;i<month;i++){
        let monthInterestAmount = (balance*monthInterest);
        monthInterestAmount = monthInterestAmount.toFixed(2);
        let principal = emiPerMonth-monthInterestAmount;
        principal = principal.toFixed(2);
        if(i !== (month-1)){
            balance = balance - principal;
            balance = balance.toFixed(2);
        }else{
            balance = 0;
        }
        details ={balance,monthInterestAmount,principal}
        emiDetails[i]=details;
    }
    return emiDetails;
}

