import { CertificateCompetenceLists } from "@/data/certifications/CertificateCompetenceLists";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import CertificateList from "@/components/Lists/CertificateList";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";

export default function CertificateCompetence() {
  return (
    <>
      <Head>
        <title>{"Certificate of Competence" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={"List Certificate of Competence" + " " + WebsiteInfo.NAME}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/certificate-of-competence"}
        />
        <Metadata
          type="website"
          title={"Certificate of Competence" + " | " + WebsiteInfo.NAME}
          description={
            "List Certificate of Competence" + " " + WebsiteInfo.NAME
          }
          url={WebsiteInfo.BASE_URL + "/lists" + "/certificate-of-competence"}
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
                <h1 className="text-center">Certificate of Competence</h1>
                <p className="text-center">
                  {`List Certificate of Competence ${WebsiteInfo.NAME}`}
                </p>
                <CertificateList
                  CertificateLists={CertificateCompetenceLists}
                />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
