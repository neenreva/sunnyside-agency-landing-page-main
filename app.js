const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", function () {
  document.querySelector(".mobile__nav").classList.toggle("hidden");
});
