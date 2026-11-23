const menuButton = document.getElementById("menuButton");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("active");
});

nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

// Project video players: switch between videos (Gameplay / Presentation)
document.querySelectorAll("[data-video-player]").forEach((player) => {
    const video = player.querySelector("video");
    const tabs = player.querySelectorAll(".video-tab");

    tabs.forEach((tab) => {
        tab.addEventListener("click", () => {
            if (tab.classList.contains("active")) return;

            tabs.forEach((t) => {
                t.classList.remove("active");
                t.setAttribute("aria-selected", "false");
            });
            tab.classList.add("active");
            tab.setAttribute("aria-selected", "true");

            const wasPlaying = !video.paused;
            video.pause();
            video.poster = tab.dataset.poster;
            video.src = tab.dataset.src;
            video.load();
            if (wasPlaying) video.play();
        });
    });
});
