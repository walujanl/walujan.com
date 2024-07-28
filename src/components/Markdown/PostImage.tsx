import { WebsiteStorage } from "@/lib/MainConstants";
import Image from "next/image";

// An image in 16:9 aspect ratio
export const ImageLandscape16_9 = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <Image
      src={`${WebsiteStorage.images}/${src}`}
      alt={alt}
      loading="lazy"
      width={1440}
      height={810}
    />
  );
};

// An image in 4:5 aspect ratio
export const ImageLandscape4_5 = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <Image
      src={`${WebsiteStorage.images}/${src}`}
      alt={alt}
      loading="lazy"
      width={1440}
      height={1152}
    />
  );
};

// An image in 4:3 aspect ratio
export const ImageLandscape4_3 = ({
  src,
  alt,
}: {
  src: string;
  alt: string;
}) => {
  return (
    <Image
      src={`${WebsiteStorage.images}/${src}`}
      alt={alt}
      loading="lazy"
      width={1440}
      height={1080}
    />
  );
};

// 2 images in 5:4 aspect ratio
export const Image2x1_5_4 = ({
  image1,
  image2,
  alt1,
  alt2,
}: {
  image1: string;
  image2: string;
  alt1: string;
  alt2: string;
}) => {
  return (
    <div className="flex flex-wrap">
      <div className="md:px-2 md:w-1/2">
        <Image
          src={`${WebsiteStorage.images}/${image1}`}
          alt={alt1}
          loading="lazy"
          width={1440}
          height={1800}
        />
      </div>
      <div className="md:px-2 md:w-1/2">
        <Image
          src={`${WebsiteStorage.images}/${image2}`}
          alt={alt2}
          loading="lazy"
          width={1440}
          height={1800}
        />
      </div>
    </div>
  );
};

// 2 images in 1:1 aspect ratio
export const Image2x1_1_1 = ({
  image1,
  image2,
  alt1,
  alt2,
}: {
  image1: string;
  image2: string;
  alt1: string;
  alt2: string;
}) => {
  return (
    <div className="flex flex-wrap">
      <div className="md:px-2 md:w-1/2">
        <Image
          src={`${WebsiteStorage.images}/${image1}`}
          alt={alt1}
          loading="lazy"
          width={1440}
          height={1440}
        />
      </div>
      <div className="md:px-2 md:w-1/2">
        <Image
          src={`${WebsiteStorage.images}/${image2}`}
          alt={alt2}
          loading="lazy"
          width={1440}
          height={1440}
        />
      </div>
    </div>
  );
};
