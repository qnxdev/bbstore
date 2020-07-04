import Link from 'next/link';

export default function Header() {
    return (
        <div className='header'>
            <Link href='/'>
                <p>Logo</p>
            </Link>
            <Link href='/apps'>
                <p>Apps</p>
            </Link>
            <Link href='/games'>
                <p>Games</p>
            </Link>
            <Link href='/tools'>
                <p>Tools</p>
            </Link>
            <Link href='/develop'>
                <p>Develop</p>
            </Link>
            <Link href='/develop'>
                <p>Github</p>
            </Link>
        </div>
    );
}