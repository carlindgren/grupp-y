 /*
function remove() {
    //när man trycker x
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    //visar i html
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    //remove knppen
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function get_todos() {

    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    //Addar in i lista
    var task = document.getElementById('task').value;
    if (task===""){
        return task;
    }

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
document.getElementById('add').addEventListener('click', add);
show();

let  = document.querySelector("li")

li.addEventListener("click", function(){
    classlist.toggle(".done")

}) 
function remove() {
    //när man trycker x
    var id = this.getAttribute('id');
    var todos = get_todos();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
 
    show();
 
    return false;
}
 
function show() {
    //visar i html
    var todos = get_todos();
 
    var html = '<ul>';
    for(var i=0; i<todos.length; i++) {
        html += '<li>' + todos[i] + '<button class="remove" id="' + i  + '">x</button></li>';
    };
    html += '</ul>';
 
    document.getElementById('todos').innerHTML = html;
 
    //remove knppen
    var buttons = document.getElementsByClassName('remove');
    for (var i=0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', remove);
    };
}

function get_todos() {

    var todos = new Array;
    var todos_str = localStorage.getItem('todo');
    if (todos_str != null) {
        todos = JSON.parse(todos_str); 
    }
    return todos;
}
function add() {
    //Addar in i lista
    var task = document.getElementById('task').value;
    if (task===""){
        return task;
    }

    var todos = get_todos();
    todos.push(task);
    localStorage.setItem('todo', JSON.stringify(todos));

    show();

    return false;
}
document.getElementById('add').addEventListener('click', add);
show();

let  = document.querySelector("li")

li.addEventListener("click", function(){
    classlist.toggle(".done")

}) 
*/
// Ny function

document.querySelector("#add").addEventListener('click',newElement);

function newElement() {
    //Skapar en ny Element
    var createLi = document.createElement("li");
    var valueInput = document.getElementById("task").value;
    var textNodeCreate = document.createTextNode(valueInput);
    createLi.appendChild(valueInput)
}
*/
// Ny function
var myNodelist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("BUTTON");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
document.querySelector("#add").addEventListener('click',newElement);
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
  }
}, false);

function newElement() {
    //Skapar en ny Element
    var createLi = document.createElement("li");
    var valueInput = document.getElementById("task").value;
    var textNodeCreate = document.createTextNode(valueInput);
    createLi.appendChild(textNodeCreate);
    if (valueInput==="") {
        document.getElementById("task").placeholder="Write something again";
    } else {
        document.getElementById("myUL").appendChild(createLi);
    }
    document.getElementById("task").value="";
    var createBtn = document.createElement("BUTTON");
    createBtn.className= "close";
    var text = createBtn.innerHTML="X"
    createBtn.appendChild(text);
    createLi.appendChild(createBtn);

    for (i = 0; i < close.length; i++) {
        close[i].onclick = function() {
          var div = this.parentElement;
          div.style.display = "none";
        }

}
