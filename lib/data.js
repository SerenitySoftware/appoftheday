import clientPromise from "./mongodb";
import {getDateSlug} from './dates';

async function connection() {
  const client = await clientPromise;
  return client.db("aotd");
}

async function loader(date) {
  const db = await connection();
  const results = await db.collection("apps").findOne({date: date});

  return cleanApp(results);
}

async function mostRecent() {
  const db = await connection();
  const apps = await db.collection("apps").find({}).sort({date: -1}).limit(1).toArray();
  return cleanApp(apps[0]);
}

async function siblingApp(baseDate, direction) {
  if (['previous', 'next'].includes(direction) === false) {
    throw new Error(`Invalid direction ${direction} - must be either previous or next`);
  }

  const filterOperator = direction === 'next' ? '$gt' : '$lt';
  const sortDirection = direction === 'next' ? 1 : -1;
  const now = getDateSlug();

  const db = await connection();
  const sibling = await db
      .collection("apps")
      .find({ date: { [filterOperator]: baseDate, "$lte": now }})
      .sort({date: sortDirection})
      .limit(1)
      .toArray();
  return cleanApp((sibling[0]));
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
  const db = await connection();
  await db.collection("tracking").insertOne(document);

  return true;
}

export {
  loader,
  mostRecent,
  siblingApp,
  tracker,
}
