const calculateBtnEl = document.getElementById("calculate");
const billInputEl= document.getElementById("bill_amount");
const tipInputEl = document.getElementById("tip_percentage")
const totalSpanEl = document.getElementById("total")

function calculateTotalBill(){
const billValue = billInputEl.value;
const tipValue = tipInputEl.value;
const totalValue = billValue * (1+ tipValue / 100);
totalSpanEl.innerText = `${totalValue.toFixed(2)}$`;
}

calculateBtnEl.addEventListener("click", calculateTotalBill)