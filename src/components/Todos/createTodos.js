import { format } from "date-fns";
function CreateTodo(
  title,
  description,
  dueDate,
  priority,
  notes = "",
  isCompleted
) {
  this.title = title;
  this.description = description;
  this.dueDate = format(new Date(dueDate), "yyyy-MM-dd");
  this.priority = priority;
  this.notes = notes;
  this.isCompleted = isCompleted;
}
export default CreateTodo;
