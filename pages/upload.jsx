import { useState } from "react";
import { useRouter } from "next/router";
import Page from "../components/page";
import { firebaseInit } from "../lib/firebase";
import Uploader from "../components/Upload";

export default function UploadPage() {
  const router = useRouter();
  const firebase = firebaseInit();
  const [type, setType] = useState("App");
  const [data, setData] = useState({
    name: "",
    vendor: "",
    version: "",
    description: "",
    git: "",
  });

  return (
    <Page title={`Upload and Contribute | BB10 Application Store`}>
      <div className="typeContainer">
        <h2>Add {type}</h2>
        <div className="typeSelector">
          <h4
            className={`type${type == "App" ? " selected" : ""}`}
            onClick={() => setType("App")}
          >
            App
          </h4>
          <h4
            className={`type${type == "Game" ? " selected" : ""}`}
            onClick={() => setType("Game")}
          >
            Game
          </h4>
        </div>
        <Uploader
          data={data}
          setData={(d) => setData(d)}
          type={type}
          firebase={firebase}
          isUpdate={false}
        />
      </div>
      <style jsx>{`
        .typeContainer,
        .typeSelector,
        .form,
        button {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .typeContainer,
        .form {
          flex-direction: column;
        }
        .typeSelector {
          background: #222;
          color: #fff;
          margin: 20px 0px;
          border-radius: 7px;
        }
        .typeSelector h4 {
          margin: 0;
        }
        .type {
          padding: 7px 50px;
          color: #fff;
        }
        .selected {
          background: #0070f3;
          border-radius: 7px;
        }
        input,
        textarea,
        button {
          width: 250px;
          background: #222;
          color: #fff;
          padding: 10px 30px;
          margin: 10px;
          border-radius: 7px;
          border: none;
        }
        .uploadInput {
          text-align: center;
          margin: 10px;
        }
        .uploadInput input {
          padding: 15px 10px;
          font-size: 0.9rem;
        }
        button {
          padding: 10px 30px;
          background: #0070f3;
          font-size: 1rem;
          font-weight: 600;
        }
        .typeSelector,
        button,
        .uploadInput input {
          cursor: pointer;
        }
        .loading,
        .loading .loader {
          min-height: 15px;
          width: 250px;
          margin: 10px;
          border-radius: 7px;
          background: #222;
        }
        .loading .loader {
          background: #00c40e;
          margin: 0;
          width: 250px !important;
        }
        .error {
          background: #f30000;
          font-weight: 600;
          font-size: 1rem;
          line-height: 1.5rem;
          padding: 10px;
          margin: 10px;
          border-radius: 7px;
          max-width: 300px;
          text-align: center;
        }
      `}</style>
    </Page>
  );
}
