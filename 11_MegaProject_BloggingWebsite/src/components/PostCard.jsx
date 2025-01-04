import React from 'react'
import uploadservice from '../appwrite/upload'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {
    return (
        <Link to={`/post/${$id}`}>
            <div className='w-full bg-gray-100 rounded-3xl p-4'>
                <div className='w-full justify-center mb-4'>
                    <img src={uploadservice.getFilePreview(featuredImage)}  alt={title} className='rounded-2xl'/>
                </div>
                <h2 className='text-xl font-bold text-black'>{title}</h2>
            </div>
        </Link>
    )
}

export default PostCard
