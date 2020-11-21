const cartCount = document.getElementById("cartCount");
const addToCart = document.querySelectorAll(".add-to-cart");
const cart = document.getElementById("cart");
const removeAll = document.getElementById("removeAll");
const total = document.getElementById("total");

let totalPrice = 0;
let count = 0;

cartCount.innerHTML = 0;
total.innerHTML = 0;

addToCart.forEach((add) => {
  add.addEventListener("click", (e) => {
    const productName =
      e.target.parentElement.parentNode.children[0].textContent;
    const productPrice =
      e.target.parentElement.parentNode.children[1].textContent;
    const newItem = `<div class="newItem">
                         <p>${productName}</p>
                         <p>${productPrice}</p>
                     </div>`;
    cart.innerHTML += newItem;
    count++;
    totalPrice += parseInt(productPrice);
    updateCount();
    updatePrice();
    e.target.disabled = true;
  });
});

removeAll.addEventListener("click", () => {
  cart.innerHTML = "";
  count = 0;
  totalPrice = 0;
  updateCount();
  updatePrice();
  addToCart.forEach((add) => {
    add.disabled = false;
  });
});

const updatePrice = () => {
  total.innerHTML = totalPrice;
};

const updateCount = () => {
  cartCount.innerHTML = count;
};
