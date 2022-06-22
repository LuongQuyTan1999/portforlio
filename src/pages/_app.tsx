import { FC } from 'react';
import Head from 'next/head';
import { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';
import { useState } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import type { NextComponentType } from 'next';
import { appWithTranslation } from 'next-i18next';

import theme from '@/theme';
import store from '@/store';
import { Fonts } from '@/theme/components/fonts';

export type NextPageWithLayout = NextComponentType & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const MyApp: FC<AppPropsWithLayout> = ({ Component, pageProps }) => {
  const [queryClient] = useState(() => new QueryClient());

  const getLayout = Component.getLayout || ((page: React.ReactNode) => page);

  return (
    <>
      <Head>
        <title>Weshake Bank</title>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <Provider store={store}>
        <ChakraProvider resetCSS theme={theme}>
          <Fonts />
          <QueryClientProvider client={queryClient}>
            {getLayout(<Component {...pageProps} />)}
          </QueryClientProvider>
        </ChakraProvider>
      </Provider>
    </>
  );
};

export default appWithTranslation(MyApp);
