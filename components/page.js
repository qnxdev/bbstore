import PageContainer from './page-container';
import Header from './header';

export default function Page({ title, description, children }) {
    return (
        <PageContainer title={title} description={description}>
            <Header />
            {children}
            <footer>
                <a
                    href="https://github.com/qnxdev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Copyright &copy; 2020 <span className='blue'>ASG&reg;</span>. All rights reserved.
                </a>
            </footer>
            <style jsx>{`
            .blue {
                color: #0070f3;
            }
                footer {
                    margin-top: 25vh;
                    width: 100%;
                    height: 50px;
                    border-top: 1px solid #222;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
                  a {
                      text-decoration: none;
                      color: #aaa;
                  }
            `}</style>
            <style jsx global>{`
                html,
                body {
                    min-width: 200px;
                    max-width: 100vw;
                    padding: 0;
                    margin: 0;
                    background: #000;
                    color: #fff;
                    font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Roboto, Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue, sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
        </PageContainer>
    );
}