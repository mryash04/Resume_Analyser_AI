function calculateTax(income) {

let tax = 0;

if (income <= 250000) {
tax = 0;
} 
else if (income <= 500000) {
tax = income * 0.05;
}
else if (income <= 1000000) {
tax = income * 0.20;
}
else {
tax = income * 0.30;
}

return {
income,
tax,
net_income: income - tax
};

}

module.exports = { calculateTax };