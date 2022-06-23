let firstPep = document.querySelector(".first");
let secondPep = document.querySelector(".second");
let thirdPep = document.querySelector(".third");
let fourthPep = document.querySelector(".fourth");
let fifthPep = document.querySelector(".fifth");
let sixthPep = document.querySelector(".sixth");
let me = document.querySelector(".my-window");

firstPep.addEventListener("click", () => {
  firstPep.style.border = "3px solid rgb(0, 140, 255)";
  firstPep.style.transition = "all .2s";
  secondPep.style.border = "none";
  thirdPep.style.border = "none";
  fourthPep.style.border = "none";
  fifthPep.style.border = "none";
  sixthPep.style.border = "none";
  me.style.border = "none";
});

secondPep.addEventListener("click", () => {
  secondPep.style.border = "3px solid rgb(0, 140, 255)";
  secondPep.style.transition = "all .2s";
  firstPep.style.border = "none";
  thirdPep.style.border = "none";
  fourthPep.style.border = "none";
  fifthPep.style.border = "none";
  me.style.border = "none";
  sixthPep.style.border = "none";
});

thirdPep.addEventListener("click", () => {
  thirdPep.style.border = "3px solid rgb(0, 140, 255)";
  thirdPep.style.transition = "all .2s";
  firstPep.style.border = "none";
  secondPep.style.border = "none";
  fourthPep.style.border = "none";
  fifthPep.style.border = "none";
  me.style.border = "none";
  sixthPep.style.border = "none";
});

fourthPep.addEventListener("click", () => {
  fourthPep.style.border = "3px solid rgb(0, 140, 255)";
  fourthPep.style.transition = "all .2s";
  firstPep.style.border = "none";
  secondPep.style.border = "none";
  thirdPep.style.border = "none";
  fifthPep.style.border = "none";
  me.style.border = "none";
  sixthPep.style.border = "none";
});

fifthPep.addEventListener("click", () => {
  fifthPep.style.border = "3px solid rgb(0, 140, 255)";
  fifthPep.style.transition = "all .2s";
  firstPep.style.border = "none";
  secondPep.style.border = "none";
  thirdPep.style.border = "none";
  fourthPep.style.border = "none";
  me.style.border = "none";
  sixthPep.style.border = "none";
});

sixthPep.addEventListener("click", () => {
  sixthPep.style.border = "3px solid rgb(0, 140, 255)";
  sixthPep.style.transition = "all .2s";
  firstPep.style.border = "none";
  secondPep.style.border = "none";
  thirdPep.style.border = "none";
  fourthPep.style.border = "none";
  fifthPep.style.border = "none";
  me.style.border = "none";
});

me.addEventListener("click", () => {
  me.style.border = "3px solid rgb(0, 140, 255)";
  me.style.transition = "all .2s";
  firstPep.style.border = "none";
  secondPep.style.border = "none";
  thirdPep.style.border = "none";
  fourthPep.style.border = "none";
  fifthPep.style.border = "none";
  sixthPep.style.border = "none";
});
