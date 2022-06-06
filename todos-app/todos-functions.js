// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}

// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })


    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

  
    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Remove todo by id
const removeTodo = function (id) {
    const todoIndex = todos.findIndex(function (todo){
        return todo.id === id
    })
    if(todoIndex > -1){
        todos.splice(todoIndex, 1)
    }
}

// Toggle the completed value foa given todo
const toggleTodo = function(id) {
    const todo = todos.find(function(todo){
        return todo.id === id
    })
    if (todo !== undefined){
        todo.completed = !todo.completed
    }
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
    const todoEl = document.createElement('div')
    const checkbox = document.createElement('input')
    const todoText = document.createElement('span')
    const removeButton = document.createElement('button')

    // 1) Setup the input checkbox - append to div
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = todo.completed    
    todoEl.appendChild(checkbox)
    removeButton.setAttribute('id', 'todoBtn')
    checkbox.addEventListener('change', function(){
        toggleTodo(todo.id)
        saveTodos(todos)
        renderTodos(todos, filters)
    })

    
    // 2) Place Todo object text property in span and a append to div
    todoText.textContent = todo.text
    todoEl.appendChild(todoText);

    // 3) Add button to each todo
    removeButton.textContent = 'x';
    todoEl.appendChild(removeButton);
    removeButton.addEventListener('click', function(id){
        removeTodo(todo.id);
        saveTodos(todos);
        renderTodos(todos, filters)

    })
    
    // 4) Return DIV to be rendered
    return todoEl;
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}