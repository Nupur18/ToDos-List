import React from 'react'
import { TodoItem } from './TodoItem';    // or ../MyComponents/TodoItem

export const Todos = (props) => {
    let myStyle = {
        minHeight: "50vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Todos List</h3>
            {/* using for loop to display all the Todos */}
            {props.todos.length === 0 ? "No Todo to display" :
                props.todos.map((todo) => {
                    return (<TodoItem todo={todo} key={todo.sno} onDelete={props.onDelete} />)
                })
            }
        </div>
    )
}
// {onDelete} is a method