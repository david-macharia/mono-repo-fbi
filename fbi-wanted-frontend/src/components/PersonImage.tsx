import React, { useState } from "react";

const PersonImage = ({ src, alt }: { src: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src);

  const handleImageError = () => {
    setImgSrc("/fugitive.jpg"); // You can use a local asset or a default URL
  };

  return (
    <img
      src={imgSrc}
      alt={alt}
      onError={handleImageError}
      className="w-full h-full object-contain"
    />
  );
};

export default PersonImage;
