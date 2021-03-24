import Loader from "./Loader";

export default function LoaderWrapper(){
    return <div className="wrapper">
        <Loader/>
        <style jsx>{`

        .wrapper{
            padding: 20vh 0;
          }
        `}</style>
    </div>
}