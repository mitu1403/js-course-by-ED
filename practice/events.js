const button    = document.querySelector("#submit");
const button2   = document.querySelector("#change");
const todoList  = document.querySelector("#todo-list");
const todoNr    = document.querySelector(".todo-nr i")
const items     = todoList.children;
const mainTitle = document.querySelector('.main-title')
const nameInput = document.querySelector('#name-input')

button.addEventListener('click', function(e){
    e.preventDefault(); // to prevent the natural behavior of something
    //Creating Element
    const newItem = document.createElement("li");
    //Adding Class
    newItem.classList.add('item')
    //Adding Text
    newItem.innerText = nameInput.value
    todoList.appendChild(newItem)
    todoNr.innerText = items.length
    //Delete the value from the input
    nameInput.value = ""
    //Create the element and add attaching event listener to them
    newItem.addEventListener('click', deleteItem)
})

//to delete items
function deleteItem(e){
    e.stopPropagation();
    e.target.remove();
}

todoList.addEventListener("click",function(){
    console.log("the ul executes");
    todoList.classList.toggle("fade");

})

button2.addEventListener('click', change);
function change(){
    mainTitle.style.color = 'red'
    mainTitle.classList.toggle('color')
}

