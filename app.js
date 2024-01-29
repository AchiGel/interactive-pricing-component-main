const slider = document.querySelector("#myRange");
const price = document.querySelector("#price");
const checkAnnual = document.querySelector("input[id = checkAnnual]");
const month = document.querySelector("#month");
const views = document.querySelector("#views");

slider.addEventListener("change", (e) => {
  let currentPrice = e.target.value;
  price.innerHTML = `$${currentPrice}.00`;
  views.textContent = `${25 / (slider.step / slider.value)}k`;
});

checkAnnual.addEventListener("change", function () {
  if (this.checked) {
    price.innerHTML = `$${parseInt(price.textContent.slice(1, -1)) * 12}.00`;
    month.textContent = "/Year";
  } else {
    price.innerHTML = `$${parseInt(price.textContent.slice(1, -1)) / 12}.00`;
    month.textContent = "/Month";
  }
});
