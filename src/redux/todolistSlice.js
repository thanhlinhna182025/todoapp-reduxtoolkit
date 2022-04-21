import { createSlice } from "@reduxjs/toolkit";

export const todolistSlice = createSlice({
  name: "todolist",
  initialState: [
    { id: 1, name: "Learn react", completed: false, prioriry: "Medium" },
    { id: 2, name: "Learn redux", completed: true, prioriry: "High" },
    {
      id: 3,
      name: "Learn redux toolkit",
      completed: false,
      prioriry: "Low",
    },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      } else {
        console.log("khong thay");
      }
    },
  },
});
export const { addTodo, toggleTodoStatus } = todolistSlice.actions;

export default todolistSlice.reducer;
