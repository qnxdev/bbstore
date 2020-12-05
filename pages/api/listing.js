import { firebaseInit } from "../../lib/firebase";

export default async (req, res) => {
  const db = await firebaseInit();
  if (req.query.v == "apps") {
    let apps = [];
      const querySnapshot = await db
        .firestore()
        .collection("apps")
        .get();
      querySnapshot.forEach(doc => {
        apps.push(doc.data());
      });
      res.json({ apps });
  }

  else if (req.query.v == "tools") {
    let tools = [];
    const querySnapshot = await db
      .firestore()
      .collection("tools")
      .get();
    querySnapshot.forEach(doc => {
      tools.push(doc.data());
    });
    res.send({ tools });
  }


  else if (req.query.v == "games") {
    let games = [];
    const querySnapshot = await db
      .firestore()
      .collection("games")
      .get();
    querySnapshot.forEach(doc => {
      contracts.push(doc.data());
    });
    res.send({ games });
  }
  else {
    res.status(403).end("403 | Forbidden");
  }
}
