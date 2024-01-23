import { useState } from "react";

export default function AddToDo({ todos, setTodo, onAddTodo }) {
  const [title, setTitle] = useState("");
  return (
    <>
      <input
        placeholder="Add todo list"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          setTitle("");
          onAddTodo(title);
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} <button>Edit</button>{" "}
            <button
              onClick={() => {
                setTodo(todos.filter((td) => td.id !== todo.id));
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
