import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from "next/app";
import "../styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>

      <Component {...pageProps} />
      <Analytics trackingId="GA-XXXXXXXX-X" />
    </>
  );
}

export default MyApp;
