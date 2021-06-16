import React, { useState } from 'react';
// import React from 'react'

export const AddTodo = (addTodo) => {

    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");

    const submit = (e) => {
        e.preventDefault();
        if(!title || !desc){
            alert("Title or Description cannot be blank")
        }
        props.AddTodo(title,desc);
    }

    addTodo(title,desc);

    return (
        <div className="container">
            <h3 className="text-center" >Add a Todo</h3>
               <form onSubmit={submit}>
                <div class="mb-3">
                    <label for="title" className="form-label">Todo Title</label>
                    <input type="email" className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" aria-describedby="emailHelp" />
                        {/* states value cnt change so we have to add th onchange method */}
                </div>
                <div className="mb-3">
                    <label for="desc" className="form-label">Todo Description</label>
                    <input type="text" className="form-control" value={desc} onChange={(e) => setDesc(e.target.value)} id="desc" />
                </div>
                <button type="submit" className="btn btn-sm btn-success">Add Todo</button>
            </form>
        </div>
    )
}
