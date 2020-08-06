export default function Listing({ data, title, url }) {
    return (
        <div>
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
                .item:hover,
                .item:focus,
                .item:active {
                  color: #0070f3;
                  border-color: #0070f3;
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
                    <h2>{title}</h2>
                    {/*<input type='text' placeholder='Search' className='search'/>*/}
                </div>
                <div className='top'>
                    <div className='array'>
                        {data.map(app => (
                            <a href={url + app.appid} className='item'>
                                <img src={'/' + app.icon} alt='Icon' className='icon' />
                                <h4 className='apptext'>{app.name.length < 15 ? (app.name) : (app.name.slice(0, 15) + `..`)}</h4>
                            </a>
                        ))}
                    </div>
                </div>
            </div>

        </div>
    )
}