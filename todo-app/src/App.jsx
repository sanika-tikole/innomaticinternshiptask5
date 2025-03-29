import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import "./index.css";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const addTodo = (text, dueDate) => {
    setTodos([...todos, { id: Date.now(), text, dueDate, completed: false, pinned: false }]);
  };

  const toggleComplete = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText, newDueDate) => {
    setTodos(
      todos.map(todo => todo.id === id ? { ...todo, text: newText, dueDate: newDueDate } : todo)
    );
  };

  const togglePin = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, pinned: !todo.pinned } : todo));
  };

  const sortedTodos = [...todos].sort((a, b) => b.pinned - a.pinned);

  return (
    <div className={`app-container ${darkMode ? "dark" : ""}`}>
      <h1>📝 Todo List</h1>
      <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? "☀️ Light Mode" : "🌙 Dark Mode"}
      </button>
      <AddTodo addTodo={addTodo} />
      <TodoList todos={sortedTodos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} editTodo={editTodo} togglePin={togglePin} />
    </div>
  );
};

export default App;
