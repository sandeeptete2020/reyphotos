import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-BKWNKDQJQH"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-BKWNKDQJQH');
        `}
      </Script>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="Restore your old face photos and keep the memories alive."
          />
          <meta property="og:site_name" content="restorePhotos.io" />
          <meta
            property="og:description"
            content="Restore your old face photos and keep the memories alive."
          />
          <meta property="og:title" content="Face Photo Restorer" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Face Photo Restorer" />
          <meta
            name="twitter:description"
            content="Restore your old photos and keep the memories alive."
          />
          <meta
            property="og:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
          <meta
            name="twitter:image"
            content="https://restore-photos.vercel.app/og-image.png"
          />
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
