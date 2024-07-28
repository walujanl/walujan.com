const webProtocol = "https://";
const domain = process.env.NEXT_PUBLIC_WEBSITE_DOMAIN;

export const WebsiteInfo = {
  NAME: "Leonard Walujan",
  FULL_NAME: "Leonard Natanael Walujan",
  ABBR: "LW",
  DOMAIN: domain,
  BASE_URL: webProtocol + domain,
  LOCATION: "Manado, Indonesia",
  KEYWORDS:
    "leonard walujan, leonard natanael walujan, manado, sulawesi utara, indonesia",
  LOCALE: "en_GB",
};

export const WebsiteContact = {
  EMAIL: process.env.NEXT_PUBLIC_CONTACT_EMAIL,
};

export const WebsitePersonalisation = {
  mainThemeColor: "#f0ebdf",
};

export const WebsiteStorage = {
  certificates:
    webProtocol + process.env.NEXT_PUBLIC_CERTIFICATES_STORAGE_DOMAIN,
  images: webProtocol + process.env.NEXT_PUBLIC_PHOTOS_STORAGE_DOMAIN,
};

export const WebsiteLogo = {
  LOGO_URL: WebsiteInfo.BASE_URL + "/logo/lw-logo-main-2048p.webp",
  LOGO_URL_ALT: "/logo/lw-logo-main-2048p.webp",
};

export const WebsiteCoverPhoto = {
  COVER_URL: WebsiteInfo.BASE_URL + "/img/lw-logo-cover-photo.webp",
};

export const WebsitePage = [
  { title: "Home", path: "/" },
  { title: "Blog", path: "/blog" },
  { title: "Lists", path: "/lists" },
  { title: "About", path: "/about" },
];

export const OtherPage = [
  {
    title: "Analytics",
    url: process.env.NEXT_PUBLIC_SELF_HOST_ANALYTICS_URL,
  },
  {
    title: "Web Status",
    url: "https://walujan.statuspage.io/",
  },
];

export const Analytics = {
  UMAMI: {
    SELF_HOST_URL: webProtocol + "umami" + "." + domain,
    WEBSITE_ID: process.env.NEXT_PUBLIC_UMAMI_ANALYTICS_ID,
  },
};
