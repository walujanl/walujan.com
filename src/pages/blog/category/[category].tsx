import React, { useState } from "react";
import { FadeTransition } from "@/components/Animations/FadeTransition";
import { BlogPostCard } from "@/components/Cards/BlogPostCard";
import { Metadata } from "@/components/Meta/Metadata";
import { WebsiteInfo, WebsiteCoverPhoto } from "@/lib/MainConstants";
import { BlogPostMeta, getBlogPosts } from "@/utils/PostsAPI";
import type { GetStaticProps, GetStaticPaths } from "next";
import Head from "next/head";

const capitalizeFirstLetter = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export default function BlogPostCategory({
  category,
  posts,
}: {
  category: string;
  posts: BlogPostMeta[];
}) {
  const [visiblePosts, setVisiblePosts] = useState(9);

  const loadMorePosts = () => {
    setVisiblePosts((prevVisiblePosts) => prevVisiblePosts + 9);
  };

  return (
    <>
      <Head>
        <title>{`${capitalizeFirstLetter(category)} - Blog | ${
          WebsiteInfo.NAME
        }`}</title>
        <meta
          name="description"
          content={`Blog posts for ${capitalizeFirstLetter(category)} category`}
        />
        <link
          rel="canonical"
          href={WebsiteInfo.BASE_URL + "/blog" + "/" + category}
        />
        <Metadata
          type="website"
          title={`${capitalizeFirstLetter(category)} - Blog | ${
            WebsiteInfo.NAME
          }`}
          description={`Blog posts for ${capitalizeFirstLetter(
            category
          )} category`}
          url={WebsiteInfo.BASE_URL + "/blog" + "/" + category}
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
                <p className="text-center">{`Blog posts for "${capitalizeFirstLetter(
                  category
                )}" category`}</p>
              </div>
              <div className="flex flex-wrap">
                {posts.slice(0, visiblePosts).map((post, index) => (
                  <BlogPostCard
                    key={index}
                    date={post.date}
                    title={post.title}
                    description={post.description}
                    category={post.category}
                    postURL={`/blog/${post.year}/${post.slug}`}
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

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { category } = params as { category: string };
  const posts = (await getBlogPosts())
    .filter((post) => post.meta.category.includes(category))
    .map((post) => post.meta);

  return {
    props: {
      category,
      posts,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = await getBlogPosts();
  const paths = Array.from(
    new Set(posts.map((post) => post.meta.category).flat()),
    (category) => ({ params: { category } })
  );

  return {
    paths,
    fallback: false,
  };
};
