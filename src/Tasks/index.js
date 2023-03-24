import React from "react";
import "./style.css";

const Tasks = (props) => (
  <ul className="tasks">
    {props.tasks.map(tasks => (
      <li key={tasks.id}
        className={`tasks__item ${tasks.done && props.hideDoneTasks ? "tasks__item--hidden" : ""}`}
      >
        <button className={`tasks__button tasks__button--done `}>
          {tasks.done ? "✔" : ""}
        </button>
        <span className={`tasks__content ${tasks.done ? "tasks__content--done" : ""}`}>
          {tasks.content}
        </span>
        <button className="tasks__button tasks__button--remove">
          🗑
        </button>
      </li>
    ))}
  </ul>
);

export default Tasks;