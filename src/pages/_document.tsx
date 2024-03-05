import Document, { Head, Html, Main, NextScript } from 'next/document';

import { AppConfig } from '../utils/AppConfig';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  // eslint-disable-next-line class-methods-use-this
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="anonymous"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400..900&display=swap"
            rel="stylesheet"
          />
          <meta
            name="google-site-verification"
            content="7oQ2sshvhrZ61E1a9pR7Q53w1gapsYMwZgqE0_q70-c"
          />
        </Head>
        <body style={{ fontFamily: '"Cinzel", serif' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
