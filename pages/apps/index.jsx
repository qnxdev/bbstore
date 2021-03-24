import Page from "../../components/page";
import Listing from "../../components/listing";
import { useState } from "react";
import { firebaseInit } from "../../lib/firebase";
import LoaderWrapper from "../../components/LoaderWrapper";

export default function Apps() {
  const [data, setData] = useState([]);
  const firebase = firebaseInit();

  const GetData = async () => {
    try {
      let list = [];
      const querySnapshot = await firebase.firestore().collection(`apps`).get();
      querySnapshot.forEach((doc) => {
        list.push(doc.data());
      });
      setData([...list]);
    } catch (e) {
      alert("Failed to load content!");
    }
  };
  if (data.length == 0) {
    GetData();
    return (
      <Page>
        <LoaderWrapper />
      </Page>
    );
  } else {
    return (
      <Page title={`All Apps - BlackBerry Store`}>
        <Listing data={data} title="Apps" url="/apps/" />
      </Page>
    );
  }
}
