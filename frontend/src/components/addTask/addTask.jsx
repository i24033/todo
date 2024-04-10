import "./addTask.css";
import React, { useState } from "react";
import feathersApp from "@/feathers.js";
import { useDispatch } from "react-redux";
import { addTask } from "@/redux/taskSlice";

export default function AddTask() {
  const dispatch = useDispatch();
  const [task, setTask] = useState("");

  async function addNewTask() {
    const response = await feathersApp.service("tasks").create({
      task,
      category: "Personal",
      isComplete: false,
    });
    dispatch(addTask(response));
  }

  function onKeyDown(event) {
    if (event.key == "Enter") {
      addNewTask();
    } else {
      setTask(event.target.value);
    }
  }

  return (
    <div className="add-task">
      <div className="left">
        <span className="red"></span>
        <span className="yellow"></span>
        <span className="blue"></span>
      </div>
      <div className="center">
        <input
          type="text"
          placeholder="What's your next task?"
          defaultValue={""}
          onKeyDown={onKeyDown}
        />
      </div>
      <div className="right">
        <button onClick={addNewTask}>Add Task</button>
      </div>
    </div>
  );
}
