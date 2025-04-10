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








// Sample job data - exactly 4 jobs for 2x2 grid
const jobs = [{
        title: 'Software Developer',
        type: 'Full time',
        location: 'Onsite, Delhi',
        education: 'B.tech, M.tech'
    },
    {
        title: 'Software Developer',
        type: 'Full time',
        location: 'Onsite, Delhi',
        education: 'B.tech, M.tech'
    },
    {
        title: 'Software Developer',
        type: 'Full time',
        location: 'Onsite, Delhi',
        education: 'B.tech, M.tech'
    },
    {
        title: 'Software Developer',
        type: 'Full time',
        location: 'Onsite, Delhi',
        education: 'B.tech, M.tech'
    }
];

// DOM Elements
const jobsGrid = document.getElementById('jobsGrid');

// Render jobs
function renderJobs() {
    jobsGrid.innerHTML = '';

    // Only render first 4 jobs to maintain 2x2 grid
    jobs.slice(0, 4).forEach(job => {
        const jobElement = document.createElement('div');
        jobElement.className = 'job-card';
        jobElement.innerHTML = `
            <div class="job-image"></div>
            <div class="job-content">
                <h2 class="job-title">${job.title}</h2>
                <div class="job-detail">
                    <svg viewBox="0 0 24 24">
                        <path d="M12,20A8,8 0 0,0 20,12A8,8 0 0,0 12,4A8,8 0 0,0 4,12A8,8 0 0,0 12,20M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22C6.47,22 2,17.5 2,12A10,10 0 0,1 12,2M12.5,7V12.25L17,14.92L16.25,16.15L11,13V7H12.5Z"></path>
                    </svg>
                    ${job.type}
                </div>
                <div class="job-detail">
                    <svg viewBox="0 0 24 24">
                        <path d="M12,11.5A2.5,2.5 0 0,1 9.5,9A2.5,2.5 0 0,1 12,6.5A2.5,2.5 0 0,1 14.5,9A2.5,2.5 0 0,1 12,11.5M12,2A7,7 0 0,0 5,9C5,14.25 12,22 12,22C12,22 19,14.25 19,9A7,7 0 0,0 12,2Z"></path>
                    </svg>
                    ${job.location}
                </div>
                <div class="job-detail">
                    <svg viewBox="0 0 24 24">
                        <path d="M12,3L1,9L12,15L21,10.09V17H23V9M5,13.18V17.18L12,21L19,17.18V13.18L12,17L5,13.18Z"></path>
                    </svg>
                    ${job.education}
                </div>
                <button class="apply-btn">Apply Now</button>
            </div>
        `;
        jobsGrid.appendChild(jobElement);
    });
}

// Initial render
renderJobs();

// Add click event listeners to Apply buttons
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('apply-btn')) {
        alert('Application submitted!');    
    }
});




// Sample card data
const cards = [{
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    },
    {
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    },
    {
        title: 'Lorem ipsum dolor sit',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud'
    }
];

// DOM Elements
const cardsGrid = document.getElementById('cardsGrid');

// Render cards
function renderCards() {
    cardsGrid.innerHTML = '';

    cards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.className = 'card';

        // Split description into paragraphs
        const paragraphs = card.description.split('\n\n');
        const descriptionHTML = paragraphs
            .map(p => `<p class="card-description">${p}</p>`)
            .join('');

        cardElement.innerHTML = `
            <div class="card-icon"></div>
            <h2 class="card-title">${card.title}</h2>
            ${descriptionHTML}
        `;

        cardsGrid.appendChild(cardElement);
    });
}

// Initial render
renderCards();




function shareResume() {
    window.location.href = "mailto:careers@tradedev.com";
}