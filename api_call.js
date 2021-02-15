//import axios from "axios";

const uri = "https://54.160.73.49:8081";
//const uri = "http://127.0.0.1:8081";

// Return latest 100 memes
const get = async () => {
  // console.log("debug");
  return await axios
    .get(uri + "/memes")
    .catch((err) => console.log(err.message));
};

// Return memes with given id
const get_id = async (id) => {
  return await axios
    .get(uri + `/memes/${id}`)
    .catch((err) => console.log(err.message));
};

// Add new meme to meme stream
const post = async (obj) => {
  return await axios
    .post(uri + "/memes/", {
      name: obj.name,
      caption: obj.caption,
      url: obj.url,
    })
    .catch((err) => console.log(err));
};

// Edit meme from meme stream
const patch = async (obj) => {
  return await axios
    .patch(uri + `/memes/${obj.id}`, {
      name: obj.name,
      caption: obj.caption,
      url: obj.url,
    })
    .catch((err) => console.log(err));
};
