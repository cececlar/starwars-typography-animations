console.log("hello world!");

const audio = document.getElementById("audio");

function playAudio() {
  console.log("inside playAudio");
  audio.play();
}

function pauseAudio() {
  console.log("inside pauseAudio");
  audio.pause();
}
