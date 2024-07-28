import fs from "fs";
import matter from "gray-matter";
import path from "path";

interface BlogPost {
  content: string;
  meta: BlogPostMeta;
}

export interface BlogPostMeta {
  slug: string;
  title: string;
  description: string;
  date: string;
  category: string;
  coverImage: string;
  year: string;
}

const longDate = (isoString: string) => {
  const date = new Date(isoString);
  return date;
};

export const getBlogPostSlugs = (): { year: string; slug: string }[] => {
  const blogPostsDirectory = path.join(process.cwd(), "contents", "blog");
  const years = fs.readdirSync(blogPostsDirectory);

  const slugs: { year: string; slug: string }[] = [];

  years.forEach((year) => {
    const yearDirectory = path.join(blogPostsDirectory, year);
    const fileNames = fs.readdirSync(yearDirectory);

    fileNames.forEach((fileName) => {
      const slug = fileName.replace(/\.mdx?$/, "");
      slugs.push({ year, slug });
    });
  });

  return slugs;
};

export const getBlogPostFromSlug = async ({
  year,
  slug,
}: {
  year: string;
  slug: string;
}): Promise<BlogPost> => {
  const blogPostPath = path.join(
    process.cwd(),
    "contents",
    "blog",
    year,
    `${slug}.mdx`
  );
  const source = await fs.promises.readFile(blogPostPath);
  const { content, data } = matter(source);

  return {
    content,
    meta: {
      slug,
      title: data.title ?? slug,
      description: data.description ?? "",
      date: data.date,
      year: year,
      category: data.category,
      coverImage: data.coverImage,
    },
  };
};

export const getBlogPosts = async () => {
  const blogPostSlugs = getBlogPostSlugs();

  const blogPostPromises = blogPostSlugs.map(({ year, slug }) =>
    getBlogPostFromSlug({ year, slug })
  );
  const blogPosts: BlogPost[] = await Promise.all(blogPostPromises);

  blogPosts.sort((a, b) => {
    const dateA = new Date(longDate(a.meta.date));
    const dateB = new Date(longDate(b.meta.date));

    return dateB.getTime() - dateA.getTime();
  });

  return blogPosts.map((blogPost) => blogPost);
};
