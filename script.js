//submit input with mouse click or enter key
document.addEventListener('keypress', function(event) {
    var keycode = event.keyCode ? event.keyCode : event.which;
    if (keycode === 13) { // 13 is the keycode for Enter key
        event.preventDefault(); // Prevent default action of keypress event
        document.getElementById('addTaskBtn').click(); // Simulate a click on the button
        console.log ('entered');
    }
});
document.getElementById('addTaskBtn').onclick = function(){
    console.log('clicked');
    let input = document.querySelector('#newTask input');
    if(input.value.length == 0){
        alert("Error: Must enter text");
    } else {
        // Create a new list item
        let listItem = document.createElement('li');
        listItem.textContent = input.value;

/// Delete Button
        // Create a delete button for the list item
        let deleteBTN = document.createElement('button');
        deleteBTN.innerHTML = '<i id=bye class="fa-solid fa-circle-xmark"></i>';
        deleteBTN.classList.add('delete');

        // Append the delete button to the list item
        listItem.appendChild(deleteBTN);

        // Attach event listener to the delete button
        deleteBTN.onclick = function(){
            listItem.remove();
            saveTask();
        };

        // Clear the input field after adding the task
        input.value = '';

    /// Checked Button
        // Create check button for list item 
        let checkBTN = document.createElement('button');
        checkBTN.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
        checkBTN.classList.add('checked');

        // Append the check button to the list item
        listItem.appendChild(checkBTN);

        //create 2 different styles for the list item (done and notDone)
        let done = function () {
        listItem.style.backgroundColor = "rgba(0,255,0,0.2";
        listItem.style.color = 'green';
        checkBTN.style.backgroundColor = "rgba(0,255,0,0.2";
        deleteBTN.style.backgroundColor = "rgba(0,255,0,0.2";
        };

        let notDone = function () {
        listItem.style.backgroundColor = "";
        listItem.style.color = '';
        checkBTN.style.backgroundColor = "";
        deleteBTN.style.backgroundColor = "";
        }
        // Toggle between "done" and "notDone" functions when checkBTN is clicked
        // Attach event listeners to the checked button
        checkBTN.onclick = function() {
            if (listItem.classList.contains('done')) {
                notDone();
                listItem.classList.remove('done');
            } else {
                done();
                listItem.classList.add('done');
            }
            saveTask();
        };

        // Append the list item to the task list
            document.querySelector('#taskList').appendChild(listItem);
        
        // Save tasks to local storage
        saveTask();
    }
};

// Function to save tasks to local storage
function saveTask() {
    let tasks = [];
    let listItems = document.querySelectorAll('#taskList li');
    listItems.forEach(item => {
        tasks.push(item.textContent);
    });
    localStorage.setItem('listItems', JSON.stringify(tasks));
}

// Function to load tasks from local storage
function loadTasks() {
    let savedTasks = localStorage.getItem('listItems');
    if (savedTasks) {
        let tasks = JSON.parse(savedTasks);
        tasks.forEach(task => {
            addTask(task);
        });
    }
}

// Load tasks when the page loads
window.onload = function() {
    loadTasks();
};

// Function to add a task from loaded tasks
function addTask(taskText) {
    let listItem = document.createElement('li');
    listItem.textContent = taskText;
     // Append the list item to the task list
     document.querySelector('#taskList').appendChild(listItem);

    console.log(window.localStorage)
};
