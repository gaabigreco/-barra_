const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const progressBar = document.getElementById('progress-bar');

// Toggle play/pause audio
playBtn.addEventListener('click', () => {
    if (audio.paused) {
        audio.play();
        playBtn.textContent = '⏸️';
    } else {
        audio.pause();
        playBtn.textContent = '▶️';
    }
});

// Update progress bar as the audio plays
audio.addEventListener('timeupdate', () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.value = progress;
});

// Change the current time of the audio when the progress bar is changed
progressBar.addEventListener('input', () => {
    audio.currentTime = (progressBar.value / 100) * audio.duration;
});

// Placeholder buttons for previous and next functionality
prevBtn.addEventListener('click', () => {
    audio.currentTime -= 10; // Retrocede 10 segundos
});

nextBtn.addEventListener('click', () => {
    audio.currentTime += 10; // Adelanta 10 segundos
});
