import Head from 'next/head';
import Layout from '../components/layout';
import { wrapper } from '../store/store';

const App = ({ Component, pageProps }) => {
  return (
    <>
      <Head>
        <title>E-Commerce Web App</title>
        <meta name="description" content="SmartIQ - Front End Case Study" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default wrapper.withRedux(App);
