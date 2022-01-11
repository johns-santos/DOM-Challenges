const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
},{
    title: 'Habbits to work on',
    body: 'Exercise. Eating a bit better'
},{
    title: 'Office modification',
    body: 'Get a new seat'
}]

document.querySelector('#create-note').addEventListener('click', function(e){
    console.log('Did this work?')
    e.target.textContent = "Button was clicked."
})

document.querySelector('#remove-all').addEventListener('click', function(e){
    document.querySelectorAll('.note').forEach(function(note){
        note.remove();
    })
})


document.querySelector('#search-text').addEventListener('input', function(e){
    console.log(e.target.value)
})



const findNote = function(array, string){
    return notes.filter(function(note, index){
        const noteTitle = note.title.toLowerCase().includes(string.toLowerCase());
        const noteBody = note.body.toLowerCase().includes(string.toLowerCase())
        return noteTitle || noteBody

    })
}


// Search note by title
// const findNote = function (notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

const note = findNote(notes, 'mod');
console.log(note);