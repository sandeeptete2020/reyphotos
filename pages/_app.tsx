import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
       <Analytics trackingId="GA-XXXXXXXX-X" />

      <Component {...pageProps} />
      <Analytics />
    </>
  );
}

export default MyApp;
