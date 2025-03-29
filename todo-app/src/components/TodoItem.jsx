import { useState } from "react";

const TodoItem = ({ todo, toggleComplete, deleteTodo, editTodo, togglePin }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(todo.text);
  const [newDueDate, setNewDueDate] = useState(todo.dueDate);

  const handleSave = () => {
    editTodo(todo.id, newText, newDueDate);
    setIsEditing(false);
  };

  return (
    <li className={`todo-item ${todo.completed ? "completed" : ""} ${todo.pinned ? "pinned" : ""}`}>
      <div>
        {isEditing ? (
          <>
            <input type="text" value={newText} onChange={(e) => setNewText(e.target.value)} />
            <input type="date" value={newDueDate} onChange={(e) => setNewDueDate(e.target.value)} />
          </>
        ) : (
          <>
            <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
            {todo.dueDate && <small className="due-date">⏳ {todo.dueDate}</small>}
          </>
        )}
      </div>

      <div className="buttons">
        {isEditing ? (
          <button onClick={handleSave}>💾 Save</button>
        ) : (
          <>
            <button onClick={() => setIsEditing(true)}>✏️ Edit</button>
            <button onClick={() => togglePin(todo.id)}>📌 {todo.pinned ? "Unpin" : "Pin"}</button>
            <button onClick={() => deleteTodo(todo.id)}>❌ Delete</button>
          </>
        )}
      </div>
    </li>
  );
};

export default TodoItem;
