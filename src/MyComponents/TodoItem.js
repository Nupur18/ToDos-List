import React from 'react'

export const TodoItem = ({ todo, onDelete }) => {
    return (
        <>
        <div>
            <h4>{todo.title}</h4>
            <p>{todo.desc}</p>
            <button className="btn btn-sm btn-danger" onClick={() => { onDelete(todo) }}>Delete</button>
            {/* 
            here we are calling onDelete function within arrow function
            if we call function directly it gets called during rendering time
            if we put the function within arrow function we are basically passing the function (not calling)
            if we write only onClick = {onDelete} we are passing the function (not calling)
            function passing - {onDelete}       function calling - {onDelete(todo)}
            */}
        </div>
        <hr/>
        </>
    )
}
