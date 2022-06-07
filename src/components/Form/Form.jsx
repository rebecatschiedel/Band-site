import React from "react";
import "./Form.scss";
import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export default class Form extends React.Component {
  state = { name: "", comment: "" };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API_URL}/comments?api_key=${API_KEY}`, this.state);
      await this.props.updateState();
      e.target.reset();
    } catch (err) {
      return new Error("A problem happened while posting the comments", err);
    }
  };

  render() {
    return (
      <form className="form" onSubmit={this.handleSubmit}>
        <label htmlFor="name" className="form__label">
          NAME
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
          className="form__input"
          onChange={this.handleChange}
        />

        <label htmlFor="comment" className="form__label">
          COMMENT
        </label>
        <textarea
          cols="50"
          rows="4"
          name="comment"
          maxLength="200"
          minLength="5"
          placeholder="Add a new comment"
          id="comment"
          className="form__input"
          onChange={this.handleChange}
        />

        <button type="submit" className="form__button">
          COMMENT
        </button>
      </form>
    );
  }
}
