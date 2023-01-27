import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';
import '../styles/style.css'
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
<script async src="https://www.googletagmanager.com/gtag/js?id=G-BKWNKDQJQH"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-BKWNKDQJQH');
</script>
      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
