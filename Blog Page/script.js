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








// Sample article data
const articles = [{
        id: 1,
        image: 'assets/1.png',
        categories: ['Category 1', 'Category 2'],
        title: 'Lorem ipsum dolor sit',
        excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        date: new Date('2024-03-01')
    },
    // Duplicate this object 8 more times with different dates and IDs to create 9 articles
].concat(Array.from({ length: 8 }, (_, i) => ({
    id: i + 2,
    image: 'assets/1.png',
    categories: ['Category 1', 'Category 2', 'Category 3'].sort(() => Math.random() - 0.5).slice(0, 2),
    title: 'Lorem ipsum dolor sit',
    excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    date: new Date(2024, Math.floor(Math.random() * 12), Math.floor(Math.random() * 28))
})));

// DOM Elements
const articlesGrid = document.getElementById('articlesGrid');
const categoryButtons = document.querySelectorAll('.category-btn');
const sortBtn = document.querySelector('.sort-btn');
const sortOptions = document.querySelector('.sort-options');
const emailInput = document.getElementById('emailInput');
const subscribeBtn = document.querySelector('.subscribe-btn');

// State
let currentCategory = 'all';
let currentSort = 'latest';

// Functions
function renderArticles(filteredArticles) {
    articlesGrid.innerHTML = filteredArticles.map(article => `
        <article class="article-card">
            <img src="${article.image}" alt="${article.title}" class="article-image">
            <div class="article-content">
                <div class="article-categories">
                    ${article.categories.map((cat, i) => 
                        `<span class="article-category cat-${i + 1}">${cat}</span>`
                    ).join('')}
                </div>
                <h2 class="article-title">${article.title}</h2>
                <p class="article-excerpt">${article.excerpt}</p>
                <a href="#" class="read-more">
                Read article <img src="assets/arrow.png" alt="arrow" class="arrow-icon">
                </a>
            </div>
        </article>
    `).join('');
}

function filterAndSortArticles() {
    let filtered = articles;
    
    if (currentCategory !== 'all') {
        filtered = articles.filter(article => 
            article.categories.includes(`Category ${currentCategory}`)
        );
    }
    
    filtered.sort((a, b) => {
        if (currentSort === 'latest') {
            return b.date - a.date;
        } else {
            return a.date - b.date;
        }
    });
    
    renderArticles(filtered);
}

// Event Listeners
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentCategory = btn.dataset.category;
        filterAndSortArticles();
    });
});

sortBtn.addEventListener('click', () => {
    sortOptions.classList.toggle('show');
});

document.querySelectorAll('.sort-option').forEach(option => {
    option.addEventListener('click', () => {
        currentSort = option.dataset.sort;
        sortBtn.textContent = `Sort by ${currentSort === 'latest' ? 'Latest' : 'Oldest'} ▼`;
        sortOptions.classList.remove('show');
        filterAndSortArticles();
    });
});

document.addEventListener('click', (e) => {
    if (!sortBtn.contains(e.target) && !sortOptions.contains(e.target)) {
        sortOptions.classList.remove('show');
    }
});

subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value.trim();
    if (email && email.includes('@')) {
        alert('Thank you for subscribing!');
        emailInput.value = '';
    } else {
        alert('Please enter a valid email address');
    }
});

// Initial render
filterAndSortArticles();