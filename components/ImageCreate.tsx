import Image from "next/image";
import sizeOf from "image-size";
import { useEffect, useState } from "react";
import imageWithSize from "../utils/helpers/ImageWithSize";

const ImageCreate = ({ src, alt }) => {
  const dimensions = imageWithSize(src);
  // console.log(dimensions);

  return (
    <Image
      src={src}
      alt={alt}
      width={dimensions.width}
      height={dimensions.height}
      quality={90}
      // objectFit="cover"
      style={{ objectFit: "cover" }}
    />
  );
};

export default ImageCreate;
