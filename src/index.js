document.addEventListener("DOMContentLoaded", () => {
  const inputForm = document.getElementById("create-task-form")
  inputForm.addEventListener('submit', (e) => {
    e.preventDefault()
    appendToDo(e.target.newTaskDescription.value)
  })

  function appendToDo (toDoItem) {
    let p = document.createElement('p')
    let button = document.createElement('button')
    p.textContent = toDoItem
    button.textContent = "Delete"
    p.appendChild(button)
    document.querySelector('#tasks').appendChild(p)
    button.addEventListener('click', deleteTask)
  }

 function deleteTask (e) {
  e.target.parentNode.remove()
 }

});
