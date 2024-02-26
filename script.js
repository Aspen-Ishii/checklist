var inputBox = document.getElementById("input-box");
var listContainer = document.getElementById("list-container");

function addTask(){
    if (inputBox.value === ""){ 
        console.log("working");
        alert(`Please enter text`);
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
}
