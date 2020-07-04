import Icon from "./icon";
import Review from "./review";
import setStar from "./star.js";

export default function Content({ data }) {
    const star = setStar(data.rating);
    return (
        <div>
            <div>
                <Icon src={data.icon} alt={data.name} />
                <h2>{data.name}</h2>
                <h4>{data.vendor}</h4>
                <img src={star} alt={data.rating + ` star`} />
                <a href={data.git} >
                    Source Code
                </a>
                <a href={`/download/` + data.download} >
                    Download
                </a>
            </div>
            <div>
                <h4>Version: {data.version}</h4>
                <p>{data.description}</p>
                <div>
                    <h3>Screenshots</h3>
                    <img src={data.scr[0]} alt="Image not available" />
                    <img src={data.scr[1]} alt="Image not available" />
                    <img src={data.scr[2]} alt="Image not available" />
                </div>
                <div>
                    <h3>Reviews</h3>
                    <Review item={data.reviews[0]} />
                    <Review item={data.reviews[1]} />
                </div>

            </div>
        </div >
    );
}