document.querySelector("#scroll-down").addEventListener("click", () => {
  window.scrollTo({
    top: document.querySelector("#about-me").offsetTop - 20,
  });
});

document.querySelector("#toggle-theme").addEventListener("click", () => {
  document.documentElement.classList.toggle("light-theme");
});

const prefersLight = window.matchMedia(
  "(prefers-color-scheme: light)"
)?.matches;
if (prefersLight) {
  document.documentElement.classList.toggle("light-theme");
}

let grades = [10, 20, 9];
let sum = 0;
grades.forEach(function (grade) {
  sum = sum + grade;
});
let average = sum / grades.length;
