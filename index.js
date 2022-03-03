const currOne = document.querySelector('#curr-one')
const currTwo = document.querySelector('#curr-two')
const amountOne = document.querySelector('.am1')
const amountTwo = document.querySelector('.am2')
const swapBtn = document.querySelector('.swap')
const rateInfo = document.querySelector('.rate-info')

const API_KEY = 'a9ee0b32938a467e19442f28'
const API_LINK = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/PLN`

const calculate = () =>{
    fetch(API_LINK)
    .then(res=> res.json())
    .then(data=>{
        // currOne.value=data.base_code
        const currency1 = currOne.value;
        const currency2 = currTwo.value;

        const rate = data.conversion_rates[currency2];
        rateInfo.textContent=`1 ${currency1} = ${rate.toFixed(2)} ${currency2}`
        amountTwo.value = (amountOne.value * rate).toFixed(2)
    })
}
const swap = () =>{
    const temp = currOne.value
    currOne.value = currTwo.value
    currTwo.value = temp
    calculate()
}

currOne.addEventListener('change',calculate)
currTwo.addEventListener('change',calculate)
amountOne.addEventListener('input',calculate)
swapBtn.addEventListener('click',swap)
calculate()