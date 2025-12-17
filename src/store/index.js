import { configureStore } from '@reduxjs/toolkit'
import countSlice from './countSlice'
import todoSlice from './todoSlice'

export const store = configureStore({
  reducer: {
    count: countSlice,
    todos: todoSlice
  },
})