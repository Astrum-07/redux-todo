import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem' 

const TodoList = () => {
  const {todos} = useSelector((state) => state.todos)
  console.log(todos)
  return (
    <div>
      <h2 className='text-2xl font-bold'>Todo List</h2>

      {
        todos.length == 0 && <p>Todo mavjud emas, qo'shing</p>
      }
      {
        todos.length > 0 && todos.map((todo) => <TodoItem key={todo.id} todo={todo}/> )
      }
    </div>
  )
}

export default TodoList