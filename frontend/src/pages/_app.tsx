import 'bootstrap/dist/css/bootstrap.min.css';

import "@/styles/globals.scss";


import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";

// Correct initialization


const latoFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Add desired font weights here
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bartender App</title>
        <meta name="description" content="Upscale Bartender app under contruction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <div className={` ${latoFont.className}`}>

        <main >
           <Component {...pageProps} />
       </main>
      </div>
    </>
    
  );
}
