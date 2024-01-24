import { useState } from "react";

export default function List({ todos, setTodo }) {
  return (
    <>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{ textDecoration: todo.done ? "line-through" : "none" }}
          >
            {todo.title}{" "}
            <button
              onClick={() => {
                setTodo(
                  todos.map((td) =>
                    td.id === todo.id ? { ...td, done: !td.done } : td
                  )
                );
              }}
            >
              Edit
            </button>{" "}
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
