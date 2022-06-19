import Profile from '../components/profile';
import { getDateSlug } from '../lib/dates';
import clientPromise from '../lib/mongodb';

export async function getServerSideProps(context) {
  const date = getDateSlug();
  const client = await clientPromise;
  const db = client.db("aotd");
  const app = await db.collection("apps").findOne({date: date});
  delete app._id;

  return {
    props: {
      app
    }
  }
}

export default function Home({ app }) {
  return (
    <Profile app={app} />
  )
}
