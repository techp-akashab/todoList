import CreateTodo from "./createTodos";
function addTodoModal(todos = [], updateTodos) {
    let dialog = document.getElementById("add-task-dialog");
    let cancelButton = document.getElementById("cancel");
    let form = document.getElementById("add-task-form");
    dialog.showModal();
    cancelButton.addEventListener("click", () => {
      dialog.close("formNA");
    });
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const title = document.getElementById("title").value;
      const description = document.getElementById("description").value;
      const todoDueDate = document.getElementById("dueDate").value;
      const todoPriority = document.querySelector(
        'input[name="priority"]:checked'
      ).value;
      const todoNotes = document.getElementById("notes").value;
      const todoCompleted = document.getElementById("isComplete").checked;

      let newTodo = new CreateTodo(
        title,
        description,
        todoDueDate,
        todoPriority,
        todoNotes,
        todoCompleted
      );
      todos.push(newTodo);
      updateTodos();
      dialog.close();
    });
}
export default addTodoModal;