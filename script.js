const video = document.getElementById('bgVideo');
const panel = document.getElementById('interactionPanel');
const overlay = document.getElementById('mainOverlay');
const enterText = document.getElementById('enterTxt');

const videos = [
    'video.mp4',
    'video1.mp4',
    'video2.mp4',
    'video3.mp4',
    'video4.mp4'
];

let currentIndex = -1;

function playRandomVideo() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * videos.length);
    } while (videos.length > 1 && randomIndex === currentIndex);
    currentIndex = randomIndex;

    video.classList.remove('loaded');
    video.src = videos[randomIndex];
    video.muted = true;
    video.load();
    video.play().catch(() => {});
}

video.addEventListener('playing', () => {
    video.classList.add('loaded');
});

window.addEventListener('DOMContentLoaded', () => {
    playRandomVideo();
});

overlay.addEventListener('click', () => {
    video.muted = false;
    video.play().catch(() => {});
    overlay.classList.remove('blurred');
    enterText.classList.add('fade-out');
    setTimeout(() => {
        panel.classList.add('show');
    }, 300);
}, { once: true });

video.addEventListener('ended', () => {
    playRandomVideo();
    video.muted = false;
});
