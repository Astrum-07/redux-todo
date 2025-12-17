import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, editTodo, toggleTodo } from "../store/todoSlice";

const TodoItem = ({ todo }) => {
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(null);
  const [value, setValue] = useState(todo.title);

  const handleSave = () => {
    dispatch(editTodo({
      id: editId,
      title: value
    }));

    setEditId(null);
  };

  return (
    <div className="flex gap-4">
      <input
        type="checkbox"
        defaultValue={todo.checked}
        onChange={() => {
          dispatch(toggleTodo(todo.id));
        }}
      />
      {!editId ? (
        <p
          style={{ width: "300px" }}
          className={todo.checked ? "line-through" : ""}
        >
          {todo.title}
        </p>
      ) : (
        <input
          className="border w-[300px]"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      )}
      <button onClick={() => dispatch(deleteTodo(todo.id))}>del</button>
      {!editId ? (
        <button onClick={() => setEditId(todo.id)}>edit</button>
      ) : (
        <button onClick={handleSave}>save</button>
      )}
    </div>
  );
};

export default TodoItem;