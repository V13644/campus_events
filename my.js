document.addEventListener("DOMContentLoaded", function () {

    const tabs = document.querySelectorAll(".tab");
    const events = document.querySelectorAll(".event-card");
    const searchInput = document.getElementById("event-search");
    const noResults = document.getElementById("no-results");

    let currentFilter = "all";

    function filterEvents() {

        const searchValue = searchInput.value.toLowerCase();
        let visibleCount = 0;

        events.forEach(event => {

            const category = event.getAttribute("data-category");
            const text = event.textContent.toLowerCase();

            const matchesCategory =
                currentFilter === "all" || category === currentFilter;

            const matchesSearch =
                text.includes(searchValue);

            if (matchesCategory && matchesSearch) {
                event.style.display = "block";
                visibleCount++;
            } else {
                event.style.display = "none";
            }

        });

        if (visibleCount === 0) {
            noResults.style.display = "block";
        } else {
            noResults.style.display = "none";
        }
    }

    tabs.forEach(tab => {
        tab.addEventListener("click", function () {

            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");

            currentFilter = this.getAttribute("data-filter");

            filterEvents();
        });
    });

    searchInput.addEventListener("input", function () {
        filterEvents();
    });

});
