const uri = "https://xmeme-backend-v2.herokuapp.com";
//const uri = "http://127.0.0.1:8081";

const isInt = (value) =>
  !isNaN(value) &&
  (function (x) {
    return (x | 0) === x;
  })(parseFloat(value));

// Return latest 20 memes
const get = async () => {
  // console.log("debug");
  return await fetch(uri + "/memes")
    .then((res) => res.json())
    .then((dta) => dta)
    .catch((err) => console.log(err.message));
};

// Return provided page number of memes
// Per page 20 memes present
const get_page = async (pageNo) => {
  // console.log("debug");
  if (1 && isInt(pageNo))
    return await fetch(uri + "/memes" + "?pageNo=" + pageNo)
      .then((res) => res.json())
      .then((dta) => dta)
      .catch((err) => console.log(err.message));

  return [];
};

// Return memes with given id
const get_id = async (id) => {
  return await fetch(uri + `/memes/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

// Add new meme to meme stream
const post = async (obj) => {
  return await fetch(uri + "/memes/", {
    method: "POST",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: obj.name,
      caption: obj.caption,
      url: obj.url,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};

// Edit meme from meme stream
const patch = async (obj) => {
  return await fetch(uri + `/memes/${obj.id}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify({
      name: obj.name,
      caption: obj.caption,
      url: obj.url,
    }),
  })
    .then((response) => response.json())
    .then((data) => data)
    .catch((err) => console.log(err));
};
