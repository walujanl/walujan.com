export const Metadata = ({
  type,
  title,
  description,
  url,
  siteName,
  image,
  locale,
}: {
  type: string;
  title: string;
  description: string;
  url: string;
  siteName: string;
  image: string;
  locale: string;
}) => {
  return (
    <>
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale} />

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:image" content={image} />
    </>
  );
};
