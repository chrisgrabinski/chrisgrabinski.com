import { GlobalStyles } from "twin.macro";
import { CacheProvider } from "@emotion/react";
import { cache } from "@emotion/css";
import { DefaultSeo } from "next-seo";

import DEFAULT_SEO from "@config/seo";

import "@styles/fonts.css";

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <DefaultSeo {...DEFAULT_SEO} />
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;
