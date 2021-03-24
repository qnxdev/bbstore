import Page from "../../components/page";
import Content from "../../components/content";
import { useRouter } from "next/router";
import Error from "next/error";
import { useEffect, useState } from "react";
import { firebaseInit } from "../../lib/firebase";
import Loader from "../../components/Loader";
import LoaderWrapper from "../../components/LoaderWrapper";

export default function GamePage() {
  const router = useRouter();
  const [data, setData] = useState({});
  const firebase = firebaseInit();

  const GetData = async () => {
    try {
      const item = await firebase
        .firestore()
        .collection(`games`)
        .doc(router.query.gameid)
        .get();
      if (item.exists) {
        setData(item.data());
      } else {
        setData({ error: true });
      }
    } catch (e) {
      router.replace("/games");
    }
  };
  useEffect(() => {
    if (!data.id) {
      GetData();
    }
  });

  if (!data.id && data.error) {
    return (
      <Page title={`Content Not Found - BlackBerry Store`}>
        <Error statusCode={404} />
      </Page>
    );
  } else if (!data.id) {
    return (
      <Page>
          <LoaderWrapper />
      </Page>
    );
  } else {
    return (
      <Page title={data.name + ` - BlackBerry Store`}>
        <Content data={data} type="game" />
      </Page>
    );
  }
}
