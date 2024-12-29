import './App.css'
import { useEffect, useState } from 'react';
import { ToDoProvider } from './context';
import ToDoForm from './components/ToDoForm';
import ToDoItem from './components/ToDoItem';

function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (todo) => {
      setTodos((prev) => [{id: Date.now(), ...todo}, ...prev])
    }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo)))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  return (
    <ToDoProvider value={{todos, addTodo,updateTodo,deleteTodo, toggleComplete}}>
      <div className="py-4 rounded-3xl">
        <div className="w-full mx-auto rounded-3xl px-2 py-2 text-black bg-gray-400 p-4">
          <h1 className="text-3xl font-extrabold text-center mb-4 mt-2 bg-gray-400">Manage Your Todos</h1>
          <div className="mb-4">
            <ToDoForm/> 
          </div>
          <div className="flex flex-wrap gap-y-3 bg-gray-400">
            {todos.map((todo) => (
              <div key={todo.id} className='w-full bg-gray-400'>
                <ToDoItem todo={todo}/>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ToDoProvider>
  )
}

export default App
