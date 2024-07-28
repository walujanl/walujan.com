import { useState, useEffect } from "react";
import { Analytics, WebsiteInfo } from "@/lib/MainConstants";
import Script from "next/script";

export const AnalyticsScripts = () => {
  const baseURL = WebsiteInfo.BASE_URL;
  const [loadScript, setLoadScript] = useState(false);

  useEffect(() => {
    const handleEvent = () => {
      setLoadScript(true);
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("mousedown", handleEvent);
    };

    window.addEventListener("touchstart", handleEvent);
    window.addEventListener("mousemove", handleEvent);
    window.addEventListener("scroll", handleEvent);
    window.addEventListener("keydown", handleEvent);
    window.addEventListener("mousedown", handleEvent);

    return () => {
      window.removeEventListener("touchstart", handleEvent);
      window.removeEventListener("mousemove", handleEvent);
      window.removeEventListener("scroll", handleEvent);
      window.removeEventListener("keydown", handleEvent);
      window.removeEventListener("mousedown", handleEvent);
    };
  }, []);

  return (
    <>
      {loadScript && window.location.href.startsWith(baseURL) && (
        <>
          <Script
            strategy="afterInteractive"
            src={`${Analytics.UMAMI.SELF_HOST_URL}/script.js`}
            data-website-id={Analytics.UMAMI.WEBSITE_ID}
          />
        </>
      )}
    </>
  );
};
