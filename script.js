    
    
    document.getElementById('addTaskBtn').onclick = function(){
        console.log('working'); 
    
    if(document.querySelector('#newTask input').value.length == 0){
        alert("Error: Must enter text")
    } else {
        // Create a new list item
        let listItem = document.createElement('li');
        listItem.textContent = document.querySelector('#newTask input').value;
        
        /* 1st order
        first = function () {
            listItem.firstElementChild;
        }
        */
    /*
    // Checked Button
        //Create check button for list item 
        let checkBTN = document.createElement('button');
        checkBTN.innerHTML = '<i class="fa-regular fa-circle"></i>';
        checkBTN.classList.add('checked')
         // Append the check button to the list item
        listItem.appendChild(checkBTN);
        
    //*****listItem.insertBefore(checkBTN, listItem.firstChild); 

         // Append the list item to the task list
         document.querySelector('#taskList').appendChild(listItem);
 
         // Attach event listener to the checked button
         checkBTN.onclick = function init() { 
                document.getElementById("listItem").style.color = 'green';
              }
            /*var bottom = document.querySelector('.taskList li');
        */

    // Delete Button
        // Create a delete button for the list item
        let deleteBTN = document.createElement('button');
        deleteBTN.innerHTML = '<i id=bye class="fa-solid fa-circle-xmark"></i>';
        deleteBTN.classList.add('delete');

        // Append the delete button to the list item
        listItem.appendChild(deleteBTN);

        // Append the list item to the task list
        document.querySelector('#taskList').appendChild(listItem);

        // Attach event listener to the delete button
        deleteBTN.onclick = function(){
            this.parentNode.remove();
        }
    

        // Clear the input field after adding the task
        document.querySelector('#newTask input').value = '';
        

        
        };
    };

