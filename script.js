const playBtn = document.querySelector("#play-btn");
const nextBtn = document.querySelector("#next-btn");
const previousBtn = document.querySelector("#previous-btn");

const currTime = document.querySelector(".curr-time");
const totalTime = document.querySelector(".tot-time");
const progressBar = document.querySelector(".progress-bar");

const songName = document.querySelector(".song-name");
const singerName = document.querySelector(".singer-name");

// Add your own legally usable audio files and update the "file" paths.
const songs = [
    {
        name: "Demo Song 1",
        singer: "Demo Artist",
        file: ""
    },
    {
        name: "Demo Song 2",
        singer: "Demo Artist",
        file: ""
    },
    {
        name: "Demo Song 3",
        singer: "Demo Artist",
        file: ""
    }
];
let currentSong = 0;

const audio = new Audio();
function loadSong(index) {
    currentSong = index;

    songName.innerText = songs[index].name;
    singerName.innerText = songs[index].singer;

    currTime.innerText = "00:00";
    totalTime.innerText = "00:00";
    progressBar.value = 0;

    if (songs[index].file) {
        audio.src = songs[index].file;
    }
}

playBtn.addEventListener("click", function () {

    if (!songs[currentSong].file) {
        alert("Please add a valid audio file to play the song.");
        return;
    }

    if (audio.paused) {
        audio.play();
    } else {
        audio.pause();
    }
});

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
    if (songs[currentSong].file) {
        audio.play();
    }
});

previousBtn.addEventListener("click", function () {
    currentSong--;
    if (currentSong < 0) {
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    if (songs[currentSong].file) {
        audio.play();
    }
});
audio.addEventListener("ended", function () {

    currentSong++;

    if (currentSong >= songs.length) {
        currentSong = 0;
    }

    loadSong(currentSong);
    if (songs[currentSong].file) {
        audio.play();
    }
});

// Load first song information without automatically playing it
loadSong(0);
