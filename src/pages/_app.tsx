import { Fragment } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';

import { ViewportContextProvider } from '@src/contexts/ViewportContext';
import { ScrollContextProvider } from '@src/contexts/ScrollContext';

import '../theme/global/elements.sass';

function MyApp({ Component, pageProps }: AppProps) {
   return (
      <Fragment>
         <Head>
            <title>FestIS</title>
            <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
         </Head>
         <ViewportContextProvider>
            <ScrollContextProvider>
               <Component {...pageProps} />
            </ScrollContextProvider>
         </ViewportContextProvider>
      </Fragment>
   )
}

export default MyApp;
