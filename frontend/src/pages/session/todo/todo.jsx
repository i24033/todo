import "./todo.css"
import React, { useEffect, useState } from "react";
import { logOutUser } from "../../../redux/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import TaskList from "../../../components/tasksList/taskList";
import AddTask from "../../../components/addTask/addTask";
import feathersApp from "@/feathers.js";
import {setTasksToCategory} from "@/redux/taskSlice"

export default function Todo() {

  const dispatch = useDispatch();
  const {category} = useParams()
  const [todoData, setTodoData] = useState([])
  useEffect(()=>{
    (
      //IIFE
      async ()=>{
        const Category = category || "Personal"
        const response = await feathersApp.service("tasks").find({
          query:{
            category:Category
          }
        })
        console.log("Category",Category)
        console.log("response", response)
        dispatch( setTasksToCategory( {
          category:Category,
          data: response.data
        }) )
        setTodoData(response.data)
      }
    )()
  },[])

  const list = [
    { description: "asd", isCompleted: true },
    { description: "zxc", isCompleted: false },
    { description: "qwe", isCompleted: true },
    { description: "kal", isCompleted: false },
  ];
  return (
    <div className="todo">
      <div className="content">
        <div className="section-1" title="Task Category Description">
          <h2 className="title">Today's main focus is</h2>
          <input
            type="text"
            className="task-list-heading"
            defaultValue="Design Team Meeting"
          />
        </div>
        <AddTask />
        <TaskList lists={ []} />
      </div>
    </div>
  );
}
