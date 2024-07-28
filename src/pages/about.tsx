import Head from "next/head";
import Image from "next/image";
import { Metadata } from "@/components/Meta/Metadata";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import { WebsiteCoverPhoto, WebsiteInfo } from "@/lib/MainConstants";
import { LWLogo } from "@/components/Images/WebsiteLogo";

const LWPhotoDirectory = "lw";
const LWAboutPhoto = "lw-13-10-2023-profile-photo-640p-75q.webp";

export default function About() {
  return (
    <>
      <Head>
        <title>{"About" + " | " + WebsiteInfo.NAME}</title>
        <meta name="description" content={"About" + " " + WebsiteInfo.NAME} />
        <link rel="canonical" href={WebsiteInfo.BASE_URL + "/about"} />
        <Metadata
          type="website"
          title={"About" + " | " + WebsiteInfo.NAME}
          description={"About" + " " + WebsiteInfo.NAME}
          url={WebsiteInfo.BASE_URL + "/about"}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
      </Head>

      <FadeTransition>
        <article className="pt-24">
          <div className="container">
            <div className="w-full px-4 xl:px-40">
              <div className="mb-16">
                <h1 className="text-center">About</h1>
                <Image
                  src={"/" + LWPhotoDirectory + "/" + LWAboutPhoto}
                  width={500}
                  height={500}
                  alt={`${WebsiteInfo.NAME}`}
                  className="max-w-[200px] mx-auto rounded-full"
                  loading="eager"
                  priority={true}
                />

                <h2>Introduction</h2>

                <p>
                  My name is Leonard Natanael Walujan from Manado, North
                  Sulawesi, Indonesia. I am an informatics engineering student
                  at Manado State Polytechnic in 2021 generation and also as an
                  outstanding student in 2024.
                </p>

                <p>
                  Since I was a young child, I was introduced to a computer by
                  my aunt and taught how to use it. My first experience using a
                  computer as a child was trying to use office applications and
                  playing video games. To this day, I still continue to learn
                  new things related to the development of information
                  technology.
                </p>

                <p>
                  When I finished vocational school, I took up a new interest in
                  photography and videography when I wasn&#39;t ready to look
                  for a job or apply to college and was still having fun and
                  enjoying my favourite thing that I had for a year. Photography
                  and Videography became my main hobby besides playing video
                  games. With photo/videography, I know how important it is to
                  document the things in life that can make it a precious
                  memory.
                </p>

                <p>
                  When I went to college by taking Informatics Engineering study
                  programme, I started to know more about information technology
                  especially in software development. The IT fields that I have
                  learnt until now are web development, computer networking,
                  multimedia, cyber security and IT support.
                </p>

                <p>
                  My daily activity is spending my time to experiment about IT
                  facility from the internet or another place, practising
                  creativity, hanging out with my friends, photography,
                  videography, educating someone about IT and playing video
                  game.
                </p>

                <h2>About this website</h2>
                <p>
                  This domain is hosted through Cloudflare CDN and this website
                  is created using Next.js.
                </p>

                <h2>Logo LW</h2>
                <LWLogo className={"mt-4 mb-4"} width={200} />

                <p>
                  LW Logo is created on 19 September 2021. This logo was revised
                  on 28 January 2022 and the new logo version is created on 31
                  July 2023. This logo comes from my name which is abbreviated
                  to LW.
                </p>

                <h2>Education</h2>
                <ul>
                  <li>
                    SMK Negeri 2 Manado | Computer Engineering and Networking
                    (2017 - 2020).
                  </li>
                  <li>
                    Manado State Polytechnic | Informatics Engineering (2021 -
                    current).
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </article>
      </FadeTransition>
    </>
  );
}
