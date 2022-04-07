import { React } from "react";
import { useSelector } from "react-redux";
import "./AppHeader.css";

export const AppHeader = () => {
  const toDosData = useSelector(({ toDos: { toDosData } }) => toDosData);
  const toDo = toDosData.filter((todo) => !todo.done).length;
  const done = toDosData.length - toDo;
  return (
    <div className="app-header">
      <h1>My to do list</h1>
      <div>
        <p>
          <span>{toDo}</span> more to do, <span>{done}</span> done
        </p>
      </div>
    </div>
  );
};
