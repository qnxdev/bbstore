import Icon from "./icon";
import Review from "./review";
import setStar from "./star.js";

export default function MinContent({ data }) {
    const star = setStar(data.rating);
    return (
        <div>
            <style jsx>
                {`
                    .cmain {
                        display: flex;
                        justify-content: center;
                        padding: 2rem;
                    }
                    .desc {
                        margin: 0rem;
                    }
                    .vendor {
                        font-weight: normal;
                    }
                    .get, .detail{
                        display: flex;
                        justify-content: center;
                    }
                    .button {
                        font-size: 20px;
                        margin: 1rem;
                        border-radius: 7px;
                        padding: 10px 3.5rem;
                        cursor: pointer;
                        text-decoration: none;
                    }
                    .sc {
                        color: #222;
                        background: #fff;
                        box-shadow: 0 12px 20px rgba(93,93,93,0.23);
                    }
                    .dl {
                        color: #fff;
                        background: #0070f3;
                        box-shadow: 0 2px 14px 0 rgba(0,118,255,0.39);
                    }
                    .detail {
                        padding: 0 20%;
                    }
                    .details {
                        margin-top: 5%;
                        border: 1px solid #222;
                        border-radius: 15px;
                        padding: 1% 5%;
                    }
                    .blue {
                        color: #0070f3;
                        font-weight: bold;
                    }
                `}
            </style>
            <div className='cmain'>
                <Icon src={data.icon} alt={data.name} />
                <div className="desc">
                    <h2>{data.name}</h2>
                    <h4 className='vendor'>{data.vendor}</h4>
                    {/*<img src={star} alt={data.rating + ` star`} />*/}
                </div>
            </div>
            <div className='get'>
                <a href={`/download/` + data.download} className='button dl'>Download</a>
            </div>
            <div className='detail'>
                <div className='details'>
                    <h4>Version: {data.version}</h4>
                    <p>{data.description}</p>
                    <p><a className='blue'>How to:</a> {data.description}</p>
                    {/*<div>
                    <h3>Screenshots</h3>
                    <img src={data.scr[0]} alt="Image not available" />
                    <img src={data.scr[1]} alt="Image not available" />
                    <img src={data.scr[2]} alt="Image not available" />
                </div>
                <div>
                    <h3>Reviews</h3>
                    <Review item={data.reviews[0]} />
                    <Review item={data.reviews[1]} />
                </div>*/}
                </div>
            </div>
        </div >
    );
}