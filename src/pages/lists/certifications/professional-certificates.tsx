import { FadeTransition } from "@/components/Animations/FadeTransition";
import CertificateList from "@/components/Lists/CertificateList";
import { Metadata } from "@/components/Meta/Metadata";
import { ProfessionalCertificateLists } from "@/data/certifications/ProfessionalCertificateLists";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";

export default function ProfessionalCertificates() {
  return (
    <>
      <Head>
        <title>{"Professional Certificates" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={"List of Professional Certificates" + " " + WebsiteInfo.NAME}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/professional-certificates"}
        />
        <Metadata
          type="website"
          title={"Professional Certificates" + " | " + WebsiteInfo.NAME}
          description={
            "List of Professional Certificates" + " " + WebsiteInfo.NAME
          }
          url={WebsiteInfo.BASE_URL + "/lists" + "/professional-certificates"}
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
                <h1 className="text-center">Professional Certificates</h1>
                <p className="text-center">
                  {`List of Professional Certificates ${WebsiteInfo.NAME}`}
                </p>
                <CertificateList
                  CertificateLists={ProfessionalCertificateLists}
                />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
