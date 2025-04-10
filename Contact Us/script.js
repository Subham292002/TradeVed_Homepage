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



document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("companyEmail").value;
    let agree = document.getElementById("agree").checked;

    if (!firstName || !lastName || !email || !agree) {
        alert("Please fill all required fields.");
        return;
    }

    alert("Form submitted successfully!");
    this.reset();
});