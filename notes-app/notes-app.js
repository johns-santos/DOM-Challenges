const notes = getSavedNotes()

// Search filters object
const filters = {
  searchText: ''
}

// ###################################
// ===========  START FILTER & RENDER LOGIC =======================================
// Use filter to return text match between filters and note array
const renderNotes = function (notes, filters) {
  const filteredNotes = notes.filter(function (note) {
    return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
  })

  // Clear #notes div
  document.querySelector('#notes').innerHTML = ''

  // Iterate over notes array and create 'p' element forEach
  filteredNotes.forEach(function (note) {
    let noteEl = document.createElement('p')

    if (noteEl.title.length > 0) {
      noteEl.textContent = note.title
    } else {
      noteEl.textContent = 'Unnamed note'
    }
    document.querySelector('#notes').appendChild(noteEl)
  })
}// ====  END FILTER  & RENDER LOGIC ===============================

// Execute renderNotes function
renderNotes(notes, filters)

document.querySelector('#add-note').addEventListener('click', function (e) {
  notes.push({
    title: '',
    body: ''
  })
  localStorage.setItem('notes', JSON.stringify(notes))
  renderNotes(notes, filters)
})

// Search text input box (use input for realtime search) - Populates 'filters' array and uses filter to return text match between notes and filters array
document.querySelector('#search-text').addEventListener('input', function (e) {
  filters.searchText = e.target.value
  renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function (e) {
  const contentTest = e.target.value
  console.log(contentTest)
})
