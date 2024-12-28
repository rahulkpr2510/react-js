import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    // const [data, setData] = useState([])
    // useEffect(() => {
    //  fetch('https://api.github.com/users/rahulkpr2510')
    //  .then(response => response.json())
    //  .then(data => {
    //     console.log(data);
    //     setData(data)
    //  })
    // }, [])
    
  return (
    <div className='text-center m-4 bg-black text-white p-4 text-3xl font-bold rounded-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={150} className='m-4 rounded-3xl'/>
    </div>
  )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/rahulkpr2510')
    return response.json()
}