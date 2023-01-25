import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <script src="https://www.googletagmanager.com/gtag/js?id=G-BKWNKDQJQH"
        strategy="afterInteractive"
      />
      <script id="google-analytics" strategy="afterInteractive">
        {'
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-BKWNKDQJQH');
        '}
      </script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
