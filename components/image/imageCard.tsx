import React from "react";
import Image from "next/image";
import testPic from "public/test.jpg";

const ImageCard = () => {
  return (
    <>
      <div className="w-full h-full relative overflow-hidden">
        <Image
          alt="image_alt"
          src={testPic}
          placeholder="blur"
          objectFit="cover"
          className="rounded hover:shadow-2xl object-cover"
        />
        <div className="absolute w-full h-full py-2.5 bottom-0 inset-x-0 bg-transparent cursor-pointer text-opacity-0 hover:text-opacity-100 text-white text-xs md:text-base text-center truncate leading-4">
          <p className="font-thin">Image Name here</p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;
