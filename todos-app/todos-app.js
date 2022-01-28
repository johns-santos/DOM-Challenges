let todos = []

// Filter/search string array - starting with empty string.
const filters = {
  searchText: '',
  hideCompleted: false
}


// Check for existing saved data
const todosJSON = localStorage.getItem('todos')

if(todosJSON !== null) {
    todos = JSON.parse(todosJSON)
}


const renderTodos = function (todos, filters) {
  let filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  // if hideCompleted checkbox selected mutate 'filteredTodos'
  filteredTodos = filteredTodos.filter(function (todo) {
    // return items where completed is FALSE - this works becuase if one is true to whole statement is true
    return !filters.hideCompleted || !todo.completed
  })

  // CLEAR .todo-list div after every input
  document.querySelector('#todo-list').innerHTML = ''

  // Update H2 element which counts todos that are incomplete
  const incomplete = filteredTodos.filter(function (todo) {
    return !todo.completed
  })
  const summary = document.createElement('h2')
  summary.textContent = `You have ${incomplete.length} todos left to complete.`
  document.querySelector('#todo-list').appendChild(summary)

 // Wrap todo in paragraph  element
 filteredTodos.forEach(function (todo) {
  const p = document.createElement('p')
  p.textContent = todo.text
  document.querySelector('#todo-list').appendChild(p)
})
}
renderTodos(todos, filters)

// Listen for input changes in
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderTodos(todos, filters)
})

document.querySelector('#add-todo').addEventListener('submit', function (e) {
  e.preventDefault()
  let todoText = e.target.elements.newTodo.value
  todos.push({ text: todoText, completed: false })
  localStorage.setItem('todos', JSON.stringify(todos))
  renderTodos(todos, filters)
  e.target.elements.newTodo.value = ''

})

// hide completed checkbox
document
  .querySelector('#hide-completed')
  .addEventListener('change', function (e) {
    // Set hideCompleted filter to true or false (toggle effect by uncheck/check)
    filters.hideCompleted = e.target.checked
    renderTodos(todos, filters)
  })


