import 'bootstrap/dist/css/bootstrap.min.css';

import "@/styles/globals.scss";


import NavBar from '@/components/NavBar';
import type { AppProps } from "next/app";
import { Lato } from "next/font/google";
import Head from "next/head";
import { useRouter } from 'next/router';
import NextNProgress from "nextjs-progressbar";
import { useEffect } from "react";


// Correct initialization


const latoFont = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // Add desired font weights here
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, []);
  return (
    <>
     
      <Head>
        <title>Bartender App</title>
        <meta name="description" content="Upscale Bartender app under contruction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextNProgress
          color="#29D"
          startPosition={0.3}
          stopDelayMs={200}
          height={3}
          showOnShallow={true}    
         />
    
      <div className={` ${latoFont.className}`}
      style={{minHeight: '100vh', position: 'relative'}}>
        <NavBar />

        <main >
         
           <Component {...pageProps} />
       </main>
      </div>
    </>
    
  );
}


