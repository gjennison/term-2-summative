function summaryUpdate() {
  let content = document.querySelector(".summary-content");
  let peopleAndNights = document.querySelector(".master-accom h4").innerHTML;
  let nights = parseInt(
    document.querySelector(".master-accom h4 span:nth-child(3)").innerHTML
  );
  let foodSelection = runningTotal.foodSelection;

  content.innerHTML = "";

  content.innerHTML +=
    "<div><img width='140' height='100' src='" +
    runningTotal.accommodation.src +
    "'>";
  content.innerHTML += "<p>" + runningTotal.accommodation.title + "</p></div>";
  content.innerHTML += "<p>" + peopleAndNights + "</p>";

  if (foodSelection[0]) {
    // content.innerHTML += "<p> with Breakfast";
    if (foodSelection[1] && !foodSelection[2]) {
      content.innerHTML += "<p> with Breakfast and Lunch</p>";
    } else if (foodSelection[1] && foodSelection[2]) {
      content.innerHTML += "<p> with Breakfast, Lunch, and Dinner</p>";
    } else if (!foodSelection[1] && foodSelection[2]) {
      content.innerHTML += "<p> with Breakfast and Dinner</p>";
    } else content.innerHTML += "<p> with Breakfast </p>";
  } else {
    if (foodSelection[1]) {
      // content.innerHTML += "<p>with Lunch";
      if (foodSelection[2])
        content.innerHTML += "<p> with Lunch and Dinner</p>";
      else content.innerHTML += "<p> with Lunch </p>";
    } else {
      if (foodSelection[2]) content.innerHTML += "<p>with Dinner</p>";
      else content.innerHTML += "<p>no food selected</p>";
    }
  }

  let totalCost =
    runningTotal.accommodation.cost * differenceInTime + runningTotal.foodCost;

  content.innerHTML += "<p>$" + totalCost + "</p>";
}
