import './App.css'
import Card from './components/Card'

function App() {
  return (
    <>
      <h1 className='bg-gray-700 text-red-800 p-4 rounded-2xl mb-4'>Tailwind Test 1</h1>
      <Card subject="Chemistry" marks="89"/>
      <Card subject= "Mechanical" marks="87" teacher= "Mr. Manish Gupta"/>
    </>
  )
}

export default App
