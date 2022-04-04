// add to cart
let productsCountEl = document.getElementById("products-count");

let addToCartButtom = document.querySelectorAll(".add-to");

for (i = 0; i < addToCartButtom.length; i++) {
  addToCartButtom[i].addEventListener("click", function () {
    productsCountEl.textContent = +productsCountEl.textContent + 1;
  });
}

// modal window
let modal = document.querySelector(".modal");
let moreDetailsButtons = document.querySelectorAll(".more-details");
let closeBtn = document.querySelector(".btn-close");

moreDetailsButtons.forEach((item) => {
  item.addEventListener("click", openModal);
});

function openModal() {
  modal.classList.add("show");
  modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.remove("show");
  modal.classList.add("hide");
}

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

// start dialog window
function showModalByScroll() {
  if (window.pageYOffset > document.documentElement.scrollHeight / 2) {
    openModal();
    window.removeEventListener("scroll", showModalByScroll);
  }
}
window.addEventListener("scroll", showModalByScroll);

// change like button
let likeOnProducts = document.querySelectorAll(".like");

likeOnProducts.forEach((item) =>
  item.addEventListener("click", function () {
    item.classList.toggle("liked");
  })
);

// Counter

let decrementButtons = document.querySelectorAll(".decrement-button")[0];
let incrementButtons = document.querySelectorAll(".increment-button")[0];
let quantityValue = document.querySelectorAll(".product-quantity input")[0];

function Counter(
  decrementButton,
  incrementButton,
  inputField,
  minCount = 1,
  maxCount = 10
) {
  this.domRefs = {
    decrementButton,
    incrementButton,
    inputField,
  };
  this.toggleButtonState = function () {
    const count = this.domRefs.inputField.value;
    this.domRefs.decrementButton.disabled = count <= minCount;
    this.domRefs.incrementButton.disabled = count >= maxCount;
  };

  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };
  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };

  this.domRefs.decrementButton.addEventListener(
    "click",
    this.decrement.bind(this)
  );
  this.domRefs.incrementButton.addEventListener(
    "click",
    this.increment.bind(this)
  );
}
let counter1 = new Counter(decrementButtons, incrementButtons, quantityValue);

// slider

$(".slider-block").slick();

// let decrementButtons = document.querySelectorAll(".decrement-button")[0];
// let incrementButtons = document.querySelectorAll(".increment-button")[0];
// let quantityValue = document.querySelectorAll(".product-quantity input")[0];

// function Counter(
//   decrementButton,
//   incrementButton,
//   inputField,
//   minCount = 1,
//   maxCount = 10
// ) {
//   this.domRefs = {
//     decrementButton,
//     incrementButton,
//     inputField,
//   };
//   this.toggleButtonState = function () {
//     const count = this.domRefs.inputField.value;
//     this.domRefs.decrementButton.disabled = count <= minCount;
//     this.domRefs.incrementButton.disabled = count >= maxCount;
//   };

//   this.increment = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
//     this.toggleButtonState();
//   };
//   this.decrement = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
//     this.toggleButtonState();
//   };
//   this.domRefs.incrementButton.addEventListener(
//     "click",
//     this.increment.bind(this)
//   );
//   this.domRefs.decrementButton.addEventListener(
//     "click",
//     this.decrement.bind(this)
//   );
// }

// let counter1 = new Counter(decrementButtons, incrementButtons, quantityValue);

// let decrementButtons = document.querySelectorAll(".decrement-button");
// let incrementButtons = document.querySelectorAll(".increment-button");
// let quantityValue = document.querySelectorAll(".product-quantity input");

// function Counter(
//   incrementButton,
//   decrementButton,
//   inputField,
//   minCount = 1,
//   maxCount = 10
// ) {
//   this.domRefs = {
//     incrementButton,
//     decrementButton,
//     inputField,
//   };
//   this.toggleButtonState = function () {
//     const count = this.domRefs.inputField.value;
//     this.domRefs.decrementButton.disabled = count <= minCount;
//     this.domRefs.incrementButton.disabled = count >= maxCount;
//   };

//   this.toggleButtonState();

//   this.increment = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
//     this.toggleButtonState();
//   };
//   this.decrement = function () {
//     this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
//     this.toggleButtonState();
//   };
//   this.domRefs.incrementButton.addEventListener(
//     "click",
//     this.increment.bind(this)
//   );
//   this.domRefs.decrementButton.addEventListener(
//     "click",
//     this.decrement.bind(this)
//   );
// }
// const counters = [];

// quantityValue.forEach((item, i) => {
//   counters[(i = new Counter(incrementButtons[i], decrementButtons[i], item))];
// });
