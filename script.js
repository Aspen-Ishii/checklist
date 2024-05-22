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
        renderTask(taskText, false);
        input.value = '';
    }
    // Clear the input field after adding the task
    input.value = '';
};

// Function to add(render) a task from loaded tasks
function renderTask(taskText, done) {
    let listItem = document.createElement('li');
    listItem.textContent = taskText;

    // Create a Delete Button for the list item
    const deleteBTN = document.createElement('button');
    deleteBTN.innerHTML = '<i id=bye class="fa-solid fa-circle-xmark"></i>';
    deleteBTN.classList.add('delete');

    // Create Check Button for list item 
    const checkBTN = document.createElement('button');
    checkBTN.innerHTML = '<i class="fa-solid fa-check-circle"></i>';
    checkBTN.classList.add('checked');

    if (done) {
        listItem.classList.add('done');
    }

    //create 2 different styles for the list item (done and notDone)
    function doneStyle (listItem) {
        listItem.style.backgroundColor = "rgba(0,255,0,0.2";
        listItem.style.color = 'green';
        checkBTN.style.backgroundColor = "rgba(0,255,0,0.2";
        checkBTN.style.color = "green";
        deleteBTN.style.backgroundColor = "rgba(0,255,0,0.2";
        };

    function notDoneStyle (listItem) {
        listItem.style.backgroundColor = "";
        listItem.style.color = '';
        checkBTN.style.backgroundColor = "";
        checkBTN.style.color = "";
        deleteBTN.style.backgroundColor = "";
        }

if (done) {
    listItem.classList.add('done');
    doneStyle(listItem);
} else {
    listItem.classList.remove('done');
    notDoneStyle(listItem);
}


//order completed list items together 
const ordered = taskArray.sort ((a,b) => a.done > b.done ? 1 : -1);

// Attach event listener to the delete button
deleteBTN.onclick = function(){
    listItem.remove();
    const index = taskArray.findIndex(task => task.text === taskText);
    if (index !== -1) {
        taskArray.splice(index, 1); // Remove the task from the array
    }
    saveTasks(taskArray); // Update local storage after removing the task
};

// Append the delete button to the list item
listItem.appendChild(deleteBTN);

    // Toggle between "done" and "notDone" functions when checkBTN is clicked
    // Attach event listeners to the checked button
    checkBTN.onclick = function() {
        const index = taskArray.findIndex(task => task.text === taskText);
        taskArray[index].done = !taskArray[index].done;
        
        if (listItem.classList.contains('done')) {
            notDoneStyle(listItem, checkBTN);
            listItem.classList.remove('done');
        } else {
            doneStyle(listItem, checkBTN);
            listItem.classList.add('done');
        }
        saveTasks(taskArray);
    };

// Append the check button to the list item
listItem.appendChild(checkBTN);

// Append the list item to the task list
document.querySelector('#taskList').appendChild(listItem);

// Save tasks to local storage
saveTasks(taskArray);


// Event listener to update task status
document.querySelector('#taskList').addEventListener('click', function(event) {
    const listItem = event.target.closest('li');
    if (listItem) {
        listItem.classList.toggle('done');
        saveTasks(taskArray); // Update local storage after toggling the task status
    }
});
};
// Test
