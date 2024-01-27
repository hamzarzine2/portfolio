import React from "react";
import LinkPart from "../LinkPart/LinkPart";

export default function LinkSection() {
  const images = require.context('../../images', false, /\.(png)$/);

  const imageList = images.keys().map((imagePath) => {
    const imageName = imagePath.replace('./', ''); 
    return {
      name: imageName,
      path: `https://github.com/hamzarzine2`,
      image: images(imagePath).default,
    };
  });

  return (
    <>
      {imageList.map((item, index) => (
        <LinkPart key={index} image={item.image} path={item.path} />
      ))}
    </>
  );
}
