import axios from "axios";

const API_LINK = "https://api.shrtco.de/v2/shorten";

function shortenLink(link) {
  try {
    return axios.get(API_LINK + "?url=" + encodeURIComponent(link));
  } catch (ex) {
    return {
      error: "Something wrong happens. Please try again later",
    };
  }
}

export default {
  shortenLink: shortenLink,
};
