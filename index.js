let wall = document.querySelector("#wall");

// Observer to track scroll area for lazy load
let observer = new IntersectionObserver(function (entries, self) {
  // iterate over each entry
  entries.forEach((entry) => {
    // process just the images that are intersecting.
    // isIntersecting is a property exposed by the interface
    if (entry.isIntersecting) {
      // custom function that copies the path to the img
      // from data-src to src
      entry.target.setAttribute("src", entry.target.getAttribute("data-src"));
      // the image is now in place, stop watching
      self.unobserve(entry.target);
    }
  });
});

const updateWall = async () => {
  var sub = 0;
  if (pageNo < 0) return 1;

  return get_page(pageNo).then((data) => {
    if (data == null || data.length == 0) {
      sub = 1;
      return;
    }
    wall.innerHTML = "";

    data.forEach((element) => {
      //  console.log(element);
      wall.innerHTML += `
        <div class="m-5">
          <div id=${element._id} class="card rounded col-12 col-md-6 col-lg-4 offset-md-2 offset-lg-3">
            <div class="card-header bg-white d-flex justify-content-between">
            <h5 style="display:inline">${element.name}</h5>
            <button class="btn rounded-circle ml-auto" onclick="location.href = 'edit.html?id=${element._id}';"}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="black"
              width="18px"
              height="18px"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34c-.39-.39-1.02-.39-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z" />
            </svg>
          </button>
        
            </div>
            <img src="loading.svg" data-src="${element.url}" alt="image not found" class="card-img-top" alt="loading..." height=400px >
            <div class="card-body">
                <p class="card-text">${element.caption}</div>
            </div>
        </div>
    </div>
    `;
    });

    const imgs = document.querySelectorAll("[data-src]");
    imgs.forEach((img) => observer.observe(img));

    // scroll to top after adding content
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    return sub;
  });

  
};


//current page of post
let pageNo = 0;
updateWall();

document.querySelector('#submit').addEventListener('click', async (e) => {
  e.preventDefault();
  let nm = document.querySelector("#name").value;
  let cp = document.querySelector("#caption").value;
  let lnk = document.querySelector("#url").value;

  post({ name: nm, caption: cp, url: lnk }).then((res) => {
    updateWall();
  });
});

//Load next page
const loadNext = async () => {
  pageNo++;
  pageNo -= await updateWall(pageNo);
}

//Load previous page
const loadPrev = async () => {
  pageNo--;
  pageNo += await updateWall(pageNo);
}
