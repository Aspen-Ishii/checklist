/* BROKEN CODE
// declare global variables
let listItem = document.createElement('li');
let input = document.querySelector('#newTask input');

// Create empty array
let savedTaskArray = [];

// Function to save tasks to local storage
function saveTask() {
    let listItems = document.querySelectorAll('#taskList li');
    let unsavedTaskArray = [];
    listItems.forEach(item => {
        unsavedTaskArray.push({ text: item.textContent, done: item.classList.contains('done'), id: item.id});
    });
    localStorage.setItem('savedTaskArray', JSON.stringify(unsavedTaskArray));
}

// Event listener to update task status
document.querySelector('#taskList').addEventListener('click', function(event) {
    let listItem = event.target.closest('li');
    if (listItem) {
        listItem.classList.toggle('done');
        saveTask();
    }
});

// Function to render a task element
function renderTask(taskText) {
    let listItem = document.createElement('li');
    listItem.textContent = taskText;
    
    // Append the list item to the task list
    document.querySelector('#taskList').appendChild(listItem);
}

// Function to load tasks from local storage
function loadTask() {
    const savedTasks = localStorage.getItem('taskArray');
    if (savedTasks) {
        taskArray = JSON.parse(savedTasks);
        taskArray.forEach(task => {
            renderTask(task.text, task.done, task.id);
        });
    }
}

// Load tasks when the page loads
window.onload = function() {
    loadTask();
};

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
    let listItem = document.createElement('li');
    let input = document.querySelector('#newTask input');

    if(input.value.trim().length === 0){
        alert("Error: Must enter text");
    } else {
        // Create a new list item
        const taskText = input.value.trim();
        const newTask = {
            text: taskText,
            done: false,
            id: `${taskText.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
        };
        listItem.textContent = taskText;
        
        taskArray.push(newTask);
        saveTask(taskArray);
        renderTask(taskText);
        input.value = '';
    };
};

/// Delete Button
        // Create a delete button for the list item
        const deleteBTN = document.createElement('button');
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
        const checkBTN = document.createElement('button');
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

*/

////////////////////////////////////////////////

// Initialize tasks array
let taskArray = [];

// Function to save tasks to local storage
function saveTasks(taskArray) {
    localStorage.setItem('taskArray', JSON.stringify(taskArray));
}

// Function to load tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem('taskArray');
    if (savedTasks) {
        taskArray = JSON.parse(savedTasks);
        taskArray.forEach(task => {
            renderTask(task.text, task.done);
        });
    }
}

// Load tasks when the page loads
window.onload = function() {
    loadTasks();
};

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

    if (input.value.trim().length === 0) {
        alert("Error: Must enter text");
    } else {
        const taskText = input.value.trim();
        const newTask = {
            text: taskText,
            done: false,
            id: `${taskText.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
        };
        taskArray.push(newTask);
        saveTasks(taskArray);
        renderTask(taskText);
        input.value = '';
    }
    // Clear the input field after adding the task
    input.value = '';
};

// Function to add(render) a task from loaded tasks
function renderTask(taskText) {
    let listItem = document.createElement('li');
    listItem.textContent = taskText;

/// Delete Button
        // Create a delete button for the list item
        const deleteBTN = document.createElement('button');
        deleteBTN.innerHTML = '<i id=bye class="fa-solid fa-circle-xmark"></i>';
        deleteBTN.classList.add('delete');

        // Attach event listener to the delete button
        deleteBTN.onclick = function(){
            listItem.remove();
            saveTasks(taskArray); // Update local storage after removing the task
        };

        // Append the delete button to the list item
        listItem.appendChild(deleteBTN);

         // Append the list item to the task list
         document.querySelector('#taskList').appendChild(listItem);

// Event listener to update task status
document.querySelector('#taskList').addEventListener('click', function(event) {
    const listItem = event.target.closest('li');
    if (listItem) {
        listItem.classList.toggle('done');
        saveTasks(taskArray); // Update local storage after toggling the task status
    }
});
}