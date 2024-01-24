import { useState } from "react";
import List from "./List";

let nextId = 0;
export default function App() {
  const [todosLists, setTodosLists] = useState([]);
  const [title, setTitle] = useState("");

  function handelAddTodo() {
    setTodosLists([
      ...todosLists,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
    setTitle("");
  }

  return (
    <>
      <div className="container">
        <div className="list">
          <h1>Todo List</h1>
          <input
            placeholder="Add todo list"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <button onClick={handelAddTodo}>Add</button>
          <List todos={todosLists} setTodo={setTodosLists} />
        </div>
      </div>
    </>
  );
}
