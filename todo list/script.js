// To-Do list Made by: Jovicss

const addBtn = document.getElementById("save-btn")
const deleteBtn = document.getElementById("delete-btn")
const myList = JSON.parse( localStorage.getItem("myList") )
let inputValue = document.getElementById("input-el")
let ulList = document.getElementById("ul_list")
let toDoList = []

if (myList) {
    toDoList = myList
    renderValue()
}

addBtn.addEventListener('click', function () {
    toDoList.push(inputValue.value)
    inputValue.value = ""
    console.log(toDoList)
    localStorage.setItem("myList", JSON.stringify(toDoList))
    renderValue()
})

function renderValue() {
    let valueList = ""
    for (let i = 0; i < toDoList.length; i++) {
        valueList += `<li>${toDoList[i]}</li>`
    }
    ulList.innerHTML = valueList
}

deleteBtn.addEventListener('click', function () {
    toDoList = []
    ulList.innerHTML = ""
    localStorage.clear("myList")
})
