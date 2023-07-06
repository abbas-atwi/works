const sectionsBanners = document.querySelector(".section-banner-content");
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
  const sectionBnannertop = sectionsBanners.getBoundingClientRect().top < 0;
  if (sectionBnannertop) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
  console.log(sectionBnannertop);
});
