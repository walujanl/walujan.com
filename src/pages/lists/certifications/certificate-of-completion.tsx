import { CertificateCompletionLists } from "@/data/certifications/CertificateCompletionLists";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import CertificateList from "@/components/Lists/CertificateList";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";

export default function CertificateCompletion() {
  return (
    <>
      <Head>
        <title>{"Certificate of Completion" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={"List Certificate of Completion" + " " + WebsiteInfo.NAME}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/certificate-of-completion"}
        />
        <Metadata
          type="website"
          title={"Certificate of Completion" + " | " + WebsiteInfo.NAME}
          description={
            "List Certificate of Completion" + " " + WebsiteInfo.NAME
          }
          url={WebsiteInfo.BASE_URL + "/lists" + "/certificate-of-completion"}
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
                <h1 className="text-center">Certificate of Completion</h1>
                <p className="text-center">
                  {`List Certificate of Completion ${WebsiteInfo.NAME}`}
                </p>
                <CertificateList
                  CertificateLists={CertificateCompletionLists}
                />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
