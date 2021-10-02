export default function FileType({type}) {
    const colors={
        "BAR":"#0070f3",
        "APK":"#1dce1d",
        "ZIP":"#ffeb3b"
    }
    return <div title={"This is a "+type+" file"} className="filetype">
        <h4>{type}</h4>
        <style jsx>{`
            .filetype{
                cursor: pointer;
                border: 1px solid ${colors[type]};
                padding: 5px 10px;
                border-radius: 50px;
                width: fit-content;
                transition-duration: .5s;
            }
            .filetype:hover{
                transform : scale(1.1);
            }
            .filetype h4{
                font-size: 0.8rem;
                margin: 0;
                color: ${colors[type]};
            }
        `}</style>
    </div>
}

export const FileTypeSelector=({filetype, setFiletype})=>{
    return <div className="filetypeselector">
        <span onClick={()=>setFiletype("BAR")}>
            <div style={{borderColor:filetype=="BAR"?"#0070f3":"#999"}} className="filetype">
                <h4 style={{color:filetype=="BAR"?"#0070f3":"#999"}}>BAR</h4>
            </div>
        </span>
        <span onClick={()=>setFiletype("APK")}>
            <div style={{borderColor:filetype=="APK"?"#1dce1d":"#999"}} className="filetype">
                <h4 style={{color:filetype=="APK"?"#1dce1d":"#999"}}>APK</h4>
            </div>
        </span>
        <span onClick={()=>setFiletype("ZIP")}>
            <div style={{borderColor:filetype=="ZIP"?"#ffeb3b":"#999"}} className="filetype">
                <h4 style={{color:filetype=="ZIP"?"#ffeb3b":"#999"}}>ZIP</h4>
            </div>
        </span>
        <style jsx>{`
        .filetypeselector{
            display: flex;
            margin: 20px 10px;
        }
        .filetypeselector span{
            margin: 5px;
        }
            .filetype{
                cursor: pointer;
                border: 1px solid;
                padding: 5px 10px;
                border-radius: 50px;
                width: fit-content;
            }
            .filetype h4{
                font-size: 0.8rem;
                margin: 0;
            }
        `}</style>
    </div>
}