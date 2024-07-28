import { FadeTransition } from "@/components/Animations/FadeTransition";
import { CourseCertificateLists } from "@/data/certifications/CourseCertificateLists";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import Head from "next/head";
import CertificateList from "@/components/Lists/CertificateList";

export default function CourseCertificates() {
  return (
    <>
      <Head>
        <title>{"Course Certificates" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={"List of Course Certificates" + " " + WebsiteInfo.NAME}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/lists" + "/course-certificates"}
        />
        <Metadata
          type="website"
          title={"Course Certificates" + " | " + WebsiteInfo.NAME}
          description={"List of Course Certificates" + " " + WebsiteInfo.NAME}
          url={WebsiteInfo.BASE_URL + "/lists" + "/course-certificates"}
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
                <h1 className="text-center">Course Certificates</h1>
                <p className="text-center">
                  {`List of Course Certificates ${WebsiteInfo.NAME}`}
                </p>
                <CertificateList CertificateLists={CourseCertificateLists} />
              </div>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
