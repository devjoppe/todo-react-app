// React
import React, {useState} from "react";

// UniqId
import uniqid from "uniqid";

// Services
import {saveTodo} from "../services/api.tsx";

interface updateListProp {
    updateList: () => void
}

const TodoInput:React.FC<updateListProp> = ({updateList}) => {

    const options = ['Personal', 'Work']

    // Create or get correct userId
    const userId = 123

    const [textInput, setTextInput] = useState('')
    const [selectInput, setSelectInput] = useState(options[0])

    const saveTodoItem = () => {
        console.log("Saving todo")
        const newTodo = {
            id: uniqid(),
            todo: textInput,
            completed: false,
            userId: userId,
            type: selectInput
        }
        // Service -> Axios -> DB
        saveTodo(newTodo).then(() => {
            console.log("Save complete")
            setTextInput('')
            setSelectInput(options[0])
            updateList()
        })
    }

    return(
        <div className="d-flex align-items-center col-12 mb-3 p-0">
            <form className="d-flex mb-0 col-12 p-0" onSubmit={(e: React.FormEvent) => {
                e.preventDefault()
                saveTodoItem()
            }}>
                <input type="text" className="form-control mr-3" id="formGroupExampleInput" placeholder="Enter a task here"
                   value={textInput}
                   onChange={e => setTextInput(e.target.value)}
                   required />
                <select className="form-control col-3 mr-3"
                    value={selectInput}
                    onChange={e => {setSelectInput(e.target.value)}}>
                    {options.map(item => (
                        <option key={item} value={item}>{item}</option>
                    ))}
                </select>
                <button type="submit" className="btn btn-primary" disabled={textInput.length < 1}>Save</button>
            </form>
        </div>
    )
}

export default TodoInput