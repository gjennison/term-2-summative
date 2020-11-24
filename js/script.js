let page = 0;

// DATA
let people = 0;
let cost = 0;
let runningTotal = {
  accommodation: {},
  foodSelection: [false, false, false],
  foodCost: 0,
};

// SECTIONS
let sections = [
  { title: "landing", dom: document.querySelector(".landing") },
  { title: "master-accom", dom: document.querySelector(".master-accom") },
  { title: "sub-accom", dom: document.querySelector(".sub-accom") },
  { title: "food", dom: document.querySelector(".food") },
  { title: ".summary", dom: document.querySelector(".summary") },
  { title: ".payment", dom: document.querySelector(".payment") },
];

// ACCOMMODATION OPTIONS
let accom = [
  [
    { title: "Crowne Plaza", cost: 156, src: "assets/hotel1.jpeg" },
    { title: "Novotel", cost: 165, src: "assets/hotel2.jpg" },
  ],
  [
    { title: "YHA Christchurch", cost: 25, src: "assets/yha.jpg" },
    { title: "Avon City Backpackers", cost: 30, src: "assets/avon.jpg" },
  ],
  [
    { title: "Apollo motel", cost: 85, src: "assets/apollo.jpg" },
    { title: "The Camelot motel", cost: 95, src: "assets/camelot.jpg" },
  ],
  [
    { title: "Large Merivale home", cost: 260, src: "assets/merivale.jpg" },
    { title: "Medium Addington home", cost: 235, src: "assets/addington.png" },
  ],
];

/****************
 * PAGE BUTTONS *
 ****************/

let backButton = document.querySelector("#backButton");
let forwardButton = document.querySelector("#forwardButton");

backButton.addEventListener("click", () => {
  changePage(false);
});

forwardButton.addEventListener("click", () => {
  changePage(true);
});

function changePage(forwards) {
  if (forwards && page != 5) page++;
  if (!forwards && page != 0) page--;

  for (let i = 0; i < sections.length; i++) {
    sections[i].dom.style.display = "none";
  }
  sections[page].dom.style.display = "flex";

  sections[page].changed;

  if (page == 1) landingPageChange();

  if (page == 4) summaryUpdate();
}
