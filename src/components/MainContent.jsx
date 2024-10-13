import React from "react";
import ContentCard from "./ContentCard";
import authorImg1 from "../assets/user-img.jpg";
import authorImg2 from "../assets/download.jpeg";
import thumbnail1 from "../assets/thumbnail-1.jpg";
import thumbnail2 from "../assets/thumbnail-2.jpeg";

function MainContent() {
  return (
    <div className="main-content">
      <ContentCard
        title="How to make money in forex"
        authorImg={authorImg1}
        thumbnail={thumbnail1}
        authorName="Idowu Olatunji"
        views="10M"
        date="2 months"
        likes={50}
      />
      <ContentCard
        title="How to make money in forex"
        authorImg={authorImg2}
        thumbnail={thumbnail2}
        authorName="Mary Jane"
        views="20M"
        date="6 months"
        likes={100}
      />
      <ContentCard
        title="How to make money in forex"
        authorImg={authorImg1}
        thumbnail={thumbnail1}
        authorName="Idowu Olatunji"
        views="10M"
        date="2 months"
        likes={50}
      />
      <ContentCard
        title="How to make money in forex"
        authorImg={authorImg2}
        thumbnail={thumbnail2}
        authorName="Mary Jane"
        views="20M"
        date="6 months"
        likes={100}
      />
      <ContentCard
        title="How to make money in forex"
        authorImg={authorImg1}
        thumbnail={thumbnail1}
        authorName="Idowu Olatunji"
        views="10M"
        date="2 months"
        likes={50}
      />
      <ContentCard
        title="How to make money in forex"
        authorImg={authorImg2}
        thumbnail={thumbnail2}
        authorName="Mary Jane"
        views="20M"
        date="6 months"
        likes={100}
      />
    </div>
  );
}
export default MainContent;
