import createElement from "../createElement";
import addTodoModal from "./addTodoModal";
import "./displayTodos.css";
function DisplayTodos() {
  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  const openEditModal = (todo, index) => {
    let dialog = document.getElementById("add-task-dialog");
    let cancelButton = document.getElementById("cancel");
    let form = document.getElementById("add-task-form");

    document.getElementById("title").value = todo.title;
    document.getElementById("description").value = todo.description;
    document.getElementById("dueDate").value = todo.dueDate;
    document.getElementById("notes").value = todo.notes;
    document.getElementById("isComplete").checked = todo.isComplete;

    dialog.showModal();

    cancelButton.addEventListener("click", () => {
      dialog.close("formNA");
    });

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      todo.title = document.getElementById("title").value;
      todo.description = document.getElementById("description").value;
      todo.dueDate = document.getElementById("dueDate").value;
      todo.priority = document.querySelector(
        'input[name="priority"]:checked'
      ).value;
      todo.notes = document.getElementById("notes").value;
      todo.isComplete = document.getElementById("isComplete").checked;

      todos[index] = todo;
      updateTodo();
      dialog.close();
    });
  };

  const updateTodo = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  //Create Todos
  let addTodoButton = createElement("button", { id: "addTodoButton" }, [
    "Add Task",
  ]);
  let addTodoContainer = createElement("div", { id: "addTodoContainer" }, [
    addTodoButton,
  ]);
  addTodoButton.addEventListener("click", () => {
    addTodoModal(todos, updateTodo);
  });

  //Display List of todos
  let todosContainer = createElement("div", { id: "tasksContainer" });
  if (todos.length === 0) {
    todosContainer.append(
      createElement("p", { class: "no-tasks-message" }, ["No tasks available."])
    );
  }
  todos.map((todo, index) => {
    let title = createElement("h3", { class: "todoTitle" }, [todo.title]);
    let description = createElement("p", { class: "todoDescription" }, [
      todo.description,
    ]);
    let dueDate = createElement("p", { class: "dueDate" }, [todo.dueDate]);
    let priority = createElement("p", { class: todo.priority }, [
      todo.priority,
    ]);
    let notes = createElement("p", { class: "todoNotes" }, [todo.notes]);
    let checkbox = createElement(
      "input",
      { class: "todoCheck", type: "checkbox" },
      ["Completed"]
    );
    checkbox.checked = todo.isComplete ? true : false;
    checkbox.addEventListener("change", () => {
      todo.isComplete = checkbox.checked; // Update the isComplete property
      updateTodo(); // Save changes to localStorage
      isComplete.textContent = todo.isComplete
        ? "Task Completed"
        : "Task not Completed"; // Update the UI text
    });
    let isComplete = createElement("p", { class: "isComplete" }, [
      todo.isComplete ? "Task Completed" : "Task not Completed",
      checkbox,
    ]);
    let editMaterialButton = createElement("i", { class: "material-icons" }, [
      "edit",
    ]);
    let deleteMaterialButton = createElement("i", { class: "material-icons" }, [
      "delete",
    ]);
    let editButton = createElement(
      "button",
      { class: "editButton", id: "editTask" },
      [editMaterialButton]
    );
    let deleteButton = createElement(
      "button",
      { class: "deleteButton", id: "deleteTask" },
      [deleteMaterialButton]
    );
    deleteButton.addEventListener("click", () => {
      todos = todos.filter((t) => t !== todo);
      updateTodo();
      task.remove();
    });

    editButton.addEventListener("click", () => {
      openEditModal(todo, index);
    });
    let task = createElement("div", { class: "taskContainer" }, [
      title,
      description,
      dueDate,
      priority,
      notes,
      isComplete,
      editButton,
      deleteButton,
    ]);
    todosContainer.append(task);
  });

  let mainContainer = createElement("div", { id: "mainContainer" }, [
    addTodoContainer,
    todosContainer,
  ]);
  root.innerHTML = "";
  root.append(mainContainer);
}
export default DisplayTodos;
