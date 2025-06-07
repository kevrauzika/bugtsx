'use client'

import { useEffect, useState } from "react"


export default function Teste(){
    const [posts, setPosts] = useState([])
    useEffect(() => {
        fetch('https://dummyjson.com/posts')
            .then(res => res.json())
            .then(data => setPosts(data.posts))
    },[])

    return(
        <div className="text-center">
            <h1>
                Pagina Cliente
            </h1>

            <div className="felx felx-col gap-4 mx-2">
                {posts.map((post: any) =>(
                    <div key={post.id} className="bg-black-200 p-4 rounded-md">
                        <h2 className="font-bold">{post.title}</h2>
                        <p>{post.body}</p>
                    </div>
                ))}
            </div>

            <button onClick={() => alert('teste')}>
                TESTE
            </button>
        </div>
        

    )
}