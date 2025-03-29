import { motion, AnimatePresence } from "framer-motion";
import TodoItem from "./TodoItem";

const TodoList = ({ todos, toggleComplete, deleteTodo, editTodo, togglePin }) => {
  return (
    <AnimatePresence>
      <motion.ul className="todo-list">
        {todos.map(todo => (
          <motion.li
            key={todo.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <TodoItem 
              todo={todo} 
              toggleComplete={toggleComplete} 
              deleteTodo={deleteTodo} 
              editTodo={editTodo} 
              togglePin={togglePin} 
            />
          </motion.li>
        ))}
      </motion.ul>
    </AnimatePresence>
  );
};

export default TodoList;
