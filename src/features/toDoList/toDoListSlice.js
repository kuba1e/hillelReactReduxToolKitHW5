import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  toDosData: [],
  filterValue: "all",
  searchValue: "",
};

const findToDoIndex = (toDos, id) => {
  return toDos.findIndex((toDo) => toDo.id === id);
};

const generateId = (toDos) => {
  let id = null;
  if (toDos.length === 0) {
    id = 1;
  } else {
    id = toDos.at(-1).id + 1;
  }
  return id;
};

export const toDoListSlice = createSlice({
  name: "toDoList",
  initialState,
  reducers: {
    addToDo: ({ toDosData }, { payload }) => {
      const newItem = {
        id: generateId(toDosData),
        label: payload,
        done: false,
        important: false,
      };

      toDosData.push(newItem);
    },
    deleteToDo: ({ toDosData }, { payload }) => {
      const toDosIdx = findToDoIndex(toDosData, payload);
      toDosData.splice(toDosIdx, 1);
    },
    filterToDos: (state, { payload }) => {
      state.filterValue = payload;
    },
    searchToDos: (state, { payload }) => {
      state.searchValue = payload;
    },
    toggleDone: ({ toDosData }, { payload }) => {
      const toDosIdx = findToDoIndex(toDosData, payload);
      toDosData[toDosIdx].done = !toDosData[toDosIdx].done;
    },
    toggleImportant: ({ toDosData }, { payload }) => {
      const toDosIdx = findToDoIndex(toDosData, payload);
      toDosData[toDosIdx].important = !toDosData[toDosIdx].important;
    },
  },
});

export const {
  addToDo,
  deleteToDo,
  filterToDos,
  searchToDos,
  toggleDone,
  toggleImportant,
} = toDoListSlice.actions;
export default toDoListSlice.reducer;
