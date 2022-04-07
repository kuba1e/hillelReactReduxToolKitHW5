import React from "react";

import "./App.css";
import ToDoList from "../ToDoListItems";
import SearchPanel from "../SearchPanel";
import AppHeader from "../AppHeader";
import ItemAddForm from "../ItemAddForm";

export const App = () => {
  return (
    <div className="container">
      <AppHeader />
      <SearchPanel />
      <ToDoList />
      <ItemAddForm />
    </div>
  );
};
