import '../styles/globals.css'
import Layout from '../components/layout';

function AppOfTheDay({ Component, pageProps }) {
  return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
  )
}

export default AppOfTheDay;
