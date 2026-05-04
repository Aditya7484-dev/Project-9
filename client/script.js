let songsList = [];
let filteredSongs = [];
let currentIndex = -1;

const player = document.getElementById("player");
const nowPlaying = document.getElementById("nowPlaying");
const searchInput = document.getElementById("searchInput");
const list = document.getElementById("songList");

function renderSongs(songs) {
  list.innerHTML = "";

  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = song.title + " - " + song.artist;

    li.onclick = () => loadSong(index);

    list.appendChild(li);
  });
}

function playSong() {
  if (player.src) player.play();
}

function pauseSong() {
  player.pause();
}

function loadSong(index) {
  currentIndex = index;
  const song = filteredSongs[index];

  player.src = "http://localhost:5000" + song.fileUrl;
  player.play();

  nowPlaying.textContent = "Now Playing: " + song.title;
}

function nextSong() {
  if (currentIndex < filteredSongs.length - 1) {
    loadSong(currentIndex + 1);
  }
}

function prevSong() {
  if (currentIndex > 0) {
    loadSong(currentIndex - 1);
  }
}

player.addEventListener("ended", nextSong);

// Fetch songs
fetch("http://localhost:5000/api/songs")
  .then(res => res.json())
  .then(songs => {
    songsList = songs;
    filteredSongs = songs;
    renderSongs(filteredSongs);
  });

// 🔍 Search functionality
searchInput.addEventListener("input", () => {
  const value = searchInput.value.toLowerCase();

  filteredSongs = songsList.filter(song =>
    song.title.toLowerCase().includes(value) ||
    song.artist.toLowerCase().includes(value)
  );

  renderSongs(filteredSongs);
});