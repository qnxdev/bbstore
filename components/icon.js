export default function Icon({ src }) {
    return (
        <div className='icon'>
            <style jsx>
                {`
                    img {
                        margin: 1rem;
                        width: 70%;
                    }
                `}
            </style>
            <img src={'/'+src} alt="icon" width="10%" />
        </div>
    );
}