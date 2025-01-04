import React, { useEffect, useState } from 'react'
import postservice from '../appwrite/post.js'
import {Container, PostCard} from '../components/index.js'

function Home() {
//     const [posts, setPosts] = useState([])
//     useEffect(() => {
//         postservice.getPosts().then((posts) => {
//             if(posts){
//                 setPosts(posts.documents)
//             }
//         })
//     }, [])

//     if (posts.length === 0) {
//         return (
//             <div className="w-full py-8 mt-4 text-center">
//                 <Container>
//                     <div className="flex flex-wrap">
//                         <div className="p-2 w-full">
//                             <h1 className="text-2xl font-bold hover:text-[#ff0]">
//                                 Login to read posts
//                             </h1>
//                         </div>
//                     </div>
//                 </Container>
//             </div>
//         )
//     }

//     return (
//         <div className='w-full py-8'>
//             <Container>
//                 <div className='flex flex-wrap'>
//                     {posts.map((post) => (
//                         <div key={post.$id} className='p-2 w-1/4'>
//                             <PostCard {...post} />
//                         </div>
//                     ))}
//                 </div>
//             </Container>
//         </div>
//     )
// }

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <h1 className='text-7xl font font-extrabold leading-tight mb-4 text-white'>
            Welcome to <span className='text-[#ff0]'>BanterBoard</span> -
        </h1>
        <h1 className="text-4xl font-extrabold text-white leading-tight mb-8">
        Your Digital Canvas for Expression
        </h1>

        <p className="text-lg text-white leading-relaxed">
        Step into a space where your voice matters, and every story counts. 
        </p>
        <p className="text-lg text-white leading-relaxed mb-8">
        From hot takes to heartfelt reflections, BanterBoard is the home for creators, thinkers, and storytellers ready to make waves. 
        </p>

        <div className="flex justify-center space-x-6">
          <a href="/all-posts" className="px-6 py-3 bg-black text-white font-bold rounded-full border-2 border-[#ff0]">
            Explore Now
          </a>

          <a href="/add-post" className="px-6 py-3 bg-[#ff0] text-black font-bold rounded-full">
            Start Writing
          </a>
        </div>
      </div>
    </div>
  );
};


export default Home
