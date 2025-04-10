// // Create video element
// const video = document.createElement("video");
// video.src = "./assets/video.mp4"; // Replace with your video file
// video.controls = true;
// video.width = 600; // Set width

// // Append video to the div
// document.getElementById("video-container").appendChild(video);


const scrollContainer = document.getElementById("scrollContainer");
const dots = document.querySelectorAll(".dot");

scrollContainer.addEventListener("scroll", () => {
    let scrollPosition = scrollContainer.scrollLeft;
    let containerWidth = scrollContainer.offsetWidth;
    let index = Math.round(scrollPosition / containerWidth);

    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
});


document.querySelectorAll(".faq").forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("active");
    });
});




document.addEventListener("DOMContentLoaded", function() {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;

    // Load saved theme from localStorage
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-mode");
        themeToggle.checked = true;
    }

    // Toggle theme on switch click
    themeToggle.addEventListener("change", function() {
        body.classList.toggle("light-mode");

        // Save theme preference
        if (body.classList.contains("light-mode")) {
            localStorage.setItem("theme", "light");
        } else {
            localStorage.setItem("theme", "dark");
        }
    });
});





document.addEventListener("DOMContentLoaded", function() {
    let scrollTopBtn = document.getElementById("scrollTopBtn");

    window.onscroll = function() {
        if (document.documentElement.scrollTop > 200) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    };

    scrollTopBtn.addEventListener("click", function() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});