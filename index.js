const income = document.querySelector('.incomes>.cash>span')
const exp = document.querySelector('.exp>.cash>span')
const avbMoney = document.querySelector('.money>.cash>span')
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
const history = document.querySelector('.history>ul')
const group = document.querySelector('#category')

// adding and removing resources
const addResources = (val) => {
    income.textContent = Number(income.textContent) + Number(val)
    avbMoney.textContent = Number(avbMoney.textContent) + Number(val)
}
const removeResources = (val) => {
    exp.textContent = Number(exp.textContent) + Number(val)
    avbMoney.textContent = Number(avbMoney.textContent) - Number(val)
}
// transaction function
const transaction = () => {
    const tCategory = popup.querySelector('#category').value
    const popupVal = popup.querySelector('#val').value
    if (popupVal === '') {
        errorInfo.textContent = 'set value'
    }else if(popupVal!=0){
        errorInfo.textContent = ''
        tCategory === 'payment' ? addResources(popupVal) : removeResources(popupVal)
        popup.classList.remove('active')
        createRecord(tCategory, popupVal)
    }else{
        errorInfo.textContent='enter positive val'
    }
}
// adding record to the history
const createRecord = (cat, val) => {
    const newRecord = document.createElement('div')
    newRecord.classList.add('record')
    const transVal = document.createElement('p')
    const category = document.createElement('p')
    cat === 'payment' ? transVal.textContent = `${val}$` : transVal.textContent = `-${val}$`
    category.textContent = `${cat}`
    newRecord.append(transVal, category)
    newRecord.setAttribute('cat',cat)
    history.append(newRecord)
    // expences and incomes color 
    Number(avbMoney.textContent) <= 0 ? document.querySelector('.money>.cash').style.color = 'red' : document.querySelector('.money>.cash').style.color = 'green'
}
const groupExpenditures = () =>{
    const val = group.value
    const exps = history.querySelectorAll('.record')
    console.log(exps);
    console.log(val);
    exps.forEach(e=>{
        const recCat = e.getAttribute('cat')
        if(recCat===val){
            e.style.display='flex'
        }else if(val=='all'){
            e.style.display='flex'
        }else{
            e.style.display='none'
        }
    })
}
// delete method
const deleteAll = () => {
    history.innerHTML = ''
    exp.textContent = '0'
}
// dark mode 
const darkMode = () => {
    document.body.classList.toggle('dark-mode')
    document.body.querySelectorAll('*').forEach(element => {
        element.classList.toggle('dark-mode')
    })
    if (document.body.classList.contains('dark-mode')) {
        dModeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>'
    } else {
        dModeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>'
    }
}
// popup open and close functions
const openPopup = () => {
    popup.classList.add('active')
}
const closePopup = () => {
    popup.classList.remove('active')
}

dModeBtn.addEventListener('click', darkMode)
addTransactionBtn.addEventListener('click', openPopup)
popupCloseBtn.addEventListener('click', closePopup)
popupAddBtn.addEventListener('click', transaction)
deleteAllBtn.addEventListener('click', deleteAll)
group.addEventListener('change',groupExpenditures)