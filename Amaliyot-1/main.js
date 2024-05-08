const input = document.querySelector('.input-box')
const add = document.querySelector('.add-btn')
const addCont = document.querySelector('.list-container')

function addTask(){
    if(input.value === ''){
        alert("Enter text")
    }
    else{
        let li = document.createElement('li')
        li.innerHTML = input.value
        addCont.appendChild(li)
        let span = document.createElement('span')
        span.innerHTML = "X"
        li.appendChild(span)
    }
    input.value = ''
    SaveData()
}

addCont.addEventListener( 'click', function(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked')
        SaveData()  
    }
    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove()
        SaveData()
    }
}, false)

function SaveData(){
    localStorage.setItem('data', addCont.innerHTML)
}

function showTask(){
    addCont.innerHTML = localStorage.getItem('data')
}
showTask()