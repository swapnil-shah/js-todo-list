// 1. Select all elements
const form = document.querySelector('#new-item-form')
const list = document.querySelector('#list')
const input = document.querySelector('#item-input')

// 2. Add a new element on form submit
form.addEventListener('submit', e => {
  e.preventDefault();

  // 1.Create a new item
  const item = document.createElement('div');
  item.innerText = input.value
  item.classList.add("list-item")

  // 2. Add that item to the list
  list.appendChild(item)

  // 3. Clear input
  input.value = "";

  // 4. Setup the event listner to delete item when clicked
  item.addEventListener('click', () => {
    list.remove()
  })
})