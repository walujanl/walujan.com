import Link from "next/link";
import { ToTopButton } from "../Misc/ToTopButton";
import { FooterLogo } from "../Images/WebsiteLogo";

import { OtherPage, WebsiteContact, WebsiteInfo } from "@/lib/MainConstants";
import { FooterAccountLists } from "@/lib/OtherConstants";

export const Footer = () => {
  return (
    <>
      <footer className="pt-16 pb-12 bg-favouriteColor dark:bg-darkSecondary">
        <div className="container">
          <div className="flex flex-wrap">
            <div
              data-nosnippet
              className="w-full px-4 mb-10 text-sm font-medium text-textLightContent dark:text-textDarkContent md:w-1/3"
            >
              <FooterLogo />
              <p>{WebsiteInfo.FULL_NAME}</p>
              <p>
                <a
                  href={`mailto:${WebsiteContact.EMAIL}`}
                  className="hover:underline"
                >
                  {WebsiteContact.EMAIL}
                </a>
              </p>
            </div>
            <div className="w-full px-4 mb-10 md:w-1/3">
              <h2 className="mb-5 text-xl font-semibold text-textLightContent dark:text-textDarkContent">
                Other pages
              </h2>
              <ul className="text-slate-300">
                {OtherPage.map((link) => (
                  <li key={link.title}>
                    <a
                      className="footer-menu-list"
                      href={`${link.url}`}
                      target="_blank"
                    >
                      {link.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full px-4 mb-10 md:w-1/3">
              <h2 className="mb-5 text-xl font-semibold text-textLightContent dark:text-textDarkContent">
                Follow me
              </h2>
              <div className="text-slate-300">
                <div className="flex items-center">
                  {FooterAccountLists.map((account) => (
                    <a
                      href={account.url}
                      className="footer-social-link"
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
          <div className="w-full py-10 border-t border-black dark:border-white">
            <div className="text-sm text-center text-textLightContent dark:text-textDarkContent">
              {"©" + " " + new Date().getFullYear() + " "}
              <Link href="/" className="font-semibold hover:underline">
                {WebsiteInfo.FULL_NAME}
              </Link>
              <p className="pt-2">
                Created using&nbsp;
                <a
                  className="font-semibold hover:underline"
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  Next.js
                </a>
                &nbsp;and&nbsp;
                <a
                  className="font-semibold hover:underline"
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noreferrer nofollow"
                >
                  Tailwind CSS
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
      <ToTopButton />
    </>
  );
};
