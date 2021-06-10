import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet();
    const page = renderPage(
      App => props => sheet.collectStyles(<App {...props} />)
    );
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  }

  render() {
    return (
      <Html>
        <Head>
          <meta name="description" content="E-Commerce Web App" />
          <meta charSet="UTF-8" />
          <meta name="keywords" content="HTML,CSS,XML,JavaScript" />
          <meta name="author" content="John Doe" />
          <link rel="shortcut icon" href="static/favicon.ico"></link>
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
        <script
          src="https://kit.fontawesome.com/538689eadf.js"
          crossOrigin="anonymous"
        ></script>
      </Html>
    );
  }
}
