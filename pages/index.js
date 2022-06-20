import { getDateSlug } from '../lib/dates';
import { loader, mostRecent } from '../lib/data';
import AppProfile from '../components/app-profile';

export async function getServerSideProps(context) {
  const date = getDateSlug();
  let app = await loader(date);

  if (!app) {
    app = await mostRecent();
  }

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
