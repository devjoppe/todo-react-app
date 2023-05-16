// React
import React, {useState} from "react";

// Interface
import {buttonProp} from "../interface/button.tsx";

interface updateListProp {
    addFilterUrl: (data:string) => void
}

const TodoFilter:React.FC<updateListProp> = ({addFilterUrl}) => {

    const[buttons, setButtons] = useState([
        {
            name: "All",
            url: "/todos",
            active: true
        },
        {
            name: "Ongoing",
            url: "/todos/?completed=false",
            active: false
        },
        {
            name: "Completed",
            url: "/todos/?completed=true",
            active: false
        }
    ])

    const toggle = (selectedButton: buttonProp) => {
        setButtons(buttons.map(bt => {
            if (bt === selectedButton) {
                return { ...bt, active: !bt.active }; // Toggle the active property
            } else {
                return { ...bt, active: false };
            }
        }))
        if(selectedButton.url) {
            addFilterUrl(selectedButton.url)
        }
    }

    return(
        <div className="d-flex align-items-center col-12 mb-3 p-3 bg-light">
            <span className="font-weight-bold mr-3">Filter:</span>
            {buttons.map(button => (
                <button type="button" key={button.name} className={`btn ${button.active ? 'btn-primary' : null}`} onClick={(e) => {
                    e.preventDefault()
                    toggle(button)
                }}>{button.name}</button>
            ))}
        </div>
    )
}

export default TodoFilter