import clientPromise from "./mongodb";

async function loader(date) {
  const client = await clientPromise;
  const db = client.db("aotd");
  const app = await db.collection("apps").findOne({date: date});
  delete app._id;

  return app;
}

async function tracker(date, app, userAgent, ipAddress, referrer) {
  const document = {
    date,
    app,
    userAgent,
    ipAddress,
    referrer,
    timestamp: Date.now(),
  }
  const client = await clientPromise;
  const db = client.db("aotd");
  await db.collection("tracking").insertOne(document);

  return true;
}

export {
  loader,
  tracker,
}
