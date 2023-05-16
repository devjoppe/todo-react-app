// Services
import {getTodos} from "../services/api.tsx";

// Components
import TodoInput from "./TodoInput.tsx";
import TodoItem from "./TodoItem.tsx";

// Interface
import {todoItem} from "../interface/todo.tsx";

// React
import {useCallback, useEffect, useState} from "react";
import TodoFilter from "./TodoFilter.tsx";

const TodoForm = () => {

    const [todoList, setTodoList] = useState<todoItem[] | null>([])

    // Data handling
    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [filterUrl, setFilterUrl] = useState("/todos")

    const fetchData = useCallback(async () => {
        console.log("Fetch start...")

        setTodoList([])
        setIsLoading(true)

        try{
            setTodoList(await getTodos(filterUrl))
            setError(null)
        } catch (err:any) {
            setError(err.message)
            setTodoList(null)
        } finally {
            setIsLoading(false)
            console.log("Fetch completed")
        }
    }, [filterUrl])

    useEffect(() => {
        fetchData().then(() => {
            console.log("Data received")
        })
    }, [fetchData])

    // Run this after each action -> Create, update, delete
    const updateList = () => {
        fetchData().then(() => {
            console.log("Update list and run fetchData")
        })
    }

    const addFilterUrl = (url:string) => {
        setFilterUrl(url)
    }

    return(
        <div className="col-8">
            <TodoInput updateList={updateList} />
            <TodoFilter addFilterUrl={addFilterUrl}/>
            <div className="table-wrapper">
                {isLoading && <p>Loading...</p>}
                {error && <p>{error}</p>}
                <table className="table table-hover table-bordered w-full">
                    <thead>
                    <tr>
                        <th>ID.</th>
                        <th>Todo item</th>
                        <th>Type</th>
                        <th>status</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                    {todoList && !isLoading &&
                        <TodoItem todoList={todoList} updateList={updateList} />
                    }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default TodoForm