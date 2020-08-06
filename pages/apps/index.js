import Page from '../../components/page';
import { AppData } from '../../appdata';

export default function Apps() {
    return (
        <Page title={`All Apps - BlackBerry Store`}>
            <style jsx>{`
                .all {
                    z-index: 1;
                }
                #title {
                    margin: 0 15rem; 
                }
                .array {
                    display: flex;
                    flex-wrap: wrap;
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
            `}</style>
            <div className='all'>
                <div id='title'>
                    <h2>Apps</h2>
                    {/*<input type='text' placeholder='Search' className='search'/>*/}
                </div>
                <div className='top'>
                    <div className='array'>
                        {AppData.map(app => (
                            <a href={`/apps/` + app.appid} className='item'>
                                <img src={'/' + app.icon} alt='Icon' className='icon' />
                                <h4 className='apptext'>{app.name.length < 15 ? (app.name) : (app.name.slice(0, 15) + `..`)}</h4>
                            </a>
                        ))}
                    </div>
                </div>
                </div>
        </Page >
    );
}