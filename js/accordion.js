const accordion = document.querySelectorAll(".box__item");

for (item of accordion) {
  item.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
    } else {
      for (el of accordion) {
        el.classList.remove("active");
      }
      this.classList.add("active");
    }
  });
}
