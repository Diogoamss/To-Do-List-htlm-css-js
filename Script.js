const localStorageName = 'to-do-list-gn'

function addtesk(){

    let input = document.getElementById("input-new-task");


    if(!input.value){

        alert("Digite algo para enserir em sua lista!")
    }
    //else if ()
    else{

        let values = JSON.parse(localStorage.getItem('localStorageName') || "[]");
        values.push({
            name: input.value
        })
        localStorage.setItem(localStorageName,JSON.stringify(values));
        showValues()
    }
}   

function showValues(){

    let values = JSON.parse(localStorage.getItem('localStorageName') || "[]");
    let list = document.getElementById('to-do-list');
    list.innerHTML = ''
    
    for(let i = 0; i < values.length; i++){
        list.innerHTML += `<li> ${values[i]['name']} </li>`
    }
}