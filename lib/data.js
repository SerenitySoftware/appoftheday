import clientPromise from "./mongodb";

async function loader(date) {
  const client = await clientPromise;
  const db = client.db("aotd");
  const results = await db.collection("apps").findOne({date: date});

  return cleanApp(results);
}

async function mostRecent() {
  const client = await clientPromise;
  const db = client.db("aotd");
  const apps = await db.collection("apps").find({}).sort({date: -1}).limit(1).toArray();
  return cleanApp(apps[0]);
}

function cleanApp(result) {
  if (!result) {
    return null;
  }

  delete result._id;

  return result;
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
  mostRecent,
  tracker,
}
