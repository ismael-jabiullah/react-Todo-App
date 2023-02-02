import React, { useState } from 'react';
import Todos from './Todos';
import { v4 as uuidv4 } from "uuid";

import style from './home.module.css';

import NewTodo from './NewTodo';





export default function Home() {
const [todos, setTodos] = useState([]);
const handleRemoveTodo = (id) => {
  setTodos((prevTodos) =>{
    const filteredTodos = prevTodos.filter((todo) => todo.id !== id);
    return filteredTodos;
  })
}

const handleAddTodo = (todo) => {

setTodos((prevTodos) => {
    return [ ...prevTodos, {id: uuidv4(),todo}]
});

 };



  return (
    <div className={style.container}>
        <h1 style={{color:"white"}}>Todo App</h1>
        <NewTodo  onAddTodo={handleAddTodo}/>
        <Todos todos={todos}  onRemoveTodo={handleRemoveTodo}/>
    </div>
  )
}
