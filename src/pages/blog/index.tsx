import React, { useState } from "react";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import Head from "next/head";
import Link from "next/link";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import { BlogPostMeta, getBlogPosts } from "@/utils/PostsAPI";
import { BlogPostCard } from "@/components/Cards/BlogPostCard";
import { Metadata } from "@/components/Meta/Metadata";

export async function getStaticProps() {
  const blogPosts = await getBlogPosts();
  const posts = blogPosts.map((post) => post.meta);
  return { props: { posts } };
}

export default function BlogPosts({ posts }: { posts: BlogPostMeta[] }) {
  const [visiblePosts, setVisiblePosts] = useState(9);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9);
  };

  return (
    <>
      <Head>
        <title>{"Blog" + " | " + WebsiteInfo.NAME}</title>
        <meta
          name="description"
          content={WebsiteInfo.NAME + " " + "blog posts"}
        />
        <link rel="canonical" href={WebsiteInfo.BASE_URL + "/blog"} />
        <Metadata
          type="website"
          title={"Blog" + " | " + WebsiteInfo.NAME}
          description={WebsiteInfo.NAME + " " + "blog posts"}
          url={WebsiteInfo.BASE_URL + "/blog"}
          siteName={WebsiteInfo.NAME}
          image={WebsiteCoverPhoto.COVER_URL}
          locale={WebsiteInfo.LOCALE}
        />
      </Head>

      <FadeTransition>
        <section className="py-24 list">
          <div className="container">
            <div className="w-full px-4">
              <div className="mb-16 list-header">
                <h1 className="text-center">Blog</h1>
                <p className="text-center">{`${WebsiteInfo.NAME} blog posts.`}</p>
                <p className="text-center">
                  Visit&nbsp;
                  <Link className="hover:underline" href="/blog/archive">
                    <b>Archive</b>
                  </Link>
                  &nbsp;to see blog posts archive.
                </p>
              </div>
              <div className="flex flex-wrap">
                {posts.slice(0, visiblePosts).map((post, index) => (
                  <BlogPostCard
                    key={index}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    postURL={`blog/${post.year}/${post.slug}`}
                  />
                ))}
              </div>
              {visiblePosts < posts.length && (
                <div className="text-center mt-8">
                  <button
                    onClick={loadMorePosts}
                    className="main-color-button px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Load More
                  </button>
                </div>
              )}
            </div>
          </div>
        </section>
      </FadeTransition>
    </>
  );
}
