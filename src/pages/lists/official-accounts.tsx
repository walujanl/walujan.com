import { FadeTransition } from "@/components/Animations/FadeTransition";
import { OfficialAccountsList } from "@/components/Lists/OfficialAccountsList";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";

export default function OfficialAccounts() {
  return (
    <>
      <Head>
        <title>{"Official Accounts" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={`${WebsiteInfo.NAME} Official Accounts List`}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/official-accounts"}
        />
        <Metadata
          type="website"
          title={"Official Accounts" + " | " + WebsiteInfo.NAME}
          description={`${WebsiteInfo.NAME} Official Accounts List`}
          url={WebsiteInfo.BASE_URL + "/lists" + "/official-accounts"}
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
                <h1 className="text-center">Official Accounts</h1>
                <p className="text-center">
                  {`${WebsiteInfo.NAME} Official Accounts List`}
                </p>
                <OfficialAccountsList />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
