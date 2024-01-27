"use client"
import Image,{ StaticImageData } from "next/image";
import React, { useState, useEffect } from "react";
import './LinkPart.css';

export default function LinkPart({ image, path }: { image: StaticImageData; path: string }) {
  console.log(image);
  
  return (
    <>
    <a href={path} className="imageLink">
      <Image src={image} alt="github picture" />
    </a>
    </>
  );
}
