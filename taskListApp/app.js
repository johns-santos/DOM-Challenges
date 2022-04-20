// Define UI variables

const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');


// Function to load all event listeners
loadEventListeners();

// Load all event listeners;
function loadEventListeners() {
    // Add task event
    form.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
    //Clear task
    clearBtn.addEventListener('click', clearTasks);
    // Filter task evevents
    filter.addEventListener('keyup', filterTasks);
}

// Add Task
function addTask(e){
    if(taskInput.value === '') {
        alert('Add a task');
    }
    // Create li element
    const li = document.createElement('li')
    // Add a class
    li.className = 'collection-item'
    //create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    //Add class
    link.className = 'delete-item secondary-content';
    // Add icon html
    link.innerHTML = '<i class="fa fa-remove"></li>';
    // Append the link to li
    li.appendChild(link);
    
    // Append li to ul
     taskList.appendChild(li);

     //clear input
     taskInput.value = '';


    e.preventDefault();
}


// Remove task
function removeTask(e){
    // Target Parent class of ICON
    if(e.target.parentElement.classList.contains('delete-item')){
        if(confirm('Are you sure?')) {
            e.target.parentElement.parentElement.remove();
        }
    }
}


// Clear Task
function clearTasks() {
    // While Loop - removeChild is much faster than (taskList.innerHTML = '')
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild)
    }

}

// Filter tasks
function filterTasks(e) {
    const text = e.target.value.toLowerCase();
   
    // Filter task based on textContent
    document.querySelectorAll('.collection-item').forEach
    (function(task){
        const item = task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text) != -1){
            task.style.display = 'block';
        } else {
            task.style.display = 'none';
        }
    });
}