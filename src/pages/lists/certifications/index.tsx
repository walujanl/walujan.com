import { FadeTransition } from "@/components/Animations/FadeTransition";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import { Metadata } from "@/components/Meta/Metadata";
import Head from "next/head";
import Link from "next/link";

const CertificationLists = [
  {
    page: "Professional Certificates",
    link: "/lists/certifications/professional-certificates",
  },
  {
    page: "Certificate of Competence",
    link: "/lists/certifications/certificate-of-competence",
  },
  {
    page: "Course Certificates",
    link: "/lists/certifications/course-certificates",
  },
  {
    page: "Certificate of Completion",
    link: "/lists/certifications/certificate-of-completion",
  },
  {
    page: "Competition Certificates",
    link: "/lists/certifications/competition-certificates",
  },
  {
    page: "Training Certificates",
    link: "/lists/certifications/training-certificates",
  },
];

export default function Certifications() {
  return (
    <>
      <Head>
        <title>{"Certifications" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={WebsiteInfo.NAME + " " + "List of Certifications"}
        />
        <link rel="canonical" href={WebsiteInfo.BASE_URL + "/certifications"} />
        <Metadata
          type="website"
          title={"Certifications" + " | " + WebsiteInfo.NAME}
          description={WebsiteInfo.NAME + " " + "List of Certifications"}
          url={WebsiteInfo.BASE_URL + "/certifications"}
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
                <h1 className="text-center">Certifications</h1>
                <p className="text-center">
                  See some lists of my certifications here.
                </p>
                <div className="flex justify-center list">
                  <ul>
                    {CertificationLists.map((list) => (
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
