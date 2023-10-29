import axios from "axios";
import { URL } from "./api/api";

const instance = axios.create({
  URL: URL,
});

export default instance;
