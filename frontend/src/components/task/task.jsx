import "./task.css";
import React from "react";
import {
  RiCheckboxBlankCircleLine,
  RiCheckboxCircleLine,
} from "react-icons/ri";
import { useState } from "react";

export default function Task(props) {
  
  const task = props.task;
  const [statusMessage, setStatusMessage] = useState(null);

  return (
    <div className={"task " + (task.isCompleted ? "is-completed" : "")}>
      <div className="left">
        <span className="red"></span>
      </div>
      <div className="center">
        <input
          type="text"
          placeholder="What's your next task?"
          defaultValue={task.description}
          className={task.isCompleted ? "is-completed" : ""}
        />
        {statusMessage && (
          <div className="status-message"> {statusMessage} </div>
        )}
      </div>
      <div className="right">
        {task.isCompleted ? (
          <RiCheckboxCircleLine />
        ) : (
          <RiCheckboxBlankCircleLine />
        )}
      </div>
    </div>
  );
}
