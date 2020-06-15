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
                    Copyright &copy; 2020 ASG&reg;. All rights reserved.
                </a>
            </footer>
            <style jsx>{`
                footer {
                    width: 100%;
                    height: 100px;
                    border-top: 1px solid #eaeaea;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                  }
            `}</style>
        </PageContainer>
    );
}