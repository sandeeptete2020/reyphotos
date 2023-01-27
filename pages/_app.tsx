import { Analytics } from "@vercel/analytics/react";
import Script from 'next/script';
import '../styles/style.css'
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
