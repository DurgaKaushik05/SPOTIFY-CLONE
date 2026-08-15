# 🎵 Spotify Clone

A Spotify-inspired music player UI built using **HTML, CSS, and JavaScript**.

This project was created as a frontend practice project to learn DOM manipulation, JavaScript events, UI interactions, and the HTML5 Audio API.

> **Disclaimer:** This is an educational project inspired by Spotify's interface. It is not affiliated with, sponsored by, or endorsed by Spotify.

---

## ✨ Features

- 🎨 Spotify-inspired dark user interface
- 🎵 Music player interface
- ▶️ Play / Pause functionality
- ⏭️ Next song functionality
- ⏮️ Previous song functionality
- 🔄 Automatically moves to the next song when a song ends
- ⏱️ Current song time display
- ⌛ Total song duration display
- 🎚️ Interactive progress bar
- 🎼 Dynamic song title and singer name
- 🖼️ Album artwork and playlist cards
- 📱 Responsive-style layout

---

## 🛠️ Technologies Used

- **HTML5** – Structure of the webpage
- **CSS3** – Styling, layout, and design
- **JavaScript** – Functionality and DOM manipulation
- **HTML5 Audio API** – Audio playback and controls

---

## 📁 Project Structure

```text
spotify-clone/
│
├── assets/
│   ├── album_icon1.png
│   ├── album_icon2.png
│   ├── album_picture.jpeg
│   ├── card1img.jpeg
│   ├── card2img.jpeg
│   ├── card3img.jpeg
│   ├── card4img.jpeg
│   ├── card5img.jpeg
│   ├── card6img.jpeg
│   ├── logo.png
│   ├── player_icon1.png
│   ├── player_icon2.png
│   ├── player_icon3.png
│   ├── player_icon4.png
│   ├── player_icon5.png
│   └── ...
│
├── index.html
├── style.css
├── script.js
└── README.md

🎧 Audio Files

This repository does not include third-party MP3 audio files.

The music player was tested locally using audio files during development. Audio files are not included in this public repository.

If you want to test the player locally, you can add your own audio files that you have permission to use.

Create a songs folder:

songs/
├── song1.mp3
├── song2.mp3
└── song3.mp3

Then update the songs array in script.js:

const songs = [
    {
        name: "Your Song",
        singer: "Your Artist",
        file: "./songs/song1.mp3"
    },
    {
        name: "Another Song",
        singer: "Another Artist",
        file: "./songs/song2.mp3"
    },
    {
        name: "Third Song",
        singer: "Third Artist",
        file: "./songs/song3.mp3"
    }
];
Important

Only use audio files that you have permission or an appropriate license to use and redistribute.

🚀 How to Run
1. Clone the Repository
git clone <YOUR-GITHUB-REPOSITORY-URL>
2. Open the Project

Open the project folder in VS Code.

3. Use Live Server

Install the Live Server extension in VS Code.

Then:

Open index.html.
Right-click on the file.
Select Open with Live Server.
The project will open in your browser.
🎵 Testing the Music Player

The repository contains the complete player functionality, but no third-party MP3 files.

To test actual audio playback:

Create a songs folder.
Add your own legally usable .mp3 files.
Update the songs array in script.js.
Open the project using Live Server.
Click the Play button.

The player supports:

▶️ Play
⏸️ Pause
⏭️ Next
⏮️ Previous
🎚️ Progress bar
⏱️ Current time
⌛ Total duration
🔄 Automatic next song
💡 What I Learned

Through this project, I practiced:

HTML5 page structure
CSS Flexbox and layout
Creating a Spotify-inspired UI
JavaScript DOM manipulation
JavaScript event listeners
Arrays and objects
Functions
Conditional statements
Managing the current song index
HTML5 Audio API
Dynamic UI updates
Progress bar control
Working with local assets
Organizing a frontend project
🔮 Future Improvements

The project can be extended with:

🔍 Search functionality
❤️ Like / Unlike songs
📚 Create and manage playlists
🔀 Shuffle mode
🔁 Repeat mode
🔊 Volume control
🎵 Clickable album and playlist cards
💾 Local Storage for liked songs and playlists
📱 Improved mobile responsiveness
👤 Login and Signup
🗄️ Backend and database integration
📸 Screenshots

You can add screenshots of the project here after uploading them to the repository.

Example:

![Spotify Clone Screenshot](./assets/screenshot.png)
📌 Disclaimer

This project is created for educational and portfolio purposes only.

Spotify is a trademark of Spotify AB and its related entities.

This project is not an official Spotify product and is not affiliated with Spotify.

👩‍💻 Author

Durga Kaushik | Post Graduated(MCA)

Made with ❤️ while learning frontend web development.
