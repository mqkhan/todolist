import { useState } from "react";

export default function AddTodoList({ onAddTodoList }) {
  const [title, setTitle] = useState("");

  return (
    <>
      <input
        placeholder="Add list"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />{" "}
      <button
        onClick={() => {
          setTitle("");
          onAddTodoList(title);
        }}
      >
        Add
      </button>
    </>
  );
}
