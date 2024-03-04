document.getElementById('addTaskBtn').onclick = function(){
    console.log('working');
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Error: Must enter text")
    } else {
        document.querySelector('#taskList').innerHTML += `
            <div class="task">
                <span id="taskList">
                    ${document.querySelector('#newTask input').value}
                </span>
                <button class="delete">
                    <i class="far fa-trash-alt"></i>
                </button>
            </div>
        `;

        var current_task = document.querySelectorAll(".delete");
        for(var i=0; i<current_task.length; i++){
            current_task[i].onclick = function(){
                this.parentNode.remove();
            }
        }
    }
}