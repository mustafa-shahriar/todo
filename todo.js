let array=[];
console.log(document.querySelector('.dateOfInput').value);
function addToArray(){
    array.push({name:document.querySelector('#todoList').value , date:document.querySelector('.dateOfInput').value});

    document.querySelector('#todoList').value='';
    document.querySelector('.dateOfInput').value='';

    render();
}

function render(){
    let main ='';
    for(let i=0;i<array.length;i++){
        main+=`<p>${array[i].name}</p><p> ${array[i].date} </p>
        <button onclick="
        array.splice(${i},1);
        render();
        ">delet</button>
        `;
    }
    document.querySelector('.printOnScreen').innerHTML=main;
}