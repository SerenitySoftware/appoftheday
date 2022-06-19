import clientPromise from "./mongodb";

async function loader(date) {
  const client = await clientPromise;
  const db = client.db("aotd");
  const app = await db.collection("apps").findOne({date: date});
  delete app._id;

  return app;
}

export {
  loader
}
