import './App.css';
import Header from "./MyComponents/Header"
import { Todos } from "./MyComponents/Todos";
import { Footer } from "./MyComponents/Footer";

function App() {

  const onDelete = () =>{
    console.log(" i delete ");
  }

  let todos = [     /* created a todos object */
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
  ]
  return (
   <>
   <Header title="My Todos List" searchBar={false} />
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
   </>
  );
}

export default App;
