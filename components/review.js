import setStar from './star';

export default function Review({ item }) {
    return (
        <div>
            <p>{item.name}</p>
            <img src={setStar(item.rated)} alt={item.rated + `star`} />
            <p>{item.review}</p>
        </div>
    );
}