import { CacheProvider, EmotionCache } from '@emotion/react';

import { ToastContainer } from 'react-toastify';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import { CssBaseline, ThemeProvider } from '@mui/material';

import createEmotionCache from '@utils/createEmotionCache';

import { theme } from '@styles/theme';

const clientSideEmotionCache = createEmotionCache();

import 'react-toastify/dist/ReactToastify.css';

type MyAppProps = AppProps & {
  emotionCache?: EmotionCache;
};

const MyApp: NextPage<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <ToastContainer />
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  );
};

export default MyApp;
