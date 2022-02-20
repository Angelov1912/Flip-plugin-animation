gsap.registerPlugin(Flip);

function doFlip(el) {
  const imageParent = el.target.closest(".images");
  const allImages = imageParent.querySelectorAll("img");
  const state = Flip.getState(allImages);

  // stop the parent element from collapsing
  // while the children are absolutely positioned.
  imageParent.style.height = `${imageParent.offsetHeight}px`;

  // Make DOM or styling changes
  if (imageParent.classList.contains("state-1")) {
    imageParent.classList.remove("state-1");
    imageParent.classList.add("state-2");
  } else if (imageParent.classList.contains("state-2")) {
    imageParent.classList.remove("state-2");
    imageParent.classList.add("state-3");
  } else {
    imageParent.classList.remove("state-3");
    imageParent.classList.add("state-1");
  }

  Flip.from(state, {
    duration: 0.8, //Set the speed of flipping the images
    ease: "power1.inOut",
    absolute: true, // take the images out of the document flow during flip
    onComplete: () => {
      imageParent.style.height = "unset"; // reset container height
    },
  });
}

const allImageZones = document.querySelectorAll(".images");
allImageZones.forEach((zone) => {
  zone.addEventListener("click", doFlip);
});
