import Link from 'next/link';

export default function Header() {
    return (
        <div className='header'>
            <div id='hcont'>
                <Link href='/'>
                    <p id='Logo'>BlackBerry Store</p>
                </Link>
                    <Link href='/apps' className='nomob'>
                        <p className='headlink nomob'>Apps</p>
                    </Link>
                    <Link href='/games' className='nomob'>
                        <p className='headlink nomob'>Games</p>
                    </Link>
                    <Link href='/tools' className='nomob'>
                        <p className='headlink nomob'>Tools</p>
                    </Link>
                    <Link href='/develop' className='nomob'>
                        <p className='headlink nomob'>Develop</p>
                    </Link>
                <a className='headlink flex' href='https://github.com/qnxdev/bbstore' target='_blank'>
                    <img src="data:image/svg+xml, %3Csvg xmlns='http://www.w3.org/2000/svg' width='20px' height='20px' viewBox='0 0 17 16' fill='none' class='jsx-4292637755'%3E%3Cg clip-path='url(githublogo)' class='jsx-4292637755'%3E%3Cpath fill='white' fill-rule='evenodd' d='M8.18391.249268C3.82241.249268.253906 3.81777.253906 8.17927c0 3.46933 2.279874 6.44313 5.451874 7.53353.3965.0991.49563-.1983.49563-.3965v-1.3878c-2.18075.4956-2.67638-.9912-2.67638-.9912-.3965-.8922-.89212-1.1895-.89212-1.1895-.69388-.4957.09912-.4957.09912-.4957.793.0992 1.1895.793 1.1895.793.69388 1.2887 1.88338.8922 2.27988.6939.09912-.4956.29737-.8921.49562-1.0904-1.78425-.1982-3.5685-.8921-3.5685-3.96496 0-.89212.29738-1.586.793-2.08162-.09912-.19825-.3965-.99125.09913-2.08163 0 0 .69387-.19825 2.18075.793.59475-.19825 1.28862-.29737 1.9825-.29737.69387 0 1.38775.09912 1.98249.29737 1.4869-.99125 2.1808-.793 2.1808-.793.3965 1.09038.1982 1.88338.0991 2.08163.4956.59475.793 1.28862.793 2.08162 0 3.07286-1.8834 3.66766-3.66764 3.86586.29737.3965.59474.8921.59474 1.586v2.1808c0 .1982.0991.4956.5948.3965 3.172-1.0904 5.4518-4.0642 5.4518-7.53353-.0991-4.3615-3.6676-7.930002-8.02909-7.930002z' clip-rule='evenodd' class='jsx-4292637755'%3E%3C/path%3E%3C/g%3E%3Cdefs class='jsx-4292637755'%3E%3CclipPath id='githublogo' class='jsx-4292637755'%3E%3Cpath fill='transparent' d='M0 0h15.86v15.86H0z' transform='translate(.253906 .0493164)' class='jsx-4292637755'%3E%3C/path%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E" />
                    <p id="github">Github</p>
                </a>
            </div>
            <div className='mobile'>
                <Link href='/apps'>
                    <p className='headlink mob'>Apps</p>
                </Link>
                <Link href='/games'>
                    <p className='headlink mob'>Games</p>
                </Link>
                <Link href='/tools'>
                    <p className='headlink mob'>Tools</p>
                </Link>
                <Link href='/develop'>
                    <p className='headlink mob'>Develop</p>
                </Link>
            </div>
            <style jsx>
                {`
                    .header {
                        border-bottom: 1px solid #222;
                    }
                    .nomob {
                        display: flex;
                    }
                    .mobile {
                        display:none;
                    }
                    .headlink {
                        margin: auto;
                        cursor: pointer;
                    }
                    #Logo {
                        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
                        font-size: 1.5rem;
                        margin: 0;
                        color: #0070f3;
                        cursor: pointer;
                    }
                    #hcont {
                        display: flex;
                        margin: 0.5rem 10rem;
                    }
                    a {
                        text-decoration: none;
                    }
                    .flex {
                        display: flex;
                    }
                    #github {
                        margin: 0;
                        margin-left: 5px;
                        color: #ddd;
                    }
                    p {
                        color: #aaa;
                    }
                    p:hover {
                        color: #fff;
                    }
                    @media (max-width: 960px) {
                        #hcont {                       
                            margin: 0.5rem 4rem;
                        }
                    }
                    @media (max-width: 720px) {
                        #hcont {                       
                            margin: 0.5rem 1rem;
                        }
                    }
                    @media (max-width: 640px) {
                        .nomob {
                            display: none;
                        }
                        .mobile {
                            display:flex;
                            border-top: 1px solid #222;
                        }
                        .mob {
                            color: #ccc;
                            padding: 7px 0;
                        }
                        .mob:hover,
                        .mob:focus,
                        .mob:active {
                          color: #0070f3;
                        }
                        .flex {
                            margin-left: 40%;
                        }
                    }
                    @media (max-width: 480px) {
                        #hcont {
                            margin: 0.5rem 0.5rem;
                            
                        }
                        .flex {
                            margin-left: 25%;
                        }
                    }
                `}
            </style>
        </div>
    );
}