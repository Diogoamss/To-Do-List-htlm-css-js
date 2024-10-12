const localStorageKey = 'to-do-list-gn'

function validateIfExistNewTask(){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let inputValue = document.getElementById("input-new-task").value
    let exists = values.find(x => x.name == inputValue)
    return !exists ? false : true
}

function addtesk(){

    let input = document.getElementById("input-new-task");
    input.style.border = ''


    if(!input.value){
        input.style.border = '1px solid red'
        alert("Digite algo para enserir em sua lista!")
    }
    else if (validateIfExistNewTask()){
        input.style.border = '1px solid red'
        alert("já existe uma tarefa com essa descrição")
    }
    else
    {
        // increment to localStorage
        let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageKey,JSON.stringify(values))
        showValues()
    }
    input.value = ''
}   

function showValues()
{
    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')
    list.innerHTML = ''
    for(let i = 0; i < values.length; i++){

        list.innerHTML += `<li>${values[i] ['name']} <button id='btn-ok' onclick='removeItem("${values[i] ['name']}")' ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16"><path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0"/></svg></button></li>`
    }
}

function removeItem(data){

    let values = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = values.findIndex(x => x.name == data)
    values.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(values))
    showValues()
}

showValues()