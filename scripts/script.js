const formInput = document.getElementsByTagName("form")[0];
const output = document.getElementsByTagName("ul")[0];

const doneBtn = document.getElementById("done");
const deleteBtn = document.getElementById("delete");

// console.log(formInput);

function addTask(e){
    e.preventDefault();
    const userValue = formInput[0].value;
    if(userValue == ""){
        return;
    }
    output.innerHTML += `<li>${userValue}<div class="buttons"><button id="done">DONE</button><button id="delete">DELETE</button></div></li>`;
    
    // console.log(output);
    console.log(deleteBtn, deleteBtn);
    // console.log("fonction appelée");
    // console.log(e);
    // console.log(output);
}

formInput.addEventListener("submit", addTask);


function done(){}
function remove(){}