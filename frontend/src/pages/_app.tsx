import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Lato, Playfair_Display } from "next/font/google";
import Head from "next/head";

// Correct initialization
const playfairFont = Playfair_Display({
  subsets: ["latin"], // Correct subsets syntax
  weight: ["400", "700"], // Optional: Specify the font weights you need
});

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
    
      <div className={`${playfairFont.className} ${latoFont.className}`}>

        <main >
           <Component {...pageProps} />
       </main>
      </div>
    </>
    
  );
}
