let addBtn = document.querySelector('.add')
let saveBtn = document.querySelector('.save')
let cancelBtn = document.querySelector('.cancel')
let delateBtns = document.querySelector('.delete-note')

let noteArea = document.querySelector('.note-area')
let notePanel = document.querySelector('.note-panel')
let category = document.querySelector('#category')
let error = document.querySelector('.error')
let textarea = document.querySelector('#text')

let selectedValue;
let cardID = 0

let openPanel = () => {
    notePanel.style.display = "flex"
}

let closePanel = () => {
    notePanel.style.display = "none"
    error.style.visibility = "hidden"
    textarea.value = ''
    category.selectedIndex = 0
}

let addNote = () => {
    if (textarea.value !== '' && category.options[category.selectedIndex].value !== '0') {
        createNote()
        error.style.visibility = "hidden"
    } else {
        error.style.visibility = "visible"
    }
}

let createNote = () => {
    let newNote = document.createElement('div')
    newNote.classList.add('note')
    newNote.setAttribute('id', cardID)

    newNote.innerHTML =
        `<div class='note-header'>
    <h3 class="note-title">${selectedValue}</h3>
    <button class='delete-not/e'>
          <i class="fas fa-times icon"></i>
    </button>
    </div>
    <div class="note-body">
         ${textarea.value}
    </div>`

    
    noteArea.appendChild(newNote)
    cardID++
    textarea.value = ''
    category.selectedIndex = 0
    notePanel.style.display = 'none'
}

let selectValue = () => {
    selectedValue = category.options[category.selectedIndex].text
}

addBtn.addEventListener('click', openPanel)
cancelBtn.addEventListener('click', closePanel)
saveBtn.addEventListener('click', addNote)
