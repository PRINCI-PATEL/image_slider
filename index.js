const imageContainer = document.querySelector(".image-container");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

let currentIndex = 0;
const totalImages = imageContainer.children.length;

function updateSlider() {
  imageContainer.style.transform = `translateX(-${currentIndex * 500}px)`;
}

nextBtn.addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
});

prevBtn.addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + totalImages) % totalImages;
  updateSlider();
});
