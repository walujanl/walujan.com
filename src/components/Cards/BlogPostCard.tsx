import Link from "next/link";
import React from "react";

const longDate = (isoString: string) => {
  const date = new Date(isoString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

interface BlogPostCard {
  title: string;
  date: string;
  description: string;
  category: string;
  postURL: string;
}

export const BlogPostCard: React.FC<BlogPostCard> = ({
  title,
  date,
  description,
  category,
  postURL,
}) => (
  <div className="w-full px-4 lg:w-1/2 xl:w-1/3 flex flex-col">
    <div className="mb-10 bg-white border border-gray-200 rounded-lg shadow-md dark:border-zinc-700 dark:bg-darkSecondary flex flex-col flex-grow">
      <div className="p-5 flex-grow">
        <Link
          href={`/blog/category/${category}`}
          className="mb-4 font-bold uppercase text-md text-primary dark:text-primary_dark hover:underline"
        >
          {category}
        </Link>

        <p className="my-3 font-semibold">{longDate(date)}</p>

        <Link href={postURL}>
          <h2 className="my-3 font-semibold tracking-tight text-gray-900 text-md dark:text-white hover:underline">
            {title}
          </h2>
        </Link>

        <p className="mb-3 text-sm font-normal leading-relaxed text-gray-700 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  </div>
);
