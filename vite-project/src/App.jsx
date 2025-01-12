import { useState } from "react";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import "./App.css";


function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (task) => {
    const newTodo = { id: Date.now(), task, completed: false };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newTask) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, task: newTask } : todo
    ));
  };

  return (
    <div>
      <Header addTodo={addTodo} />
      <ToDoList 
        todos={todos} 
        toggleComplete={toggleComplete} 
        deleteTodo={deleteTodo} 
        editTodo={editTodo} 
      />
    </div>
  );
}

export default App;
