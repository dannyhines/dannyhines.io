import { AppProps } from 'next/app';
import { ThemeProvider } from 'next-themes';

import '@/styles/globals.css';
import '@/styles/mdx.css';
import '@/styles/dracula.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute='class' defaultTheme='system'>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
