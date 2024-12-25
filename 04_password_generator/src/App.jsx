import { useCallback, useEffect, useRef, useState } from "react"

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numberAllowed) str += "0123456789"
    if(characterAllowed) str += "!@#$%^&*-_+=[]{}~`|/?<>,." 

    for (let i = 0; i <= length; i++) {
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
  }, [length, numberAllowed, characterAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, characterAllowed, passwordGenerator])

  return (
    <>
      <h1 className='text-4xl text-center font-extrabold mt-4'>Password Generator</h1>
      <div className="w-full max-w-md mx-auto shadow-2xl rounded-2xl my-8 font-medium bg-white pb-2">
        <div className="flex shadow-xl rounded-2xl overflow-hidden mb-2">
          <input 
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordToClipboard} className="bg-white text-blue-500 border-2 border-blue-500 rounded-2xl font-medium py-1 px-4 shadow-md transition-all hover:text-white hover:bg-blue-500">Copy</button>
        </div>
        <div className="flex text-md gap-x-3">
          <div className="flex items-center gap-x-2 ml-2">
            <input
            type="range"
            min={8}
            max={20}
            value={length}
            className="cursor-pointer"
            onChange={(e) => setLength(e.target.value)}
            />
            <label>Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked = {numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }}
            />
            <label for="numberInput">Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input 
              type="checkbox" 
              defaultChecked = {characterAllowed}
              id="characterInput"
              onChange={() => {
                setCharacterAllowed((prev) => !prev)
              }}
            />
            <label for="characterInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
