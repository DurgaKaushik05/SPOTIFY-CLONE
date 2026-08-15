const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#previous-btn");

const currTime = document.querySelector(".curr-time");
const totalTime = document.querySelector(".tot-time");
const progressBar = document.querySelector(".progress-bar");

const songName = document.querySelector(".song-name");
const singerName = document.querySelector(".singer-name");

const songs = [
    {
        name: "Beautiful Dream",
        singer: "Diego Nava",
        file: "./songs/mixkit-beautiful-dream-493.mp3"
    },
    {
        name: "Hazy After Hours",
        singer: "Alejandro Magaña",
        file: "./songs/mixkit-hazy-after-hours-132.mp3"
    },
    {
        name: "Hip Hop 02",
        singer: "Lily J",
        file: "./songs/mixkit-hip-hop-02-738.mp3"
    }
];

let currentSong = 0;
const audio = new Audio();

// Load song
function loadSong(index) {
    currentSong = index;

    audio.src = songs[index].file;

    songName.innerText = songs[index].name;
    singerName.innerText = songs[index].singer;

    currTime.innerText = "00:00";
    progressBar.value = 0;
}

// Play / Pause
playBtn.addEventListener("click", function () {

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

// Current time
audio.addEventListener("timeupdate", function () {

    let current = audio.currentTime;

    let minutes = Math.floor(current / 60);
    let seconds = Math.floor(current % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    currTime.innerText = `${minutes}:${seconds}`;

    if (audio.duration) {
        progressBar.value =
            (audio.currentTime / audio.duration) * 100;
    }
});

audio.addEventListener("loadedmetadata", function () {

    let minutes = Math.floor(audio.duration / 60);
    let seconds = Math.floor(audio.duration % 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    totalTime.innerText = `${minutes}:${seconds}`;
});

progressBar.addEventListener("input", function () {

    if (audio.duration) {
        audio.currentTime =
            (progressBar.value / 100) * audio.duration;
    }
});

nextBtn.addEventListener("click", function () {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    audio.play();
});

previousBtn.addEventListener("click", function () {

    currentSong--;

    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();
});

audio.addEventListener("ended", function () {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }
    loadSong(currentSong);
    audio.play();
});

loadSong(0);