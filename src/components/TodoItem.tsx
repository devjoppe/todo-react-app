// React
import React from "react";

// Interface
import {todoItem} from "../interface/todo.tsx";

interface todoListProps {
    todoList: todoItem[]
}

const TodoItem:React.FC<todoListProps> = ({todoList}) => {
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
                        <button className="btn btn-danger mr-2">Delete</button>
                        <button className="btn btn-success">Finished</button>
                    </td>
                </tr>
            ))}
        </>
    )
}

export default TodoItem