function register(){
  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  
  let users = JSON.parse(localStorage.getItem('users')) || [];

  const newUser = {username , password  , role : 'user'}; // plain-text-password
  users.push(newUser);

  localStorage.setItem('users' , JSON.stringify(users));
  localStorage.setItem('currentUser' , JSON.stringify(newUser));
  showTodoSection();
};

function login() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  let users = JSON.parse(localStorage.getItem("users")) || [];

  const user = users.find(u => u.username === username && u.password === password);
  if (user) {
    localStorage.setItem("currentUser", JSON.stringify(user));
    showTodoSection();
  } else {
    alert("Invalid username or password");
  }
}

function showTodoSection(){
    document.getElementById('authSection').style.display = "none";
    document.getElementById('todoSection').style.display = "block";
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    document.getElementById('userDisplay').innerHTML = currentUser.username;

}


function addTodo(){

    const todoInput = document.getElementById('todoInput').value;
    

    const todoList = document.querySelector('#todoList').innerHTML += `<i>${todoInput}</i><br>`;
    
};

function logout(){
  
  localStorage.removeItem('currentUser');

  // Hide todo section and show auth section
  document.getElementById('todoSection').style.display = "none";
  document.getElementById('authSection').style.display = "block";


  document.getElementById('userDisplay').innerHTML = '';
  document.getElementById('todoList').innerHTML = '';
  document.getElementById('todoInput').value = '';
}