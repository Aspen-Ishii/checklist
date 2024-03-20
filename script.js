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
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Error: Must enter text");
    } else {
        // Create a new list item
        let listItem = document.createElement('li');
        listItem.textContent = document.querySelector('#newTask input').value;

/// Delete Button
        // Create a delete button for the list item
        let deleteBTN = document.createElement('button');
        deleteBTN.innerHTML = '<i id=bye class="fa-solid fa-circle-xmark"></i>';
        deleteBTN.classList.add('delete');

        // Append the delete button to the list item
        listItem.appendChild(deleteBTN);

        // Attach event listener to the delete button
        deleteBTN.onclick = function(){
            this.parentNode.remove();
        };

        // Clear the input field after adding the task
        document.querySelector('#newTask input').value = '';

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
        };

        // Append the list item to the task list
            document.querySelector('#taskList').appendChild(listItem);
    }
};