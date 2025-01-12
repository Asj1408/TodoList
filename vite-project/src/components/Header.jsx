import { useState } from "react";

const Header = ({ addTodo }) => {
  const [task, setTask] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTodo(task);
      setTask("");
    }
  };

  return (
    <header>
      <h1>To-Do List</h1>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={task} 
          onChange={(e) => setTask(e.target.value)} 
          placeholder="Add a new task" 
        />
        <button type="submit">Add</button>
      </form>
    </header>
  );
};

export default Header;
