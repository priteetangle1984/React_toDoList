import { useState } from 'react'
import './App.css'
import TodoList from './components/TodoList'

function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (e) => {
    console.log(e.target.value)
    const newTodo = { text: e.target.value, id: Date.now(), completed: false};
    setTodos([newTodo, ...todos]);
    e.target.value = '';
    console.log(todos);
  }

  const completeTodo = (id, e) => {
    const todosCopy = [...todos];
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id);
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    setTodos([...todosCopy]);
  }

  return (
    <>
    <h1>To Do List App</h1>
    <TodoList 
      todos={todos}
      addTodo={addTodo}
      completeTodo = {completeTodo}
    />
    </>
  )
}

export default App