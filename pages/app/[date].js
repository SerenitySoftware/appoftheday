import { loader } from '../../lib/data';
import AppProfile from '../../components/app-profile';

export async function getServerSideProps(context) {
  const date = context.query.date;
  const app = await loader(date);

  return {
    props: {
      app,
      date,
    }
  }
}

export default function App({ app }) {
  return (
      <AppProfile app={app} />
  )
}
