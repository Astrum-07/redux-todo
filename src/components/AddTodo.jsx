import React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../store/todoSlice";

const AddTodo = () => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Date.now(),
      title: e.target[0].value,
      checked: false,
    };

    dispatch(addTodo(newTodo));
    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        className="border"
        type="text"
        placeholder="Todo kiriting"
      />
      <button type="submit">Qo'shish</button>
    </form>
  );
};

export default AddTodo;
