// Features
// Add Todos
// User will type in todo and click add add todo button. This should then add the todo to the list

// Delete Todos
// Complete Todos
// Save Todos
// Load Todos


const form = document.querySelector('#new-todo-form')
const todoInput = document.querySelector('#todo-input')
const list = document.querySelector('#list')
const template = document.querySelector('#list-item-template')
const button = document.querySelector('button')
const LOCAL_STORAGE_PREFIX = 'ADVANCED_TODO_LIST'
const TODOS_STORAGE_KEY = `${LOCAL_STORAGE_PREFIX}-todos`
let todos = loadTodos()
todos.forEach(renderTodo)

// Complete Todos
list.addEventListener("click", e => {
  if (!e.target.matches('[ data-button-delete')) return
  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  parent.remove()
  todos = todos.filter(t => t.id !== todoId)
  saveTodos()
  // renderTodo(newTodo)
})

// Complete Todos
list.addEventListener("change", e => {
  if (!e.target.matches('[ data-list-item-checkbox')) return
  // Get the todo which is checked
  const parent = e.target.closest(".list-item")
  const todoId = parent.dataset.todoId
  const todo = todos.find(t => t.id == todoId)
  // Toggle the complete property to be equal to checkbox value
  todo.complete = e.target.checked
  // Save our updated todo
  saveTodos()
})

// Features
// Add Todos
// User will type in todo and click add add todo button. This should then add the todo to the list

form.addEventListener('submit', e => {
  e.preventDefault()
  const todoName = todoInput.value
  if (todoName == '') return
  const newTodo = { //object creation is required to handle completed todos upon refresh
    name: todoName,
    complete: false,
    id: new Date().valueOf().toString() //Id is used to keep track of completed todos. Very helpful when mmultiple todos are same
  }
  renderTodo(newTodo)
  todos.push(newTodo)
  saveTodos()
  todoInput.value = ''
})

function renderTodo(todo) {
  const templateClone = template.content.cloneNode(true)
  const listItem = templateClone.querySelector('.list-item')
  listItem.dataset.todoId = todo.id
  const textElement = templateClone.querySelector('[data-list-item-text]')
  textElement.innerText = todo.name
  const checkbox = templateClone.querySelector('[data-list-item-checkbox]')
  checkbox.checked = todo.complete
  list.appendChild(templateClone)
}

// Load Todos
function loadTodos() {
  const todosString = localStorage.getItem(TODOS_STORAGE_KEY)
  return JSON.parse(todosString) || []//Short circuit to [] if local storage is cleared
}
// Save Todos
function saveTodos() {
  localStorage.setItem(TODOS_STORAGE_KEY, JSON.stringify(todos))
}




// Modal JS
// const modal = document.querySelector("#modal")
// const openModalBtn = document.querySelector("#open-modal-btn")
// const closeModalBtn = document.querySelector("#close-modal-btn")
// const overlay = document.querySelector("#overlay")
// const modalClasses = [modal, overlay];
// const showModal = () => {
//   modalClasses.forEach(modalClass => {
//     modalClass.classList.add("open");
//   })
// }
// const closeModal = () => {
//   modalClasses.forEach(modalClass => {
//     modalClass.classList.remove("open");
//   })
// }
// openModalBtn.addEventListener('click', showModal)
// closeModalBtn.addEventListener('click', closeModal)
// overlay.addEventListener('click', closeModal)
