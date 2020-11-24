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
  { title: "landing", dom: document.querySelector("#landing") },
  { title: "master-accom", dom: document.querySelector("#master-accom") },
  { title: "sub-accom", dom: document.querySelector("#sub-accom") },
  { title: "food", dom: document.querySelector("#food") },
  { title: ".summary", dom: document.querySelector("#summary") },
  { title: ".payment", dom: document.querySelector("#payment") },
];

let sectionsDOM = document.querySelectorAll("section");

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
  if (page === 0 || backButton.classList.contains("disabled")) {
    anime({
      targets: "#backButton",
      translateX: 10,
      direction: "alternate",
      duration: 100,
      easing: "easeInOutSine",
    });
  } else {
    anime({
      targets: "#backButton",
      scale: 1.04,
      direction: "alternate",
      duration: 100,
      easing: "easeInOutSine",
    });
  }
  if (!backButton.classList.contains("disabled")) changePage(false);

  sectionsDOM[page].style.position = "absolute";
  sectionsDOM[page].style.left = "-100px";
  anime({
    targets: "#" + sectionsDOM[page].id,
    left: -0,
  });
});

forwardButton.addEventListener("click", () => {
  if (page === 5 || forwardButton.classList.contains("disabled")) {
    anime({
      targets: "#forwardButton",
      translateX: -10,
      direction: "alternate",
      duration: 100,
      easing: "easeInOutSine",
    });
  } else {
    anime({
      targets: "#forwardButton",
      scale: 1.04,
      direction: "alternate",
      duration: 100,
      easing: "easeInOutSine",
    });
  }

  if (!forwardButton.classList.contains("disabled")) changePage(true);

  if (page == 1) checkIfMasterActive();

  if (page == 2) checkIfSubActive();

  for (let i = 0; i < sectionsDOM.length - 1; i++) {}

  let target = "#" + sectionsDOM[page].id;

  sectionsDOM[page].style.position = "absolute";
  sectionsDOM[page].style.left = "100px";
  anime({
    targets: "#" + sectionsDOM[page].id,
    left: -0,
  });
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

  if (page != 0) backButton.classList.remove("disabled");
  else backButton.classList.add("disabled");

  if (page != 5) forwardButton.classList.remove("disabled");
  else forwardButton.classList.add("disabled");
}
