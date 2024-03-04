    
    document.getElementById('addTaskBtn').onclick = function(){
        console.log('working');
    
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Error: Must enter text")
    } else {
        // Create a new list item
        let listItem = document.createElement('li');
        listItem.textContent = document.querySelector('#newTask input').value;

        // Create a delete button for the list item
        let deleteBTN = document.createElement('button');
        deleteBTN.innerHTML = '<i class="fa-regular fa-circle-check"></i>';
        deleteBTN.classList.add('delete');

        // Append the delete button to the list item
        listItem.appendChild(deleteBTN);

        // Append the list item to the task list
        document.querySelector('#taskList').appendChild(listItem);

        // Clear the input field after adding the task
        document.querySelector('#newTask input').value = '';

        // Attach event listener to the delete button
        deleteBTN.onclick = function(){
            this.parentNode.remove();
        };
    };
};
