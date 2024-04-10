import React from 'react'
import Task from '../task/task'

export default function TaskList( props ) {
    const lists = props.lists
  return (
    <div className="task-list">
        {lists.map( (task)=> <Task task={task}/> )}
    </div>
  )
}
