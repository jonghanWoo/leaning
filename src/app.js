const logInForm = document.querySelector("#login-form");
const logInInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const ToDo = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USER_KEY = "username";
function onLoginSubmit(event) {
  event.preventDefault();
  logInForm.classList.add(HIDDEN_CLASSNAME);
  const username = logInInput.value;
  localStorage.setItem("USER_KEY", username);
  paintGreetings(username);
  ToDo.classList.remove(HIDDEN_CLASSNAME);
}

function paintGreetings(username) {
  greeting.innerText = `환영합니다. ${username}님.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}
const saveUser = localStorage.getItem("USER_KEY");

if (saveUser === null) {
  logInForm.classList.remove(HIDDEN_CLASSNAME);
  logInForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(saveUser);
}
