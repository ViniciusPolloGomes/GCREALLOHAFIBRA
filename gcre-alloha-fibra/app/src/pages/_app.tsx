// src/pages/_app.tsx
import { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '../styles/theme';
import Head from 'next/head';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider value={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}