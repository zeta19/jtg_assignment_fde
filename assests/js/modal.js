const modalOverlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalClose = document.getElementById("modal-close");
const modalHeading = document.getElementById("modal-heading");
const modalImage = document.getElementById("modal-img");
var currentModal = 0;
const modalNext = document.getElementById("modal-next");
const modalPrev = document.getElementById("modal-prev");

modalOverlay.addEventListener("click", (e) => {
  modal.style.display = "none";
});

modalClose.addEventListener("click", (e) => {
  modal.style.display = "none";
});

const openModal = (index) => {
  modal.style.display = "block";
  currentModal = index;
  updateModal();
};

const mediaCards = [...document.getElementsByClassName("media-card")];

mediaCards.map((item, index) => {
  item.id = index;
  item.addEventListener("click", (e) => {
    openModal(index);
  });
});

modalNext.addEventListener("click", (e) => {
  if (currentModal + 1 == mediaCards.length) {
    currentModal = -1;
  }
  currentModal++;
  updateModal();
});

const updateModal = () => {
  modalHeading.innerHTML = `This is heading of modal ${currentModal}`;
  modalImage.src = mediaCards[currentModal].children[0].src;
  //   console.log();
};
