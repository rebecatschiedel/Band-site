import "./CommentCard.scss";
import React from "react";
import Like from "../../assets/Icons/SVG/icon-like.svg";
import Delete from "../../assets/Icons/SVG/icon-delete.svg";

export default function CommentCard({
  comment: { id, name, likes, timestamp, comment },
  handleDelete,
  handleLike,
}) {
  const time = new Date(Number(timestamp)).toLocaleDateString();

  return (
    <article className="comment-card">
      <div className="comment-card__avatar" />
      <div className="comment-card__container">
        <div className="comment-card__wrapper">
          <h4 className="comment-card__name">{name}</h4>
          <time className="comment-card__timestamp">{time}</time>
        </div>
        <p className="comment-card__comment">{comment}</p>
        <div className="comment-card__icons">
          <img
            onClick={() => handleLike(id)}
            src={Like}
            alt="like icon"
            className="comment-card__like"
          />
          {likes > 0 && (
            <span className="comment-card__like-count">{likes}</span>
          )}
          <img
            onClick={() => handleDelete(id)}
            src={Delete}
            alt="delete icon"
            className="comment-card__delete"
          />
        </div>
      </div>
    </article>
  );
}
