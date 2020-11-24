let partySize = document.querySelectorAll(".partySize div");
let arrival = new Pikaday({ field: document.getElementById("arrival") });
let leave = new Pikaday({ field: document.getElementById("leave") });

for (let i = 0; i < partySize.length; i++) {
  partySize[i].addEventListener("click", (e) => {
    partySize[i].classList.toggle("inactive");
    partySize[i].classList.toggle("active");

    people = i + 1;

    for (let x = 0; x < partySize.length; x++) {
      if (x != i && partySize[i].classList.contains("active")) {
        partySize[x].classList.remove("active");
        partySize[x].classList.add("inactive");
      }
    }
  });
}

let differenceInTime = 0;
function landingPageChange() {
  // CALCULATE DAYS
  if (leave && arrival)
    differenceInTime = leave.getDate().getTime() - arrival.getDate().getTime();

  differenceInTime = differenceInTime / 1000 / 60 / 60 / 24;

  masterAccomInit();
}
