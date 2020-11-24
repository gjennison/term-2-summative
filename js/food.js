let foodChoices = document.querySelectorAll(".food-choice");
let foodCosts = [10, 20, 25];

for (let i = 0; i < foodChoices.length; i++) {
  foodChoices[i].children[0].checked = false;
  foodChoices[i].addEventListener("click", () => {
    foodChoices[i].children[0].checked = !foodChoices[i].children[0].checked;

    if (foodChoices[i].children[0].checked) {
      runningTotal.foodSelection[i] = true;
      runningTotal.foodCost += foodCosts[i] * people * differenceInTime;
    } else {
      runningTotal.foodSelection[i] = false;
      runningTotal.foodCost -= foodCosts[i] * people * differenceInTime;
    }
  });
}
