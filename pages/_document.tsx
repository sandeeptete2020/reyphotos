import Document, { Head, Html, Main, NextScript } from "next/document";
import Script from 'next/script';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-BKWNKDQJQH"></Script>
<Script>
  {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
   gtag('js', new Date());

  gtag('config', 'G-BKWNKDQJQH');
  `}
</Script>
          <link rel="icon" href="/favicon.ico" />
          <meta
            name="description"
            content="AI-Powered Photo Restoration. Bring Faded Memories Back To Life"
          />
          <meta property="og:site_name" content="reygrow.com" />
          <meta
            property="og:description"
            content="Restore your old face photos and keep the memories alive."
          />
          <meta property="og:title" content="AI-Powered Face Photo Restoration" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="AI-Powered Face Photo Restoration" />
          <meta
            name="twitter:description"
            content="Restore and upscale your old, blurry and distorted photos."
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
