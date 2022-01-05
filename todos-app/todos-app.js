const todos = [{
    text: "Order dog food",
    completed: false
},{
    text: "Fix flat tire",
    completed: false
},
{
    text: "Clean living room",
    completed: false
},
{
    text: "Complete application",
    completed: true
}]

const incomplete = todos.filter(function (todo){
    return !todo.completed
}) 

const summary = document.createElement('h2')
summary.textContent = `You have ${incomplete.length} todos left to complete.` 
document.querySelector('#list').appendChild(summary);

todos.forEach(function (todo){
    // Add new paragraph element to bottom of list
    const newParagraph = document.createElement('p');
    // create content 
    newParagraph.textContent = todo.text;
    // specify where to place new element.
    document.querySelector('.paragraphs').appendChild(newParagraph);  
})

// Add eventListener to button
document.querySelector('#add-todo').addEventListener('click', function(e){
    console.log("Button has been clicked.")
})

// Listen for input changes in 
document.querySelector('#search-text').addEventListener('input', function(e){
    console.log(e.target.value)
})
