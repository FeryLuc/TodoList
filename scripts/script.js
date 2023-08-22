const formInput = document.getElementsByTagName("form")[0];
const output = document.getElementsByTagName("ul")[0];



function addTask(e){
    e.preventDefault();
    const userValue = formInput[0].value;
    if(userValue == ""){
        return;
    }
    output.innerHTML += `<li>${userValue}<div class="buttons"><button id="done">DONE</button><button id="delete">DELETE</button></div></li>`;
    
    // console.log(output);
    // console.log(deleteBtn, deleteBtn);
    // console.log("fonction appelée");
}

formInput.addEventListener("submit", addTask);





function getBtn(event){
    const btn = event.target;
    // console.log(btn);
    const divParent = btn.parentElement;
    const liParent = divParent.parentElement;
    // console.log(liParent);

    if (btn.id == "done") {
        // console.log("done");
        doneTask(liParent, btn);
    } else if (btn.id == "delete") {
        // console.log("delete");
        removeTask(liParent);
    } else if (btn.innerText == "undo") {
        console.log("undo");
    }
}
output.addEventListener("click", getBtn);




function doneTask(li, doneBtn){
    
    li.style.textDecoration = "line-through";
    li.style.color =  "red";

    doneBtn.innerText = "Undo";
    doneBtn.style.background ="black";
    doneBtn.style.color ="white";
    doneBtn.style.textTransform = "uppercase";
}

function removeTask(li){
    li.remove();
}