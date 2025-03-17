import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    const gaId = process.env.NEXT_PUBLIC_GA_ID;
    return (
      <Html lang="en">
        <Head>
          {gaId && (
            <>
              <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}></script>
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${gaId}', { page_path: window.location.pathname });
                  `,
                }}
              />
            </>
          )}
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content="Personal website for Qendrim Beka" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
