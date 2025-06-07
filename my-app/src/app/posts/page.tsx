import { handleClientScriptLoad } from 'next/script';
import {Button} from '../components/button'
import link from 'next/link';
import Link from 'next/link';




export interface PostProps{
    id: number;
    title: string;
    body: string;
    userid: number;
}

interface ResponseProps {
    posts: PostProps[];
}

export default async function Posts(){
    'user client'
    const response = await fetch('https://dummyjson.com/posts');
    const data = await response.json();

    console.log(data);

    async function handleFetchPost(){
        'use server'
        console.log('teste');
    }

    async function handleSearchUsers(formData: FormData){
        'use server'
        const userid = formData.get('userid');
        const response = await fetch(`https://dummyjson.com/posts/user/${userid}`);
        const data = await response.json();
        console.log(data);
    }

    return(
        <div>
            <h1>Posts</h1>

            <button onClick={handleFetchPost}>Buscar</button>

            <form 
            className='gelx gap-2 my-4'
            action={handleSearchUsers}
            >
                <input 
                type="text"
                placeholder='id do usuario'
                className=' border border-gray-200 p-2'
                name='userid'
                />

                <button className='bg-blue-500 text-white p-2'
                type='submit'>
                    Buscar usuario
                </button>

                
            </form>
            <div className='flex flex-col gap-4 mx-2'>
                {data.posts.map((post: PostProps) => (
                    <div key={post.userid} className='bg-black-200 p-4 rounded-md'>
                        <h2 className='font-bold'>{post.title}</h2>
                        <p>{post.body}</p>
                        <Link className='bg-blue-500 text-white p-2'
                        href= {`/posts/${post.id}`}>
                            Acessar detalhes
                        </Link>
                    </div>
                ))}
            </div>

        </div>

        
    )

}