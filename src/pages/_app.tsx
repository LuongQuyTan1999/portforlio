// @ts-nocheck
import Head from 'next/head';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { ChakraProvider, localStorageManager } from '@chakra-ui/react';
import { appWithTranslation } from 'next-i18next';

import store from '@/store';
import { AnimatePresence } from 'framer-motion';
import { Navbar } from '@/layouts/components/Navbar';
import theme from '@/lib/theme';

if (typeof window !== 'undefined') {
  window.history.scrollRestoration = 'manual';
}

const MyApp = ({ Component, pageProps, router }) => {
  const [queryClient] = useState(() => new QueryClient());

  const colorModeManager = localStorageManager;

  return (
    <>
      <Head>
        <title>Weshake Bank</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <ChakraProvider
          resetCSS
          theme={theme}
          colorModeManager={colorModeManager}
        >
          <QueryClientProvider client={queryClient}>
            <Navbar path={router.asPath} />
            <AnimatePresence
              exitBeforeEnter
              initial={true}
              onExitComplete={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0 });
                }
              }}
            >
              <Component {...pageProps} key={router.route} />
            </AnimatePresence>
          </QueryClientProvider>
        </ChakraProvider>
      </Provider>
    </>
  );
};

export default appWithTranslation(MyApp);
