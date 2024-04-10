import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    category: {}
}

const taskSlice = createSlice({
    name: "task",
    initialState,
    reducers: {
        setTasksToCategory: async function (state, action){
            console.log("payload", action.payload)
            // const { category, data } = payload
            // state.category[category] = data
        },
        addTask: async function (state, payload) {
            const { category, taskDescription, feathersApp } = payload

            const response = await feathersApp.service("tasks").create({
                task: taskDescription,
                isCompleted: false,
                category
            })

            state.category[category].push(response)
        },
        toggleTaskCompletionStatus: async function (state, action) {
            const { taskId, category, isCompleted, feathersApp } = action.payload

            const response = await feathersApp.service('tasks').update(
                taskId,
                {
                    isCompleted
                }
            )

            state.category[category].forEach(
                (taskEl, index, arr) => {
                    if (taskEl._id == taskId) {
                        arr[index] = response
                    }
                }
            )
        },
        editTaskDescription: function (state, action) {
            const { taskId, category, taskDescription } = action.payload

            state.category[category].forEach(
                (taskEl, index, arr) => {
                    if (taskEl._id == taskId) {
                        arr[index].taskDescription = taskDescription
                    }
                }
            )
        },
        deleteTask: function () {},
        createCategory: function () { },
        editCategoryDescription: function () { },
        deleteCategory: function () { }
    }
})

export const { 
    setTasksToCategory, 
    addTask, 
    toggleTaskCompletionStatus, 
    editTaskDescription,
    deleteTask,
    createCategory,
    editCategoryDescription,
    deleteCategory
} = taskSlice.actions

export default taskSlice.reducer