import Head from "next/head";
import Link from "next/link";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import {
  WebsiteContact,
  WebsiteCoverPhoto,
  WebsiteInfo,
} from "@/lib/MainConstants";
import { LWLogo } from "@/components/Images/WebsiteLogo";
import { Metadata } from "@/components/Meta/Metadata";

const HomeContactLinks = [
  {
    platform: "Email",
    url: `${"mailto:" + WebsiteContact.EMAIL}`,
    svgLogo:
      "M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V8l8 5 8-5v10zm-8-7L4 6h16l-8 5z",
  },
];

const HomePersonalWorksLinks = [
  {
    platform: "Unsplash",
    url: `https://unsplash.com/@walujan`,
    svgLogo: "M7.5 6.75V0h9v6.75h-9zm9 3.75H24V24H0V10.5h7.5v6.75h9V10.5z",
  },
  {
    platform: "Adobe Lightroom",
    url: `https://lightroom.adobe.com/u/walujan`,
    svgLogo:
      "M19.75.3H4.25C1.9.3 0 2.2 0 4.55v14.9c0 2.35 1.9 4.25 4.25 4.25h15.5c2.35 0 4.25-1.9 4.25-4.25V4.55C24 2.2 22.1.3 19.75.3zm-6.99 16.389c0 .051-.029.09-.06.121-.03.02-.06.029-.101.029H6.26c-.11 0-.16-.061-.16-.18V6.44c-.01-.07.04-.13.11-.14h2c.05-.01.11.03.11.08v8.43h4.62c.101 0 .131.049.11.14l-.29 1.739zm6.25-7.859v1.95c0 .08-.05.11-.16.11-.649-.04-1.3.08-1.89.34-.2.09-.39.21-.54.37v5.1c0 .1-.04.14-.13.14h-1.95c-.08.01-.15-.04-.16-.119V11.14c0-.24 0-.49-.01-.75s-.01-.52-.02-.78c-.01-.22-.03-.44-.061-.66-.01-.05.02-.1.07-.11.01-.01.02-.01.04 0h1.75c.1 0 .18.07.21.16.04.07.07.15.08.23.02.1.039.21.05.31.01.11.021.23.021.36.299-.35.66-.64 1.069-.86.46-.25.97-.37 1.49-.36.069-.01.13.04.14.11.001.01.001.02.001.04z",
  },
];

const JSONLDSiteNames = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: WebsiteInfo.NAME,
  alternateName: [WebsiteInfo.ABBR, WebsiteInfo.FULL_NAME, WebsiteInfo.DOMAIN],
  url: WebsiteInfo.BASE_URL,
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{WebsiteInfo.NAME}</title>
        <meta name="description" content="Leonard Natanael Walujan" />
        <link rel="canonical" href={WebsiteInfo.BASE_URL} />
        <Metadata
          type="website"
          title={WebsiteInfo.NAME}
          description="Leonard Natanael Walujan"
          url={WebsiteInfo.BASE_URL}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JSONLDSiteNames) }}
        />
      </Head>

      <FadeTransition>
        <section id="hero" className="pt-24 lg:pt-40">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="self-center w-full px-4 lg:w-1/2">
                <h1 className="hero-title">{WebsiteInfo.NAME}</h1>
                <h2 className="hero-subtitle">This is {WebsiteInfo.NAME}</h2>
                <p className="hero-desc">
                  Hello, I&#39;m {WebsiteInfo.FULL_NAME}. I am a person with
                  interests about information technology and photo/videography.
                </p>
                <Link className="main-color-button" href="/blog">
                  Visit Blog
                </Link>
              </div>
              <div className="self-end w-full px-4 mt-12 lg:w-1/2">
                <div className="lg:m-auto flex justify-center">
                  <LWLogo
                    className={"lg:w-96 md:w-72 sm:w-60 w-48 mb-10 fill-favo"}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="contact-personal-works" className="pb-24 lg:pt-16">
          <div className="container">
            <div className="flex flex-wrap">
              <div className="w-full px-4 mb-10 lg:w-1/2">
                <h2 className="home-work-contact-title">Contact</h2>
                <h3 className="home-work-contact-subtitle">Contact me</h3>
                <p className="home-work-contact-desc">
                  If you want to ask me, you can contact me via email.
                </p>
                <div className="flex items-center mt-5">
                  {HomeContactLinks.map((account) => (
                    <a
                      href={account.url}
                      className="home-link-icon"
                      target="_blank"
                      rel="noreferrer nofollow"
                      key={account.platform}
                    >
                      <svg
                        role="img"
                        width={20}
                        className="fill-current"
                        viewBox="0 0 24 24"
                      >
                        <title>{account.platform}</title>
                        <path d={account.svgLogo} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
              <div className="w-full px-4 mb-10 lg:w-1/2">
                <h2 className="home-work-contact-title">Work</h2>
                <h3 className="home-work-contact-subtitle">Personal works</h3>
                <p className="home-work-contact-desc">
                  Check out my personal works below especially on my photography
                  works.
                </p>
                <div className="flex items-center mt-5">
                  {HomePersonalWorksLinks.map((account) => (
                    <a
                      href={account.url}
                      className="home-link-icon"
                      target="_blank"
                      rel="noreferrer nofollow"
                      key={account.platform}
                    >
                      <svg
                        role="img"
                        width={20}
                        className="fill-current"
                        viewBox="0 0 24 24"
                      >
                        <title>{account.platform}</title>
                        <path d={account.svgLogo} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
