import React from "react";
import "./ImageList.css";
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log("images", props.images);

  const images = props.images.map((image) => {
    return <ImageCard image={image} />;
  });

  return <div className="image-list">{images}</div>;
};

export default ImageList;
