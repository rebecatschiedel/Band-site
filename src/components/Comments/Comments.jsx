import axios from "axios";
import React, { useEffect, useState } from "react";
import CommentCard from "../CommentCard/CommentCard";
import Form from "../Form/Form";
import "./Comments.scss";
import { getComments } from "../../helpers";

const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default function Comments() {
  const [comments, setComments] = useState([]);

  async function updateState() {
    const data = await getComments();
    setComments(data);
  }

  useEffect(() => {
    updateState();
  }, []);

  const handleLike = async function (id) {
    try {
      await axios.put(`${API_URL}/comments/${id}/like?api_key=${API_KEY}`);
      await updateState();
    } catch (err) {
      return new Error("A problem happened while Liking the comment", err);
    }
  };

  const handleDelete = async function (id) {
    try {
      await axios.delete(`${API_URL}/comments/${id}?api_key=${API_KEY}`);
      await updateState();
    } catch (err) {
      return new Error("A problem happened while deleting the comment", err);
    }
  };

  return (
    <section className="comments">
      <h2 className="comments__title">Join the Conversation</h2>
      <div className="comments__container">
        <div className="comments__avatar" />
        <Form updateState={updateState} />
      </div>
      {comments.length === 0 ? (
        <p>Loading</p>
      ) : (
        comments.map((comment) => (
          <CommentCard
            key={comment.id}
            comment={comment}
            handleDelete={handleDelete}
            handleLike={handleLike}
          />
        ))
      )}
    </section>
  );
}
