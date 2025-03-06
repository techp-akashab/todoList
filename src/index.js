import DisplayTodos from "./components/Todos/displayTodos.js";
import About from "./components/About/About.js";
import './index.css'
const root = document.getElementById("root");
document.getElementById("home").addEventListener("click", DisplayTodos);
document.getElementById("about").addEventListener("click", About);
document.addEventListener("DOMContentLoaded", DisplayTodos);
