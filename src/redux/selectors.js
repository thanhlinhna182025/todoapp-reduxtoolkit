import { createSelector } from "@reduxjs/toolkit";

export const filterSearchSelector = (state) => state.filter.search;
export const filterStatusSelector = (state) => state.filter.status;
export const filterPrioriesSelector = (state) => state.filter.priories;
export const todolistSelector = (state) => state.todolist;

export const todosRemainingSelector = createSelector(
  todolistSelector,
  filterStatusSelector,
  filterSearchSelector,
  filterPrioriesSelector,
  (todolist, status, searchText, priorities) => {
    return todolist.filter((todo) => {
      if (status === "All") {
        return priorities.length
          ? todo.name.includes(searchText) && priorities.includes(todo.prioriry)
          : todo.name.includes(searchText);
      }
      return (
        todo.name.includes(searchText) &&
        (status === "Completed" ? todo.completed : !todo.completed) &&
        (priorities.length ? priorities.includes(todo.prioriry) : true)
      );
    });
  }
);
