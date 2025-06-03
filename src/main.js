import Typed from "typed.js";

document.querySelectorAll(".greeting").forEach((element) => {
  new Typed(element, {
    strings: ["FullStack Developer", "Software Engineer", "Product Engineer"],
    loop: true,
    typeSpeed: 60,
  });
});

// const myTyped = new Typed("#greeting", {
//   strings: ["FullStack Developer", "Software Engineer", "Product Engineer"],
//   loop: true,
//   typeSpeed: 60,
// });

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".nav-btn");
  const activeBg = document.querySelector(".active-bg");
  const container = document.querySelector(".nav-container");
  const contentSections = document.querySelectorAll(".content-section");

  function setActiveButton(btn) {
    // Get the button's position relative to the container
    const containerRect = container.getBoundingClientRect();
    const btnRect = btn.getBoundingClientRect();

    // Calculate relative position accounting for container padding
    const offsetLeft = btnRect.left - containerRect.left - 4; // 4px for container padding
    const offsetTop = btnRect.top - containerRect.top - 4; // 4px for container padding

    const btnWidth = btn.offsetWidth;
    const btnHeight = btn.offsetHeight;

    // Apply the positioning
    activeBg.style.width = `${btnWidth}px`;
    activeBg.style.height = `${btnHeight}px`;
    activeBg.style.transform = `translate(${offsetLeft}px, ${offsetTop}px)`;

    // Update button classes
    buttons.forEach((b) => {
      b.classList.remove("nav-btn-actv");
      b.classList.add("nav-btn");
    });

    btn.classList.remove("nav-btn");
    btn.classList.add("nav-btn-actv");

    const targetSection = btn.getAttribute("data-section");
    switchContent(targetSection);
  }

  function switchContent(sectionName) {
    contentSections.forEach((section) => {
      section.classList.remove("active");
    });

    const targetContent = document.getElementById(`${sectionName}-content`);

    if (targetContent) {
      targetContent.classList.add("active");
    }
  }

  // Add click event listeners
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => setActiveButton(btn));
  });

  // Set initial active button
  if (buttons.length > 0) {
    setActiveButton(buttons[0]);
  }
});
