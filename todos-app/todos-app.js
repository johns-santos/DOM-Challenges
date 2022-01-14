const todos = [
  {
    text: 'Order dog food',
    completed: false
  },
  {
    text: 'Fix flat tire',
    completed: false
  },
  {
    text: 'Clean living room',
    completed: false
  },
  {
    text: 'Complete application',
    completed: true
  }
]

// SORT todos
const sortTodos = function (todos) {
  todos.sort(function (a, b) {
    if (!a.completed && b.completed) {
      return -1
    } else if (!b.completed && a.completed) {
      return 1
    } else {
      return 0
    }
  })
}

// Filter/search string - starting empty
const filters = {
  searchText: ''
}

const renderTodos = function (todos, filters) {
  const filteredTodos = todos.filter(function (todo) {
    return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
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
    const todoElement = document.createElement('p')
    todoElement.textContent = todo.text
    document.querySelector('#todo-list').appendChild(todoElement)
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
  if (e.target.elements.newTodo.value.length > 0) {
    let todoText = e.target.elements.newTodo.value
    todos.push({ text: todoText, completed: false })
    renderTodos(todos, filters)
    e.preventDefault()
  } else e.preventDefault()
  e.target.elements.newTodo.value = ''
})




// REMOVE TODO Button function
// document.querySelector('#remove-todos').addEventListener('click', function (e) {
//   document.querySelectorAll('p').forEach(function (todo) {
//     todo.remove()
//   })
// })
