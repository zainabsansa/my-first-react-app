import React, { useState } from "react";

function ContentCard(props) {
  //props// state// context
  const [likes, setLikes] = useState(0); //hook

  function handleLike(e) {
    setLikes(likes + 1);
  }

  return (
    <div className="card">
      <img src={props.thumbnail} alt="video" className="card img" />

      <div className="card-content">
        <img
          src={props.authorImg}
          alt="author image"
          className="card-content img"
        />

        <div className="card-description">
          <h4 className="card-title">{props.title}</h4>

          <p className="card-author">{props.authorName}</p>

          <span className="card-details">
            <p>{props.views} views</p>

            <p>&#x2022; {props.date} ago.</p>

            <span className="like-actions">
              <button className="like-btn" onClick={handleLike}>
                Like
              </button>

              <p id="likes">{likes} likes</p>
            </span>
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
