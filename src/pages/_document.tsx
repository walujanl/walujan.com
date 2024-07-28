import {
  WebsiteInfo,
  WebsiteLogo,
  WebsitePersonalisation,
} from "@/lib/MainConstants";
import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta
          name="theme-color"
          content={WebsitePersonalisation.mainThemeColor}
        />
        <meta name="keywords" content={WebsiteInfo.KEYWORDS} />
        <link rel="icon" type="image/x-icon" href={WebsiteLogo.LOGO_URL_ALT} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
