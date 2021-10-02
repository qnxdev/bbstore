import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import FileUploader from "react-firebase-file-uploader";
import Loader from "../components/Loader";
import Page from "../components/page";
import { firebaseInit } from "../lib/firebase";
import { FileTypeSelector } from "./FileType";

export default function Uploader({ data, setData, type, firebase, isUpdate }) {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [load, setLoad] = useState(false);
  const [progress1, setProgress1] = useState(0);
  const [progress2, setProgress2] = useState(0);
  const [upload1, setUpload1] = useState("");
  const [upload2, setUpload2] = useState("");
  const [files, setFiles] = useState({});
  const [filetype, setFiletype] = useState("");

  let iconUploader;
  let appUploader;
  const handleUpload = async () => {
    try {
      if (isUpdate) {
        if (files.icon) {
          iconUploader.startUpload(files.icon);
        }
        if (files.download) {
          appUploader.startUpload(files.download);
        }
        if (!files.icon) {
          setProgress1(100);
          setUpload1("0");
        }
        if (!files.download) {
          setProgress2(100);
          setUpload2("0");
        }
      } else {
        iconUploader.startUpload(files.icon);
        appUploader.startUpload(files.download);
      }
    } catch (e) {
      setErr("Unknown Error. Please contact developer.");
    }
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (data.name == "") {
      setErr("Application name is required");
    } else if (data.version == "") {
      setErr("Please enter Application version");
    } else if (data.description == "") {
      setErr("Please provide a short description");
    } else if (!isUpdate && !files.icon) {
      setErr("Select an icon file");
    } else if (!isUpdate && !files.download) {
      setErr("Select an application installer file (.bar/.apk)");
    } else {
      setErr("");
      handleUpload();
    }
  };

  useEffect(() => {
    if (upload1 != "" && upload2 != "") {
      setLoad(false);
      try {
        if (isUpdate) {
          firebase
            .firestore()
            .collection(type == "App" ? "apps" : "games")
            .doc(data.id)
            .update({
              ...data,
              id: data.id,
              vendor: data.vendor !== "" ? data.vendor : "3rd Party Developer",
              icon: upload1!="0" ? upload1 : data.icon,
              download: upload2!="0" ? upload2 : data.download,
            })
            .then(() => {
              router.push(`/apps/${data.id}`);
            });
        } else {
          firebase
            .firestore()
            .collection(type == "App" ? "apps" : "games")
            .add({
              ...data,
              id: "",
              vendor: data.vendor !== "" ? data.vendor : "3rd Party Developer",
              reviews: [],
              rating: 0,
              icon: upload1,
              download: upload2,
            })
            .then((ref) => {
              setData({ ...data, id: ref.id });
              firebase
                .firestore()
                .collection(type == "App" ? "apps" : "games")
                .doc(ref.id)
                .update({
                  id: ref.id,
                })
                .then(() => {
                  router.push(`/apps/${ref.id}`);
                });
            });
        }
      } catch (e) {
        setErr("Connection failure");
      }
    }
  }, [upload1, upload2]);

  const InputStyle = {
    width: "250px",
    background: "#222",
    color: "#fff",
    padding: "10px 30px",
    margin: "10px",
    borderRadius: "7px",
    border: "none",
    padding: "15px 10px",
    fontSize: "0.9rem",
  };

  return (
    <div className="form">
      {isUpdate ? (
        <p>
          <br />
          Name of {type}
        </p>
      ) : (
        ""
      )}
      <input
        type="text"
        name="name"
        placeholder={`Name of ${type}`}
        onChange={(e) => setData({ ...data, name: e.target.value })}
        value={data.name}
      />
        <p>
          <br />
          Select File Type
        </p>
        <FileTypeSelector filetype={data.filetype || ""} 
        setFiletype={(filetype) => setData({ ...data, filetype: filetype })}/>
      {isUpdate ? (
        <p>
          <br />
          Version
        </p>
      ) : (
        ""
      )}
      <input
        type="text"
        name="version"
        placeholder="Version"
        onChange={(e) => setData({ ...data, version: e.target.value })}
        value={data.version}
      />
      {isUpdate ? (
        <p>
          <br />
          Vendor
        </p>
      ) : (
        ""
      )}
      <input
        type="url"
        name="vendor"
        placeholder="Vendor"
        onChange={(e) => setData({ ...data, vendor: e.target.value })}
        value={data.vendor}
      />
      {isUpdate ? (
        <p>
          <br />
          Description
        </p>
      ) : (
        ""
      )}
      <textarea
        type="text"
        name="description"
        placeholder="Description"
        rows="5"
        onChange={(e) => setData({ ...data, description: e.target.value })}
        value={data.description}
      />
      {isUpdate ? (
        <p>
          {" "}
          <br /> Link to Source Code/Developer Website
        </p>
      ) : (
        ""
      )}
      <input
        type="text"
        name="git"
        placeholder="Link to Source Code/Developer Website"
        onChange={(e) => setData({ ...data, git: e.target.value })}
        value={data.git}
      />

      <div className="uploadInput">
        {isUpdate ? "Update" : "Add"} Icon file (128px x 128px)<br />
        {data.icon && !files.icon && (
          <div>
            <br />
            <img src={data.icon} alt="" width="150px" height="150px" />
            <br />
          </div>
        )}
        <FileUploader
          ref={(c) => {
            iconUploader = c;
          }}
          accept=".jpg,.jpeg,.png"
          randomizeFilename
          storageRef={firebase.storage().ref("icons")}
          onUploadStart={() => setLoad(true)}
          onUploadError={() => setErr("Failed to upload icon")}
          onUploadSuccess={(filename) => {
            const downloadURL = firebase
              .storage()
              .ref("icons")
              .child(filename)
              .getDownloadURL()
              .then((url) => {
                setUpload1(url);
              });
          }}
          onProgress={(p) => setProgress1(p)}
          className="Input"
          style={InputStyle}
          name="icon"
          onChange={(e) => setFiles({ ...files, icon: e.target.files[0] })}
        />
      </div>
      <div className="uploadInput">
        {isUpdate ? "Update" : "Upload"} {type} Installer file
        <br />
        {data.download && (
          <div>
            <br />
            <img src="/app.png" alt="" width="150px" height="150px" />
            <br />
          </div>
        )}
        <FileUploader
          ref={(c) => {
            appUploader = c;
          }}
          accept=".bar,.apk,.zip"
          filename={`${data.name
            .split(" ")
            .join("_")
            .split("-")
            .join(" ")}_${data.version.split(".").join("_")}`}
          storageRef={firebase.storage().ref("download")}
          onUploadStart={() => setLoad(true)}
          onUploadError={() => setErr("Failed to upload App Installer")}
          onUploadSuccess={(filename) => {
            const downloadURL = firebase
              .storage()
              .ref("download")
              .child(filename)
              .getDownloadURL()
              .then((url) => {
                setUpload2(url);
              });
          }}
          onProgress={(p) => setProgress2(p)}
          className="Input"
          style={InputStyle}
          name="download"
          onChange={(e) => setFiles({ ...files, download: e.target.files[0] })}
        />
      </div>
      {load && (
        <div className="loading">
          <div className="loader"></div>
        </div>
      )}
      {err != "" && <div className="error">! {err}</div>}
      <button onClick={handleSubmit}>
        {upload1 != "" && upload2 != ""
          ? "Finishing"
          : load
          ? "Please wait"
          : isUpdate
          ? "Update"
          : "Upload"}
        {(upload1 != "" && upload2 != "") || load ? <Loader /> : ""}
      </button>
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
        .form p {
          margin: 0;
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
          width: ${((progress1 + progress2) * 250) / 200}px !important;
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
    </div>
  );
}
