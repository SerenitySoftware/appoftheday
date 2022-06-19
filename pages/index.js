import { getDateSlug } from '../lib/dates';
import { loader } from '../lib/data';
import AppProfile from '../components/app-profile';

export async function getServerSideProps(context) {
  const date = getDateSlug();
  const app = await loader(date);

  return {
    props: {
      app,
      date,
    }
  }
}

export default function Home({ app }) {
  return (
    <AppProfile app={app} />
  )
}
