import React,{useState,useEffect} from "react";
import './App.css';

import From from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const[inputText,setInputText] = useState("");
  const[todos,setTodos] =useState([]);
  const[status,setStatus] = useState("add");
  const[filteredTodos, setFilterTodos]=useState([]);

  useEffect(()=>{
    filteredStatus()
  },[todos,status])

  const filteredStatus=()=>{
    switch(status){
      case "completed":
        setFilterTodos(todos.filter(todo=>todo.completed===true))
        break;
      case "uncompleted":
        setFilterTodos(todos.filter(todo=>todo.completed=== false))
        break;
      default:
        setFilterTodos(todos)
        break;  
    }
  }
 
    return (
    <div className="App">
      <header>
        Jatin's Todo List 
      </header>
      <From todos={todos} setTodos ={setTodos} setInputText={setInputText} inputText={inputText} setStatus={setStatus}/>
      <TodoList filteredTodos={filteredTodos} todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
