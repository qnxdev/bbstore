import Link from "next/link";
import FileType from "./FileType";
import {Icon} from "./icon";
import Review from "./review";
import setStar from "./star.js";

export default function Content({ data,type }) {
    const star = setStar(data.rating);
    return (
        <div>
            <style jsx>
                {`
                .edit-container{
                    display: flex;
                    padding: 10px;
                    align-items: center;
                    justify-content: flex-end;

                }
                    .edit{
                        display: flex;
                        padding: 10px;
                        align-items: center;
                        justify-self: center;
                        margin: 10px 20px 0 20px;
                        border: 1px solid #0070f3;
                        border-radius: 7px;
                        cursor: pointer;
                        text-align: center;
                    }
                    .edit p{
                        color: #0070f3;
                        margin: 0;
                        margin-left: 10px;
                    }
                    .cmain {
                        display: flex;
                        justify-content: center;
                        padding: 2rem;
                        padding-top: 0px;
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
                    @media (max-width: 640px) {
                        .detail {
                            padding: 0 10%;
                        }
                        .button {
                            font-size: inherit;
                            padding: 10px 2rem;
                        }
                        .edit-container{
                            padding-bottom: 0;
                        }
                    }
                `}
            </style>
            <div className="edit-container">
            <div className="edit">
                <svg id="Layer_1" enableBackground="new 0 0 24 24" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g><path stroke="#fff" d="m13.12 24h-2.24c-.757 0-1.396-.567-1.486-1.32l-.239-1.876c-.477-.155-.937-.346-1.374-.569l-1.494 1.161c-.606.469-1.459.415-1.985-.126l-1.575-1.575c-.537-.521-.591-1.374-.122-1.979l1.161-1.495c-.224-.437-.415-.897-.569-1.374l-1.88-.239c-.75-.092-1.317-.731-1.317-1.488v-2.24c0-.757.567-1.396 1.32-1.486l1.876-.239c.155-.477.346-.937.569-1.374l-1.16-1.494c-.47-.606-.415-1.46.127-1.986l1.575-1.575c.521-.537 1.375-.59 1.979-.122l1.494 1.162c.437-.223.897-.414 1.375-.569l.239-1.88c.09-.75.729-1.317 1.486-1.317h2.24c.757 0 1.396.567 1.486 1.32l.239 1.876c.478.155.938.346 1.375.569l1.494-1.161c.607-.469 1.459-.415 1.985.127l1.575 1.575c.537.521.591 1.374.122 1.979l-1.161 1.495c.224.437.415.897.569 1.374l1.88.239c.749.091 1.316.73 1.316 1.487v2.24c0 .757-.567 1.396-1.32 1.486l-1.876.239c-.155.477-.346.937-.569 1.374l1.161 1.494c.47.606.415 1.459-.127 1.985l-1.575 1.575c-.521.537-1.375.592-1.979.122l-1.495-1.161c-.437.224-.897.415-1.374.569l-.239 1.88c-.091.75-.73 1.317-1.487 1.317zm-5.39-4.86c.083 0 .168.021.244.063.551.308 1.148.556 1.774.736.192.055.333.219.358.417l.28 2.2c.03.251.247.444.494.444h2.24c.247 0 .464-.193.493-.439l.281-2.204c.025-.198.166-.362.358-.417.626-.18 1.223-.428 1.774-.736.175-.098.393-.081.55.042l1.75 1.36c.201.156.483.143.655-.034l1.585-1.585c.181-.176.195-.458.039-.66l-1.36-1.75c-.123-.158-.14-.375-.042-.55.308-.551.556-1.148.736-1.774.055-.192.219-.333.417-.358l2.2-.28c.251-.031.444-.248.444-.495v-2.24c0-.247-.193-.464-.439-.493l-2.204-.281c-.198-.025-.362-.166-.417-.358-.18-.626-.428-1.223-.736-1.774-.098-.175-.082-.392.042-.55l1.36-1.75c.157-.202.143-.484-.033-.654l-1.585-1.585c-.175-.182-.458-.196-.66-.039l-1.75 1.36c-.159.123-.376.14-.551.042-.549-.308-1.146-.555-1.774-.736-.192-.055-.333-.219-.358-.417l-.28-2.2c-.031-.252-.248-.445-.495-.445h-2.24c-.247 0-.464.193-.493.439l-.281 2.204c-.025.198-.166.362-.358.418-.628.18-1.225.428-1.774.735-.175.099-.392.081-.551-.041l-1.75-1.36c-.202-.157-.483-.143-.654.033l-1.585 1.586c-.181.176-.195.458-.039.66l1.36 1.75c.123.158.14.375.042.55-.309.551-.556 1.148-.736 1.774-.055.192-.219.333-.417.358l-2.2.28c-.251.03-.444.247-.444.494v2.24c0 .247.193.464.439.493l2.204.281c.198.025.362.166.417.358.18.626.428 1.223.736 1.774.098.175.082.392-.042.55l-1.36 1.75c-.157.202-.143.484.033.654l1.585 1.585c.175.181.456.195.66.039l1.75-1.36c.091-.068.199-.104.308-.104z"/></g><g><path stroke="#fff" d="m12 17c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-9c-2.206 0-4 1.794-4 4s1.794 4 4 4 4-1.794 4-4-1.794-4-4-4z"/></g></svg>
                <Link href={`/edit/${type}/${data.id}`} prefetch={false}><p>Edit & Update</p></Link>
            </div>
            </div>
            <div className='cmain'>
                <Icon src={data.icon} alt={data.name} />
                <div className="desc">
                    <h2>{data.name}</h2>
                    <h4 className='vendor'>{data.vendor}</h4>
                    {/*<img src={star} alt={data.rating + ` star`} />*/}
                </div>
            </div>
            <div className='get'>
                <a href={data.git} className='button sc'>Source Code</a>
                <a target='_blank' href={data.download} className='button dl'>Download</a>
            </div>
            <div className='detail'>
                <div className='details'>
                    <h4>Version: {data.version}</h4>
                    <FileType type={data.filetype || "ZIP"}/>
                    <p>{data.description}</p>
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