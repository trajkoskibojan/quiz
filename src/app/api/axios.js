import axios from "axios";

const instance = axios.create({
  baseURL: "https://opentdb.com/api.php?amount=20&type=multiple",
});

export default instance;
