import Page from '../components/page';
import { AppData } from '../appdata';
/*import { GameData } from '../gamedata';*/

export default function Home() {
  return (
    <Page title={`BlackBerry Store`}>
      <main>
        {/*<input type='text' placeholder='Search' className='search'/>*/}
        <h1 className="title">
          Welcome to <a href="https://bb.sz7.me">BlackBerry Store!</a>
        </h1>
        <div className="grid">
          <a href="https://www.github.com/qnxdev/bbstore" className="card">
            <h3>Source Code &rarr;</h3>
            <p>Contribute to BlackBerry Store</p>
          </a>

          <a href="https://developer.blackberry.com" className="card">
            <h3>Learn &rarr;</h3>
            <p>Develop your own BB10 Apps</p>
          </a>
        </div>
      </main>
      <div className='all'>
        <div id='title'>
          <h2>Apps</h2>
        </div>
        <div className='top'>
          <h4 className='type'>Top Rated</h4>
          <div className='array'>
            {AppData.map(app => (
              <a href={`/apps/` + app.appid} key={app.appid} className='item'>
                <img src={'/' + app.icon} alt='Icon' className='icon' />
                <h4 className='apptext'>{app.name.length < 15 ? (app.name) : (app.name.slice(0, 15) + `..`)}</h4>
              </a>
            ))}
            <a href='/apps' className='item go'>
              <div className='arrow' title='More Apps'>
                <img src='arrow.png' alt='Next' className='img' />
              </div>
            </a>
          </div>
        </div>
        <div className='new'>
          <h4 className='type'>New Arrivals</h4>
          <div className='array'>
            {AppData.map(app => (
              <a href={`/apps/` + app.appid} key={app.appid} className='item'>
                <img src={'/' + app.icon} alt='Icon' className='icon' />
                <h4 className='apptext'>{app.name.length < 15 ? (app.name) : (app.name.slice(0, 15) + `..`)}</h4>
              </a>
            ))}
            <a href='/apps' className='item go'>
              <div className='arrow' title='More Apps'>
                <img src='arrow.png' alt='Next' className='img' />
              </div>
            </a>
          </div>
        </div>
        {/*
        <div id='title'>
          <h2>Games</h2>
        </div>
        <div className='top'>
          <h4 className='type'>Top Rated</h4>
          <div className='array'>
            {GameData.map(app => (
              <a href={`/apps/` + app.appid} className='item'>
                <img src={'/' + app.icon} alt='Icon' className='icon' />
                <h4 className='apptext'>{app.name.length < 15 ? (app.name) : (app.name.slice(0, 15) + `..`)}</h4>
              </a>
            ))}
            <a href='/apps' className='item go'>
              <div className='arrow' title='More Apps'>
                <img src='arrow.png' alt='Next' className='img' />
              </div>
            </a>
          </div>
        </div>
        <div className='new'>
          <h4 className='type'>New Arrivals</h4>
          <div className='array'>
            {GameData.map(app => (
              <a href={`/apps/` + app.appid} className='item'>
                <img src={'/' + app.icon} alt='Icon' className='icon' />
                <h4 className='apptext'>{app.name.length < 15 ? (app.name) : (app.name.slice(0, 15) + `..`)}</h4>
              </a>
            ))}
            <a href='/apps' className='item go'>
              <div className='arrow' title='More Apps'>
                <img src='arrow.png' alt='Next' className='img' />
              </div>
            </a>
          </div>
        </div>
            */}
      </div>

      <style jsx>{`
        .Page {
          background-color: #000;
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          color: #fff;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }
        .title {
          color: #eee;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .grid {
          display: flex;
          align-items: center;
          justify-content: center;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          min-width: 25em;
          margin: 1rem;
          padding: 1.5rem;
          text-align: left;
          color: #ccc;
          text-decoration: none;
          border: 1px solid #ccc;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active,
        .item:hover,
        .item:focus,
        .item:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }
        .all {
          border-top: 1px solid #222;
          margin-top: 2em;
          z-index: 1;
      }
      #title {
          margin: 0 15rem;
          color: #ddd;
      }
      .array {
          display: flex;
          justify-content: flex-start;
          margin: 1rem 5rem;
          border: 1px solid #222;
          border-radius: 15px;
          padding: 1rem;
          z-index: 3;
      }
      .type {
          margin: 1rem 5rem;
          color: #0070f3;
      }
      .item {
          min-width: 10rem;
          text-align: center;
          border: 1px solid #111;
          border-radius: 25px;
          margin: 1rem;
          padding: 1rem;
          text-decoration: none;
          color: #bbb;
          z-index: 2;
      }
      .icon {
          width: 75%;
      }
      .apptext {
          text-align: center;
          margin: 5px 0;
          font-weight: normal;
      }
      .arrow {
          border-radius: 45px;
          width: 100%;
          align-items: center;
          padding: 15%;
          right: 0;
          z-index: 10;
          cursor: pointer;
      }
      .img {
          width: 75%;
      }
      @media (max-width: 960px) {
        .title {
          font-size: 3rem;
        }
        .card {
          min-width: 18rem;
        }
        .array {
          padding: 1%;
          margin: 1rem 2rem;
      }
      .item {
          min-width: 20%;
          margin: 1%;
          padding: 1%;
      }
      .arrow {
          padding: 15%;
      }
      }
      @media (max-width: 640px) {
        #title {
          margin: 0 2rem;
        }
        .card {
          min-width: 80%;
        }
        .grid {
          width: 100%;
          flex-direction: column;
        }
        .img, .icon {
          width: 50%;
        }
        .array {
          margin: 1rem;
        }
        .arrow {
          padding: 30% 15%;
        }
      }
      @media (max-width: 480px) {
        .item {
          border: none;
          border-right: 1px solid #222;
          border-radius: 0px;
        }
        .go {
          border: none;
        }
        .arrow {
          padding: 50% 15%;
        }
      }
      
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          background: #000;
          color: #fff;
          font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </Page>
  )
}
