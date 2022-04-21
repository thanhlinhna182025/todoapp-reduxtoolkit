import { configureStore } from "@reduxjs/toolkit";
import todolistReducer from "./todolistSlice";
import filterReducer from "./filterSlice";

export default configureStore({
  reducer: {
    todolist: todolistReducer,
    filter: filterReducer,
  },
});
