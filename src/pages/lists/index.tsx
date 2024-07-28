import { FadeTransition } from "@/components/Animations/FadeTransition";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import { Metadata } from "@/components/Meta/Metadata";
import Head from "next/head";
import Link from "next/link";

const PageLists = [
  {
    page: "Official Accounts",
    link: "/lists/official-accounts",
  },
  {
    page: "Certifications",
    link: "/lists/certifications",
  },
];

export default function Lists() {
  return (
    <>
      <Head>
        <title>{"Lists" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={WebsiteInfo.NAME + " " + "List Information"}
        />
        <link rel="canonical" href={WebsiteInfo.BASE_URL + "/lists"} />
        <Metadata
          type="website"
          title={"Lists" + " | " + WebsiteInfo.NAME}
          description={WebsiteInfo.NAME + " " + "List Information"}
          url={WebsiteInfo.BASE_URL + "/lists"}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
      </Head>

      <FadeTransition>
        <section className="pt-24 list">
          <div className="container">
            <div className="w-full px-4 xl:px-40">
              <div className="mb-16 list-header">
                <h1 className="text-center">Lists</h1>
                <p className="text-center">See some lists about me here.</p>
                <div className="flex justify-center list">
                  <ul>
                    {PageLists.map((list) => (
                      <li key={list.page} className="mt-2">
                        <Link href={list.link} className="hover:underline">
                          {list.page}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
