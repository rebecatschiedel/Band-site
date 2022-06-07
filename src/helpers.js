import axios from "axios";
const API_URL = process.env.REACT_APP_API_URL;
const API_KEY = process.env.REACT_APP_API_KEY;

export async function getComments() {
  try {
    const { data } = await axios(`${API_URL}/comments?api_key=${API_KEY}`);
    data.sort((a, b) => b.timestamp - a.timestamp);
    return data;
  } catch (err) {
    return new Error("A problem happened while getting the comments", err);
  }
}
