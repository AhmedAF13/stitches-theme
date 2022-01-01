import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import { darkTheme, globalStyles } from "stitches.config";

import "modern-normalize/modern-normalize.css";
globalStyles();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="system"
      value={{ light: "light", dark: darkTheme.className }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
