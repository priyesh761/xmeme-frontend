const uri = "http://localhost:8081";

// Return latest 100 memes
const get = async () => {
  // console.log("debug");
  return await fetch(uri + "/memes")
    .then((res) => res.json())
    .then((dta) => {
      return dta;
    })
    .catch((err) => console.log(err.message));
};

// Return memes with given id
const get_id = async (id) => {
  return await fetch(uri + `/memes/${id}`)
    .then((res) => res.json())
    .then((data) => data)
    .catch((err) => console.log(err.message));
};

// Add new meme to meme stream
const post = async (obj) => {
  return await fetch(uri + "/memes/", {
    method: "POST",
    body: JSON.stringify({
      name: obj.name,
      caption: obj.caption,
      url: obj.url,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => json)
    .catch((err) => console.log(err));
};

// Edit meme from meme stream
const patch = async (obj) => {
  return await fetch(uri + `/memes/${obj.id}`, {
    method: "PATCH",
    body: JSON.stringify({
      name: obj.name,
      caption: obj.caption,
      url: obj.url,
    }),
    headers: {
      Accept: "application/json",
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => json);
};
