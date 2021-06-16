import React from 'react'
import {TodoItem} from "./TodoItem";

export const Todos = (props) => {
    return (
        <div className="container">
            <h3 className="text-center my-3" > Todos List</h3>

            {props.todos.length===0? "No todos for Today . ": 

            props.todos.map((todo) => {            /* while randering using map funt must pass a unique key*/
                return  <TodoItem todo = {todo} key={todo.sno} onDelete={props.onDelete} />  
            })

            }
        </div>
    )
}

