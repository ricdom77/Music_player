const songName = document.getElementById("song-name");
const bandName = document.getElementById("band-name");
const song = document.getElementById("audio");
const play = document.getElementById("play");

songName.innerText = "Eyes of the tiger";
bandName.innerText = "Survivor";

function playSong() {
  song.play();
}

play.addEventListener("click", playSong);

play.onpause;
