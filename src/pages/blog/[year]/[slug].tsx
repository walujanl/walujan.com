import Head from "next/head";
import rehypeSlug from "rehype-slug";
import { serialize } from "next-mdx-remote/serialize";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import {
  BlogPostMeta,
  getBlogPostFromSlug,
  getBlogPostSlugs,
} from "@/utils/PostsAPI";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import Image from "next/image";
import {
  Image2x1_1_1,
  Image2x1_5_4,
  ImageLandscape16_9,
  ImageLandscape4_5,
  ImageLandscape4_3,
} from "@/components/Markdown/PostImage";
import Link from "next/link";
import { WebsiteInfo, WebsiteStorage } from "@/lib/MainConstants";
import { Metadata } from "@/components/Meta/Metadata";

interface MDXPost {
  source: MDXRemoteSerializeResult<Record<string, unknown>>;
  meta: BlogPostMeta;
}

export const getStaticPaths = async () => {
  const slugs = getBlogPostSlugs();
  const paths = slugs.map(({ year, slug }) => {
    return { params: { year, slug } };
  });

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({
  params,
}: {
  params: { year: string; slug: string };
}) => {
  const { year, slug } = params;
  const post = await getBlogPostFromSlug({ year, slug });
  const mdxSource = await serialize(post.content, {
    mdxOptions: {
      rehypePlugins: [
        [rehypeSlug],
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
      ],
    },
  });

  return {
    props: {
      post: { source: mdxSource, meta: post.meta },
    },
  };
};

const longDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export default function BlogPostContent({ post }: { post: MDXPost }) {
  const JsonLDBlogPost = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.meta.title + " | " + WebsiteInfo.NAME,
    image: post.meta.coverImage,
    genre: post.meta.category,
    url:
      WebsiteInfo.BASE_URL + "/blog/" + post.meta.year + `/${post.meta.slug}`,
    datePublished: post.meta.date,
    description: post.meta.description,
    author: {
      "@type": "Person",
      name: WebsiteInfo.NAME,
      url: WebsiteInfo.BASE_URL,
    },
  };

  return (
    <>
      <Head>
        <title>{post.meta.title + " | " + WebsiteInfo.NAME}</title>
        <meta name="description" content={post.meta.description} />
        <link
          rel="canonical"
          href={
            WebsiteInfo.BASE_URL +
            "/blog" +
            "/" +
            post.meta.year +
            `/${post.meta.slug}`
          }
        />
        <Metadata
          type="article"
          title={post.meta.title + " | " + WebsiteInfo.NAME}
          description={post.meta.description}
          url={
            WebsiteInfo.BASE_URL +
            "/blog" +
            "/" +
            post.meta.year +
            `/${post.meta.slug}`
          }
          siteName={WebsiteInfo.NAME}
          image={post.meta.coverImage}
          locale={WebsiteInfo.LOCALE}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(JsonLDBlogPost) }}
        />
      </Head>

      <FadeTransition>
        <section className="container pt-24">
          <div className="w-full px-4 xl:px-36">
            <div className="mb-16">
              <article>
                <h1 className="text-center">{post.meta.title}</h1>
                <p className="text-center">
                  <time className="text-center" title={post.meta.date}>
                    {longDate(post.meta.date)}
                  </time>
                </p>
                <div className="flex flex-wrap content-center justify-center gap-1 mt-4 mb-4">
                  <Link
                    href={`/blog/category/${post.meta.category}`}
                    className="post-category-button"
                  >
                    {`#${post.meta.category}`}
                  </Link>
                </div>

                {post.meta.coverImage != null ? (
                  <Image
                    src={`${WebsiteStorage.images}/${post.meta.coverImage}`}
                    alt={post.meta.title}
                    width={1440}
                    height={810}
                    loading="eager"
                    priority={true}
                  />
                ) : (
                  ""
                )}
                <MDXRemote
                  {...post.source}
                  components={{
                    Link,
                    ImageLandscape16_9,
                    ImageLandscape4_5,
                    ImageLandscape4_3,
                    Image2x1_5_4,
                    Image2x1_1_1,
                  }}
                />
              </article>
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
