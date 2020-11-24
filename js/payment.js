// REGEX
let visa = new RegExp("^4[0-9 ]{15}(?:[0-9]{3})?$");
let amex = new RegExp("^3[47][0-9 ]{16}$");
let mastercard = new RegExp("^5[1-5][0-9 ]{17}$");
let nameReg = new RegExp("^[a-zA-Z' -]+$");
let cvvReg = new RegExp("^[0-9][0-9][0-9]$");

// DOM ELEMENTS
let nameOnCard = document.querySelector("#payment .name input");
let CVV = document.querySelector(".CVV input");
let cardNumber = document.querySelector("#card-number-field input");
let cardIMG = document.querySelector("#credit_cards img");
let confirm = document.querySelector("#payment p");

let success = document.querySelector("#success");
let successClose = document.querySelector("i:first-child");
let successContent = document.querySelector(".success-content");

nameOnCard.classList.add("payment-default");
CVV.classList.add("payment-default");
cardNumber.classList.add("payment-default");

nameOnCard.addEventListener("blur", () => {
  testValidation(nameReg, nameOnCard);
});

CVV.addEventListener("blur", () => {
  testValidation(cvvReg, CVV);
});

cardNumber.addEventListener("blur", () => {
  if (
    visa.test(cardNumber.value) ||
    amex.test(cardNumber.value) ||
    mastercard.test(cardNumber.value)
  ) {
    if (cardNumber.classList.contains("payment-default")) {
      cardNumber.classList.remove("payment-default");
      cardNumber.classList.add("payment-valid");
    } else {
      cardNumber.classList.remove("payment-invalid");
      cardNumber.classList.add("payment-valid");
    }
  } else {
    if (cardNumber.classList.contains("payment-default")) {
      cardNumber.classList.remove("payment-default");
      cardNumber.classList.add("payment-invalid");
    } else {
      cardNumber.classList.add("payment-invalid");
      cardNumber.classList.remove("payment-valid");
    }
  }

  if (visa.test(cardNumber.value)) cardIMG.src = "assets/visa.png";
  if (amex.test(cardNumber.value)) cardIMG.src = "assets/amex.png";
  if (mastercard.test(cardNumber.value)) cardIMG.src = "assets/mastercard.svg";
});

function testValidation(reg, dom) {
  if (reg.test(dom.value)) {
    if (dom.classList.contains("payment-default")) {
      dom.classList.remove("payment-default");
      dom.classList.add("payment-valid");
    } else {
      dom.classList.remove("payment-invalid");
      dom.classList.add("payment-valid");
    }
  } else {
    if (dom.classList.contains("payment-default")) {
      dom.classList.remove("payment-default");
      dom.classList.add("payment-invalid");
    } else {
      dom.classList.add("payment-invalid");
      dom.classList.remove("payment-valid");
    }
  }
}

confirm.addEventListener("click", () => {
  if (nameReg.test(nameOnCard.value) && cvvReg.test(CVV.value)) {
    if (
      visa.test(cardNumber.value) ||
      amex.test(cardNumber.value) ||
      mastercard.test(cardNumber.value)
    ) {
      success.style.display = "flex";
      successContent.style.transform = "scale(0.8)";
      anime({
        targets: ".success-content",
        scale: 1.2,
      });
    }
  }
});

success.addEventListener("click", (e) => {
  if (
    e.target != successContent &&
    e.target != successContent.children[0] &&
    e.target != successContent.children[1] &&
    e.target != successContent.children[2]
  )
    success.style.display = "none";
});

successClose.addEventListener("click", () => {
  success.style.display = "none";
});
