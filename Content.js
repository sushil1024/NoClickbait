let staticImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI2udqkFWKqdM_QavuH7gk0Con676EBzO9eTmeCegAMjILDFowHru5rdVHwGSEnaE5Jtk&usqp=CAU";

function replaceThumbnails() {
  const imgs = document.getElementsByTagName("img");
  for (let image of imgs) {
    image.src = staticImage;
  }
}

// initial replacement
replaceThumbnails();

// initialize mutation observer
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      replaceThumbnails();
    }
  });
});

// observe for changes
observer.observe(document.body, {
  childList: true,
  subtree: true,
});
