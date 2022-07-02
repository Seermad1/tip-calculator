const bill = document.getElementById("bill")
const customTip = document.getElementById("custom_tip")
const numberOfPeople = document.getElementById("number_of_people")
const tips = document.querySelectorAll(".tip")
const tipAmount = document.getElementById("tip_amount")
const personBill = document.getElementById("person_bill")
const five = document.getElementById("five")
const ten = document.getElementById("ten")
const fifteen = document.getElementById("fifteen")
const twentyFive = document.getElementById("twenty_five")
const fifty = document.getElementById("fifty")
const errorMessage = document.getElementById("input")
const resetBtn = document.querySelector(".reset_btn")

let customTipPercent ;

function getVal(){
    let billValue = parseFloat(bill.value)
    
    

    if (customTip.value === ""){
        customTipPercent = parseFloat(customTipPercent);

    }else{
        customTipPercent = parseFloat(customTip.value) 
    }
    
   
    let people = parseFloat(numberOfPeople.value)
   
    
    let personsBill = ((customTipPercent/100)*billValue + billValue)/people
    let personsTip = (personsBill)-(billValue/people)

    if(Number.isNaN(personsBill) == true || Number.isNaN(personsTip) == true){
        personBill.innerHTML = `$0.00 `
        tipAmount.innerHTML = `$0.00 `
    }else{
        personBill.innerHTML = `$${personsBill.toFixed(2)}`
        tipAmount.innerHTML = `$${personsTip.toFixed(2)}`
    }

    resetBtn.addEventListener("click",()=>{
        billValue = 0
        customTipPercent = 0
        people = 0
        personBill.innerHTML = `$0.00 `
        tipAmount.innerHTML = `$0.00 `
        numberOfPeople.value = ""
        bill.value = ""
        customTip.value = ""
        removeActiveClasses()
    })
}

tips.forEach(tip => {
    tip.addEventListener('click', () => {
        removeActiveClasses()
        tip.classList.add('change')
    })
})

function removeActiveClasses() {
    tips.forEach(tip => {
        tip.classList.remove('change')
    })
}

five.addEventListener("click",()=>{
    customTipPercent = 5
    getVal()
})

ten.addEventListener("click",()=>{
    customTipPercent = 10
    getVal()
})

fifteen.addEventListener("click",()=>{
    customTipPercent = 15
    getVal()
})

twentyFive.addEventListener("click",()=>{
    customTipPercent = 25
    getVal()
})

fifty.addEventListener("click",()=>{
    customTipPercent = 25
    getVal()
})