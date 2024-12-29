import React, { useState } from 'react'
import { useTodo } from '../context';

function ToDoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

        if(!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }

    return (
        <form onSubmit={add} className="flex bg-gray-400">
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border-2 border-black rounded-l-3xl px-3 outline-none duration-150 bg-white py-1.5 placeholder:text-black"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
            />
            <button type="submit" className="rounded-r-3xl px-3 py-1 bg-green-600 text-white shrink-0 border-2 border-black">
                Add
            </button>
        </form>
    );
}

export default ToDoForm
