let total = 0;
function product(target) {
  //   addToCart("Flexible Sofa");
  const name = target.childNodes[3].innerText;
  addToCart(name);
  const priceInt = target.childNodes[5].innerText.split(" ")[0];
  const price = parseFloat(priceInt);
  const totalPrice = (total += price);
  document.getElementById("totalProductPrice").innerText = totalPrice;
  if (totalPrice > 0) {
    document.getElementById("btn-purchase").disabled = false;
  }
  if (totalPrice >= 200) {
    document.getElementById("coupon").disabled = false;
  }
  //coupon
  const couponApply = document.getElementById("coupon");
  couponApply.addEventListener("click", function () {
    const couponCodeField = document.getElementById("coupon-code");
    const couponCode = couponCodeField.value;
    const discountTwo = totalPrice * 0.2;
    const discount = discountTwo.toFixed(2);
    const totalP = totalPrice - discount;
    const totalField = document.getElementById("total");
    totalField.innerText = totalP;
    if (couponCode == "SELL200") {
      document.getElementById("discount").innerText = discount;
    } else {
      alert("Coupon code not valid");
    }
  });
  document.getElementById("goHome").addEventListener("click", function () {
    document.getElementById("totalProductPrice").innerText = 0;
    document.getElementById("discount").innerText = 0;
    document.getElementById("total").innerText = 0;
  });
}
// reusable function
function addToCart(productName) {
  const cart = document.getElementById("cart");
  const count = cart.childElementCount;
  const li = document.createElement("li");
  li.classList.add = ("text-2xl", "text-colBlack", "font-medium");
  li.innerHTML = `${count + 1}. ${productName}`;
  cart.appendChild(li);
}
