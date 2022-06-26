import {loader, siblingApp} from '../../lib/data';
import AppProfile from '../../components/app-profile';
import AppNavigator from "../../components/app-navigator";

export async function getServerSideProps(context) {
  const date = context.query.date;
  const app = await loader(date);
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

export default function App({ app, previousApp, nextApp }) {
  return (
      <>
        <AppProfile app={app} />
        <AppNavigator previousApp={previousApp} nextApp={nextApp} />
      </>
  )
}
