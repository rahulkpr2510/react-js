import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const { userId } = useParams()
    return (
        <div className='bg-black text-white text-3xl font-bold rounded-3xl m-4 p-2'>User: {userId}</div>
    )
}

export default User