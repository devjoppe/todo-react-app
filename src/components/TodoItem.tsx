// React
import React from "react";

// Interface
import {todoItem} from "../interface/todo.tsx";

// Service
import {updateTodo} from "../services/api.tsx";

interface todoListProps {
    todoList: todoItem[]
    updateList: () => void
}

const TodoItem:React.FC<todoListProps> = ({todoList, updateList}) => {

    // Service -> Axios -> DB
    const updateTodoItem = (todo:todoItem) => {
        todo.completed = !todo.completed

        updateTodo(todo).then(() => {
            updateList()
            console.log("Status update complete:", todo)
        })
    }

    return(
        <>
            {todoList.map(todo => (
                <tr key={todo.id} className={ todo.completed ? 'table-success' : 'table-light' }>
                    <td>{todo.id}</td>
                    <td className={ todo.completed ? 'complete' : 'task' }>
                        {todo.todo}
                    </td>
                    <td>
                        {todo.type}
                    </td>
                    <td>{todo.completed ? "Completed" : "In progress"}</td>
                    <td>
                        <button className={`btn mr-2 ${todo.completed ? 'btn-warning' : 'btn-success'}`} onClick={() => {updateTodoItem(todo)}}>
                            {todo.completed ? 'Undo' : 'Finish'}
                        </button>
                        <button className="btn btn-danger">Delete</button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default TodoItem