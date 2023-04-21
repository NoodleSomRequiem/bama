window.addEventListener('load', init);

let list;
let todoItems;

/**
 * Initialize the application
 */
function init()
{let form = document.getElementById('todo-form')
   form.addEventListener('submit',formSubmitHandler)} list= document.getElementById("list")

function formSubmitHandler(e)
{   e.preventDefault()

    let inputField = document.getElementById('todo-field')
    let inputValue = inputField.value;

    addToList(inputValue);

    todoItems.push(inputValue)
    localStorage.setItem('todoItems', JSON.stringify(todoItems))
}
function addToList(item) {
    let li = document.createElement('li')
    li.innerHTML = item;
    list.appendChild(li)
}
 function fillFieldFromLocalStorage(){
  if (localStorage. getItem('todos')!==null)  {
      let inputValues = localStorage.getItem('todos');

      for (let i = 0; i < inputValues.length; i++){
          addToList(inputValues[i])
      }
  }
}
