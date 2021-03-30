import { useState, useEffect } from "react";

export default function Listing({ data, title, url, tools }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [resObj, setResObj] = useState([]);
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    setResObj(data);
    const results = data.filter(function (item) {
      if (
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
        return item;
    });
    setResObj(results);
  }, [searchTerm]);
  return (
    <div>
      <style jsx>{`
        .all {
          z-index: 1;
        }
        #title {
          margin: 0 15rem;
          display: flex;
        }
        .search {
          margin: auto 0 auto 70%;
          background: #000;
          color: #fff;
          border: 1px solid #0070f3;
          border-radius: 7px;
          text-align: center;
          font-size: 1rem;
          padding: 0.4rem;
        }
        .search:focus,
        .search:hover,
        .search:active {
          border-color: #0070f3;
        }
        .array {
          display: flex;
          flex-wrap: wrap;
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
          min-width: 0rem;
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
          max-width: 128px;
        }
        .apptext {
          text-align: center;
          margin: 5px auto;
          font-weight: normal;
        }
        @media (max-width: 960px) {
          #title {
            margin: 0rem 8rem;
          }
          .search {
            margin: auto 0 auto 50%;
          }
          .array {
            padding: 1%;
            margin: 1rem 2rem;
          }
          .item {
            min-width: 0%;
            margin: 1%;
            padding: 1%;
          }
        }
        @media (max-width: 640px) {
          #title {
            margin: 0 2rem;
          }
          .search {
            margin: auto 0 auto 45%;
            width: 8rem;
          }
          .icon {
            width: 80%;
          }
          .array {
            margin: 1rem;
          }
          .item {
            border-radius: 15px;
            min-height: 30%;
            padding: 3%;
          }
          .apptext {
            font-size: 12px;
          }
        }
        @media (max-width: 480px) {
          #title {
            font-size: 0.7rem;
          }
          .array {
            margin: 0.5rem;
          }
          .search {
            margin: auto 0 auto 45%;
            width: 6rem;
            padding: 0.2rem;
          }
          .search:focus,
          .search:hover,
          .search:active {
            margin: auto 0 auto 30%;
            width: 10rem;
          }
          .item {
            max-width: 30%;
          }
        }
      `}</style>
      <div className="all">
        <div id="title">
          <h2 id="text">{title}</h2>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Search"
            className="search"
          />
        </div>
        <div className="top">
          <div className="array">
            {resObj.map((app) => (
              <a href={url + app.id} className="item" key={app.id}>
                <img
                  src={tools ? "/" + app.icon : app.icon}
                  alt="Icon"
                  className="icon"
                />
                <h4 className="apptext">
                  {app.name.length < 15
                    ? app.name
                    : app.name.slice(0, 15) + `..`}
                </h4>
              </a>
            ))}
            {resObj.length == 0 && <h4>Nothing found.</h4>}
          </div>
        </div>
      </div>
    </div>
  );
}
