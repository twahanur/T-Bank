const loginBtn= document.getElementById("login");
loginBtn.addEventListener("click",function(){
    const loginArea = document.getElementById("login-area")
    loginArea.style.display = "none";
    const transitionArea = document.getElementById("transictionArea")
    transitionArea.style.display = "block";
    
});
// deposit button event handelar

const depositBtn = document.getElementById("adddeposit");
depositBtn.addEventListener("click", function(){
    const depositNumber = getInputNumber("depositAmount");
    updateSpanText("currentDeposit", depositNumber);
    updateSpanText("currentBlance", depositNumber);
    document.getElementById("depositAmount").value = "";

})


    // withdraw event
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function(){
   const withdrawNumber = getInputNumber("withdrawAmount");
    updateSpanText("currentWithdraw", withdrawNumber)
    updateSpanText("currentBlance", -1 * withdrawNumber);
    document.getElementById("withdrawAmount").value = "";
})
// get input number
function getInputNumber(id){
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    return inputNumber;
}


// span text update function
function updateSpanText(id, depositNumber){
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const totalAmount = currentNumber + depositNumber;
    document.getElementById(id).innerText = totalAmount;
}