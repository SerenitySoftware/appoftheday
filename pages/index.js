import { getDateSlug } from '../lib/dates';
import { loader, mostRecent, siblingApp } from '../lib/data';
import AppProfile from '../components/app-profile';
import AppNavigator from '../components/app-navigator';

export async function getServerSideProps(context) {
  const date = getDateSlug();
  let app = await loader(date);

  if (!app) {
    app = await mostRecent();
  }

  let previousApp = await siblingApp(app.date, 'previous');
  let nextApp = await siblingApp(app.date, 'next');

  return {
    props: {
      app,
      previousApp,
      nextApp,
      date,
    }
  }
}

export default function Home({ app, previousApp, nextApp }) {
  return (
      <>
        <AppProfile app={app} />
        <AppNavigator previousApp={previousApp} nextApp={nextApp} />
      </>
  )
}
