const income = document.querySelector('.incomes>.cash')
const exp = document.querySelector('.exp>.cash')
const payment = document.querySelector('.money>.cash')
const dModeBtn = document.querySelector('.dmode')
// buttons section
const addTransactionBtn = document.querySelector('.buttons>.add')
const deleteAllBtn = document.querySelector('.buttons>.del')
// popup
const popup = document.querySelector('.popup')
const popupAddBtn = document.querySelector('.popup>.add')
const popupCloseBtn = document.querySelector('.popup>.del')
const errorInfo = document.querySelector('.errorInfo')
// history section
const history = document.querySelector('.history')
const money=[];
const exps = [];

// dark mode 
const darkMode = () =>{
    document.body.classList.toggle('dark-mode')
    document.body.querySelectorAll('*').forEach(element => {
        element.classList.toggle('dark-mode')
    })
    if(document.body.classList.contains('dark-mode')){
        dModeBtn.innerHTML='<i class="fa-solid fa-moon"></i>'
    }else{
        dModeBtn.innerHTML='<i class="fa-solid fa-sun"></i>'
    }
}
// popup open and close functions
const openPopup = () =>{
    popup.classList.add('active')
}
const closePopup =() =>{
    popup.classList.remove('active')
}
let res = 0
    let expSum = 0
const addTransaction = () =>{
    const popupValue = document.querySelector('.popup>#val')
    const popupCategory = document.querySelector('.popup>#category')
    console.log(popupCategory)
    console.log(popupValue)

    if(popupCategory.value==='payment'){
        money.push(Number(popupValue.value))
        res = money.reduce( (a,b) => a + b)
        income.textContent = `${res} $`
        payment.textContent = `${res} $`
    }
    else{
        exps.push(Number(popupValue.value))
        expSum = exps.reduce((a,b)=>a+b)
        exp.textContent = `-${expSum} $`
        payment.textContent = `${res - expSum} $`   
    }
    popup.classList.remove('active')
    
}


dModeBtn.addEventListener('click',darkMode)
addTransactionBtn.addEventListener('click',openPopup)
popupCloseBtn.addEventListener('click', closePopup)
popupAddBtn.addEventListener('click', addTransaction)