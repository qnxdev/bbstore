import Page from '../../components/page';
import Listing from '../../components/listing';
import { useState } from "react";
import { firebaseInit } from "../../lib/firebase";
import LoaderWrapper from "../../components/LoaderWrapper";

export default function Games() {
  const [data, setData] = useState([]);
  const firebase = firebaseInit();

  const GetData = async () => {
    try {
      let list = [];
      const querySnapshot = await firebase.firestore().collection(`games`).get();
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
      <Page title={`Games - BlackBerry Store`}>
            <Listing data={data} title='Games' url='/games/' />
        </Page >
    );
  }
}