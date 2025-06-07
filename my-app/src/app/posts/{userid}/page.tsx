import { PostProps } from "../page";

export default async function DetailPost({
    params
}: {
    params:Promise<{ userid : string }>
})
    {   

    const { userid }  = await params;

    const response = await fetch(`https://dummyjson.com/posts/${userid}`);
    const data: PostProps = await response.json();

    return(
        <div className="text-center">
            <h1>Detalhe do post: {data.userid}</h1>
            <h2>{data.title}</h2>
            <p>{data.body}</p>
        </div>
    )
}