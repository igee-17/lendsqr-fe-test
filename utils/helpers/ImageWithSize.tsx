import React from "react";

const imageWithSize = (src) => {
  //   const [dimensions, setDimensions] = React.useState({ width: 0, height: 0 });
  console.log("function", src);

  const image = new Image();
  //   console.log(image);
  image.src = src;
  //   setDimensions({
  //     width: image.width,
  //     height: image.height,
  //   });

  return { width: image.width, height: image.height };
};

export default imageWithSize;
