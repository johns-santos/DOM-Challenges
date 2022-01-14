const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}]

const filters = {
    searchText: ''
}

const renderNotes = function (notes, filters) {
    const filteredNotes = notes.filter(function(note){
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase());
    })
    // CLEAR id=notes div after every input
    document.querySelector('#notes').innerHTML = '';
    // Wrap note in paragraph element 
    filteredNotes.forEach(function (note){
        const noteElement = document.createElement('p')
        noteElement.textContent = note.title
        document.querySelector('#notes').appendChild(noteElement)
    })
}

renderNotes(notes, filters)


// document.querySelector('#create-note').addEventListener('click', function(e){
//     console.log('Did this work?')
//     e.target.textContent = "Button was clicked."
// })

// document.querySelector('#remove-notes').addEventListener('click', function(e){
//     document.querySelectorAll('.note').forEach(function(note){
//         note.remove();
//     })
// })

document.querySelector('#search-text').addEventListener('input', function(e){
    filters.searchText = e.target.value;
    renderNotes(notes, filters);
})


// Grab data from NAME FORM
document.querySelector('#name-form').addEventListener('submit', function(e){
    // Cancel default behavior of refreshing page
    e.preventDefault();
    // elements property provides access to all form fields
    console.log(e.target.elements.firstName.value);
    // Clear field after grabbing data
    e.target.elements.firstName.value = '';
})


// Checkbox
document.querySelector('#check-box').addEventListener('change', function(e){
    console.log(e.target.checked)
})












