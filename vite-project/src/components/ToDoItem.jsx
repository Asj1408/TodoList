import { useState } from "react";

const ToDoItem = ({ todo, toggleComplete, deleteTodo, editTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(todo.task);

  const handleEdit = () => {
    if (isEditing && newTask.trim()) {
      editTodo(todo.id, newTask);
    }
    setIsEditing(!isEditing);
  };

  return (
    <li>
      <div>
        <input 
          type="checkbox" 
          checked={todo.completed} 
          onChange={() => toggleComplete(todo.id)} 
        />
        {isEditing ? (
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
          />
        ) : (
          <span>
            {todo.task}
          </span>
        )}
      </div>
      <div>
        <button onClick={handleEdit}>
          {isEditing ? "Save" : "Edit"}
        </button>
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </li>
  );
};

export default ToDoItem;
