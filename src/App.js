import './App.css';
import Header from "./MyComponents/Header"
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";
import { AddTodo } from "./MyComponents/AddTodo";

import React, { useState } from 'react';

function App() {
  const onDelete = (todo) => {
    console.log(" i delete ", todo);


    setTodos(todos.filter((d) => {
      return d !== todo;
    }));

  }

  const addtodo = (title,desc) =>{
    console.log("added",title,desc)
  }

  // const [state, setstate] = useState(initialState)
  const [todos, setTodos] = useState([
    {
      sno: 1,
      title: "finish Errors",
      desc: "finish the error and uplode the project"
    },
    {
      sno: 2,
      title: "finish 2",
      desc: "finish the 2 and uplode the project"
    },
    {
      sno: 3,
      title: "finish 3",
      desc: "finish the 3 and uplode the project"
    }
  ]);

  return (
    <>
      <Header title="My Todos List" searchBar={false} />

      <AddTodo addTodo={addTodo} />

      {/* todos object is passed inside todos to todos.js  */}
      <Todos todos={todos} onDelete={onDelete} />


      <Footer />
    </>
  );
}

export default App;
