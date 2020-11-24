let options = document.querySelectorAll(".master-accom h2");

function masterAccomInit() {
  //   UPDATE STATUS
  document.querySelector(".master-accom span:first-child").innerHTML = people;

  if (people > 1)
    document.querySelector(".master-accom span:nth-child(2)").innerHTML =
      "people";
  else
    document.querySelector(".master-accom span:nth-child(2)").innerHTML =
      "person";

  document.querySelector(
    ".master-accom span:nth-child(3)"
  ).innerHTML = differenceInTime;

  if (differenceInTime > 1)
    document.querySelector(".master-accom span:last-child").innerHTML = "s";

  // CALCULATE WHICH ACCOMMODATION OPTIONS ARE AVAILABLE
  if (
    differenceInTime >= 1 &&
    differenceInTime <= 5 &&
    people >= 1 &&
    people <= 2
  ) {
    options[0].classList.add("active-a");
    options[0].classList.remove("inactive-a");
  } else {
    options[0].classList.remove("active-a");
    options[0].classList.add("inactive-a");
  }

  if (differenceInTime >= 1 && differenceInTime <= 10 && people == 1) {
    options[1].classList.add("active-a");
    options[1].classList.remove("inactive-a");
  } else {
    options[1].classList.remove("active-a");
    options[1].classList.add("inactive-a");
  }

  if (
    differenceInTime >= 3 &&
    differenceInTime <= 10 &&
    people >= 2 &&
    people <= 4
  ) {
    options[2].classList.add("active-a");
    options[2].classList.remove("inactive-a");
  } else {
    options[2].classList.remove("active-a");
    options[2].classList.add("inactive-a");
  }

  if (
    differenceInTime >= 2 &&
    differenceInTime <= 15 &&
    people >= 1 &&
    people <= 4
  ) {
    options[3].classList.add("active-a");
    options[3].classList.remove("inactive-a");
  } else {
    options[3].classList.remove("active-a");
    options[3].classList.add("inactive-a");
  }
}

for (let i = 0; i < options.length; i++) {
  options[i].addEventListener("click", () => {
    if (options[i].classList.contains("active-a")) {
      initSubAccom(i);

      for (let x = 0; x < options.length; x++) {
        if (options[x].classList.contains("selected-master"))
          options[x].classList.remove("selected-master");
      }
      if (options[i].classList.contains("selected-master"))
        options[i].classList.remove("selected-master");
      else options[i].classList.add("selected-master");
    }
  });
}
