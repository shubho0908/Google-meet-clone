let unmute = document.getElementById("unmute");
let mute = document.getElementById("mute");
let video = document.getElementById("video");
let no_video = document.getElementById("no-video");
let end = document.getElementById("end");

// Audio
let join = new Audio("../audio/join.mp3");
join.play();
let left = new Audio("../audio/left.mp3");

unmute.addEventListener("click", () => {
  mute.style.display = "inline";
  unmute.style.display = "none";
});

video.addEventListener("click", () => {
  no_video.style.display = "inline";
  document.querySelector(".my-window").style.backgroundImage = "none";
  video.style.display = "none";
});

mute.addEventListener("click", () => {
  unmute.style.display = "inline";
  mute.style.display = "none";
});

no_video.addEventListener("click", () => {
  document.querySelector(".my-window").style.backgroundImage =
    "url('../BG.gif')";
  video.style.display = "inline";
  no_video.style.display = "none";
});

end.addEventListener("click", () => {
  left.play();
  document.querySelector(".main").style.display = "none";
  document.querySelector(".start-again").style.display = "flex";
  document.querySelector(".start-again").style.color = "white";
  document.querySelector(".my-window").style.display = "none";
  document.querySelector(".others-window").style.display = "none";
  document.querySelector(".options").style.display = "none";
});

document.getElementById("rejoin").addEventListener("click", () => {
  location.reload();
  setTimeout(() => {
    join.play();
  }, 2500);
});
