import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Loader from "../../../components/Loader";
import LoaderWrapper from "../../../components/LoaderWrapper";
import Page from "../../../components/page";
import Uploader from "../../../components/Upload";
import { firebaseInit } from "../../../lib/firebase";

export default function Editor() {
  const router = useRouter();
  const [data, setData] = useState({});
  const firebase = firebaseInit();
  const GetData = async () => {
    try {
      const item = await firebase
        .firestore()
        .collection(`${router.query.type}s`)
        .doc(router.query.id)
        .get();
      if (item.exists) {
        setData(item.data());
      }
    } catch (e) {
      router.replace("/apps");
    }
  };
  useEffect(() => {
    if (!data.id) {
      GetData();
    }
  });
  if (!data.id) {
    return (
      <Page>
        <LoaderWrapper />
      </Page>
    );
  } else {
    return (
      <Page title={`Edit and Update | BB10 Application Store`}>
        <h2>
          <br />
          Update {router.query.type == "app" ? "App" : "Game"}
        </h2>
        <Uploader
          data={data}
          setData={(d) => setData(d)}
          type={router.query.type == "app" ? "App" : "Game"}
          firebase={firebase}
          isUpdate={true}
        />
        <style jsx>{`
            h2{
                text-align: center;
            }
        `}</style>
      </Page>
    );
  }
}
