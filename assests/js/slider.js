const sliderTrack = document.getElementById("slider-track");

let currentSlide = 0;
console.log(sliderTrack);

const navDots = [...document.getElementsByClassName("dots")];

navDots.map((item, index) => {
  item.addEventListener("click", (e) => {
    const width = sliderTrack.parentElement.clientWidth;
    currentSlide = index;
    console.log(currentSlide * width);
    sliderTrack.style.transform = `translateX(-${currentSlide * width}px)`;
    updateClass();
  });
});

const updateClass = () => {
  navDots.map((item, index) => {
    if (index == currentSlide) {
      return item.classList.add("active-nav");
    }
    item.classList.remove("active-nav");
  });
};

(() => {
  updateClass();
})();
