import { FadeTransition } from "@/components/Animations/FadeTransition";
import CertificateList from "@/components/Lists/CertificateList";
import { Metadata } from "@/components/Meta/Metadata";
import { TrainingCertificateLists } from "@/data/certifications/TrainingCertificateLists";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";

export default function TrainingCertificates() {
  return (
    <>
      <Head>
        <title>{"Training Certificates" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={"List of Training Certificates" + " " + WebsiteInfo.NAME}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/training-certificates"}
        />
        <Metadata
          type="website"
          title={"Training Certificates" + " | " + WebsiteInfo.NAME}
          description={"List of Training Certificates" + " " + WebsiteInfo.NAME}
          url={WebsiteInfo.BASE_URL + "/lists" + "/training-certificates"}
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
                <h1 className="text-center">Training Certificates</h1>
                <p className="text-center">
                  {`List of Training Certificates ${WebsiteInfo.NAME}`}
                </p>
                <CertificateList CertificateLists={TrainingCertificateLists} />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
