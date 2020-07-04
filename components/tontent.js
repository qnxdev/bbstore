import Icon from "./icon";
import Review from "./review";
import setStar from "./star.js";

export default function Tontent({ data }) {
    const star = setStar(data.rating);
    return (
        <div>
            <div>
                <Icon src={data.icon} alt={data.name} />
                <h2>{data.name}</h2>
                <h4>{data.vendor}</h4>
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
            </div>
        </div >
    );
}