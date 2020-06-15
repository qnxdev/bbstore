import Link from 'next/link';

export default function Header(){
    return(
        <div className='header'>
            <Link href='/'>
                Logo
            </Link>
            <Link href='/apps'>
                Apps
            </Link>
            <Link href='/games'>
                Games
            </Link>
            <Link href='/tools'>
                Tools
            </Link>
            <Link href='/develop'>
                Develop
            </Link>
            <Link href='/develop'>
                Github
            </Link>
        </div>
    );
}