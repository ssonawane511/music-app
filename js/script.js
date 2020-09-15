/** @format */

const play = document.getElementById("play");
const image = document.getElementById("track_img");
const music = document.getElementById("music");
let isplaying = false;

const playMusic = () => {
  music.play();
  play.classList.replace("fa-play-circle-o", "fa-pause-circle-o");
  image.classList.add("animate");
  isplaying = true;
};

const pauseMusic = () => {
  music.pause();
  play.classList.replace("fa-pause-circle-o", "fa-play-circle-o");
  image.classList.remove("animate");
  isplaying = false;
};
play.addEventListener("click", () => {
  if (isplaying) {
    pauseMusic();
  } else {
    playMusic();
  }
});
