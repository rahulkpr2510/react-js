import React, { useState } from 'react'

function App() {
  let [bgColor, setBgColor] = useState('white')
  
  return (
    <>
      <div className="w-full h-screen duration-1000" style={{ backgroundColor: bgColor }}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex  flex-wrap justify-center gap-4 shadow-2xl bg-stone-500 px-4 rounded-full m-4 p-2 border-2 border-black'>
            <button onClick={() => setBgColor("red")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-red-600 font-bold border-2 border-black'>RED</button>
            <button onClick={() => setBgColor("green")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-green-600 font-bold border-2 border-black'>GREEN</button>
            <button onClick={() => setBgColor("blue")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-blue-800 font-bold border-2 border-black'>BLUE</button>
            <button onClick={() => setBgColor("pink")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-pink-300 font-bold border-2 border-black'>PINK</button>
            <button onClick={() => setBgColor("purple")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-purple-600 font-bold border-2 border-black'>PURPLE</button>
            <button onClick={() => setBgColor("black")} className='outline-2 px-5 rounded-full text-white shadow-2xl bg-black font-bold border-2 border-white'>BLACK</button>
            <button onClick={() => setBgColor("yellow")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-yellow-300 font-bold border-2 border-black'>YELLOW</button>
            <button onClick={() => setBgColor("orange")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-orange-400 font-bold border-2 border-black'>ORANGE</button>
            <button onClick={() => setBgColor("white")} className='outline-2 px-5 rounded-full text-black shadow-2xl bg-white font-bold border-2 border-black'>RESET</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
