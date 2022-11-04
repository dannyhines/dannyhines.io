import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link
            rel='preload'
            href='/fonts/inter-var-latin.woff2'
            as='font'
            type='font/woff2'
            crossOrigin='anonymous'
          />
          {process.env.NODE_ENV === 'production' && (
            <script
              async
              defer
              data-website-id='a7fdaa82-ac99-4cac-9bab-5e86ea90add8'
              src='https://dannyhines-io-analytics.vercel.app/umami.js'
            />
          )}
        </Head>
        <body className='bg-white dark:bg-dark dark:text-white'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
