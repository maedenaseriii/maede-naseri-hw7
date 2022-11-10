const video = document.querySelector(".video");
const toggleButton = document.querySelector(".toggleButton");
function togglePlay() {
    if (video.paused || video.ended) {
        video.play();
    } else {
        video.pause();
    }
}
function updateToggleButton() {
    toggleButton.innerHTML = video.paused ? "►" : "❚❚";
}
toggleButton.addEventListener("click", togglePlay);
video.addEventListener("click", togglePlay);
video.addEventListener("play", updateToggleButton);
video.addEventListener("pause", updateToggleButton);