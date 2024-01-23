import { useState } from "react";
import AddToDo from "./AddToDo";

let nextId = 0;
export default function List() {
  const [todosLists, setTodosLists] = useState([]);

  function handelAddList(title) {
    setTodosLists([
      ...todosLists,
      {
        id: nextId++,
        title: title,
        done: false,
      },
    ]);
  }

  return (
    <>
      <div className="container">
        <div className="list">
          <h1>Todo List</h1>
          <AddToDo
            todos={todosLists}
            setTodo={setTodosLists}
            onAddTodo={handelAddList}
          />
        </div>
      </div>
    </>
  );
}
