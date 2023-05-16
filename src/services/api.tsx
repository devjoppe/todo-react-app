// Import Axios
import axios from "axios"

// Interface
import {todoItem} from "../interface/todo.tsx";

const BASE_URL = 'http://localhost:3000'

// Get all Todos
export const getTodos = async () => {
    const response = await axios.get(`${BASE_URL}/todos`)
    if(!response) {
        throw new Error(`Error in the request: ${response}`)
    }
    return response.data
}

// Save new Data
export const saveTodo = async (newTodo:todoItem) => {
    const response = await axios.post(`${BASE_URL}/todos`, newTodo)
    if(!response) {
        throw new Error(`Error in the post request: ${response}`)
    }
    console.log(response.data)
    //getTodos().then(() => {console.log("Get new todo list")})
    //return response.data
}

// Update Data
export const updateTodo = async (todoItem:todoItem) => {
    const response = await axios.patch(`${BASE_URL}/todos/${todoItem.id}`, todoItem)
    if(!response) {
        throw new Error(`Error in the update request: ${response}`)
    }
    console.log(response.data)
}

export const deleteTodo = async (todoItem:todoItem) => {
    const response = await  axios.delete(`${BASE_URL}/todos/${todoItem.id}`, {data: todoItem})
    if(!response) {
        throw new Error(`Error in the delete request: ${response}`)
    }
    console.log(response.data)
}