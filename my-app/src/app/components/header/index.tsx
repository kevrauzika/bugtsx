import Link from 'next/link'

export function Header(){
    return(
        <header className="flex items-center px-2 py-4 bg-zinc-700 text-white">
            <div>
                <h1>Site</h1>
            </div>

            <nav>
                <ul className = "flex items-center justify-center gap-2">
                    <li>
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li>
                        <Link href={'/contatos'}>Contatos</Link>
                    </li>
                    <li>
                        <Link href={'/dashboard'}>Dashboard</Link>
                    </li>
                    <li>
                        <Link href={'/sobre'}>Sobre</Link>
                    </li>
                    <li>
                        <Link href={'/posts'}>Posts</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}