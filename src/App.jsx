import { useState } from "react";

let nextId = 0;
export default function List() {
  const [title, setTitle] = useState("");
  const [todosLists, setTodosLists] = useState([]);

  function handelAddList() {
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
            placeholder="Add list"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />{" "}
          <button onClick={handelAddList}>Add</button>
          <ul>
            {todosLists.map((todosList) => (
              <li key={todosList.id}>
                {todosList.title} <button>Edit</button>{" "}
                <button
                  onClick={() => {
                    setTodosLists(
                      todosLists.filter((tdl) => tdl.id !== todosList.id)
                    );
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
