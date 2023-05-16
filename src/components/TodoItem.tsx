// React
import React from "react";

// Interface
import {todoItem} from "../interface/todo.tsx";

interface todoListProps {
    todoList: todoItem[]
}

const TodoItem:React.FC<todoListProps> = ({todoList}) => {

    // Service -> Axios -> DB
    const updateTodo = () => {
        console.log("Status update complete")

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
                        <button className={`btn mr-2 ${todo.completed ? 'btn-warning' : 'btn-success'}`}>
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