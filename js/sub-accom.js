// TYPE = whether hotel or hostel etc
function initSubAccom(type) {
  let subAccom = sections[2].dom;
  subAccom.innerHTML = "";

  // x = specific accommodation
  for (let x = 0; x < accom[type].length; x++) {
    subAccom.innerHTML +=
      "<div class='item' onclick='selectAccom(" +
      type +
      "," +
      x +
      ")'><img src='" +
      accom[type][x].src +
      "'/> <div class='content'> <h2> " +
      accom[type][x].title +
      "<br>$" +
      accom[type][x].cost +
      "</h2> <button>select</button></div></div>";
  }
}

function selectAccom(type, x) {
  runningTotal.accommodation = accom[type][x];

  let items = document.querySelectorAll(".item");
  // items[x].classList.add("selected-sub");
  for (let y = 0; y < items.length; y++) {
    if (y === x) {
      if (items[y].classList.contains("selected-sub"))
        items[y].classList.remove("selected-sub");
      else {
        items[y].classList.add("selected-sub");
        forwardButton.classList.remove("disabled");
      }
    } else items[y].classList.remove("selected-sub");
    console.log(items[x].classList);
  }
}

function checkIfSubActive() {
  let items = document.querySelectorAll(".item");

  let bool = false;
  for (let i = 0; i < items.length; i++) {
    if (items[i].classList.contains("selected-sub")) bool = true;
  }

  if (!bool) forwardButton.classList.add("disabled");
}
