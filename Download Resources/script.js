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





document.addEventListener('DOMContentLoaded', () => {
    const categoryButtons = document.querySelectorAll('.category-btn');
    const cards = document.querySelectorAll('.card');
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    const sortSelect = document.querySelector('.sort-select');

    // Category filtering
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            button.classList.add('active');

            const selectedCategory = button.textContent.toLowerCase();

            // Show/hide cards based on category
            cards.forEach(card => {
                const cardCategory = card.querySelector('.category-text').textContent.toLowerCase();
                if (selectedCategory === 'all' || cardCategory === selectedCategory) {
                    card.removeAttribute('hidden');
                } else {
                    card.setAttribute('hidden', '');
                }
            });
        });
    });

    // Search functionality
    const handleSearch = () => {
        const searchTerm = searchInput.value.toLowerCase();

        cards.forEach(card => {
            const title = card.querySelector('h2').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();

            if (title.includes(searchTerm) || description.includes(searchTerm)) {
                card.removeAttribute('hidden');
            } else {
                card.setAttribute('hidden', '');
            }
        });
    };

    searchBtn.addEventListener('click', handleSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    // Sorting functionality
    sortSelect.addEventListener('change', () => {
        const sortBy = sortSelect.value;
        const cardsArray = Array.from(cards);

        if (sortBy === 'name') {
            cardsArray.sort((a, b) => {
                const titleA = a.querySelector('h2').textContent;
                const titleB = b.querySelector('h2').textContent;
                return titleA.localeCompare(titleB);
            });
        } else if (sortBy === 'date') {
            // For demo purposes, we'll just reverse the order
            cardsArray.reverse();
        }

        // Re-append sorted cards
        const container = document.querySelector('.cards-grid');
        cardsArray.forEach(card => container.appendChild(card));
    });
});