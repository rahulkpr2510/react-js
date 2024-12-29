import './App.css'
import AddTodo from './components/AddToDo'
import ToDos from './components/ToDos'

function App() {

  return (
    <>
      <h1 className='text-3xl font-extrabold text-black'>Learn about Redux Toolkit</h1>
      <AddTodo/>
      <ToDos/>
    </>
  )
}

export default App
