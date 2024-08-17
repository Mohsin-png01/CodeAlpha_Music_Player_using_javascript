document.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('audio');
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const progress = document.getElementById('progress');
    const title = document.getElementById('title');
    const artist = document.getElementById('artist');

    // Example songs (for demo purposes)
    const songs = [
        { src: 'song1.mp3', title: 'Song 1', artist: 'Artist 1' },
        { src: 'song2.mp3', title: 'Song 2', artist: 'Artist 2' },
        { src: 'song3.mp3', title: 'Song 3', artist: 'Artist 3' }
    ];

    let currentSongIndex = 0;

    function loadSong(song) {
        audio.src = song.src;
        title.textContent = song.title;
        artist.textContent = song.artist;
        audio.play();
    }

    function updateProgress() {
        if (audio.duration) {
            progress.value = (audio.currentTime / audio.duration) * 100;
        }
    }

    function seek() {
        const seekTime = (progress.value / 100) * audio.duration;
        audio.currentTime = seekTime;
    }

    // Load the first song
    loadSong(songs[currentSongIndex]);

    // Play/Pause functionality
    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.textContent = 'Pause';
        } else {
            audio.pause();
            playButton.textContent = 'Play';
        }
    });

    // Next song
    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    // Previous song
    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    // Update progress bar
    audio.addEventListener('timeupdate', updateProgress);

    // Seek functionality
    progress.addEventListener('input', seek);
});
