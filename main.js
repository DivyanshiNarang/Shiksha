//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .querySelector("nav")
    .classList.toggle("window-scroll", window.scrollY > 0); //immediately on scroll
});

// show/hide FAQ answers

const faqEl = document.querySelectorAll(".faq");

faqEl.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const iconEl = faq.querySelector(".faq__icon i");
    if (iconEl.className === "uil uil-plus") {
      iconEl.className = "uil uil-minus";
      console.log("hi");
    } else {
      iconEl.className = "uil uil-plus";
    }
  });
});
