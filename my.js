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
    const modal = document.getElementById("event-modal");
 const closeModal = document.getElementById("close-modal");

 const modalTitle = document.getElementById("modal-title");
 const modalDate = document.getElementById("modal-date");
 const modalDescription = document.getElementById("modal-description");
 const modalImage = document.getElementById("modal-image");

 events.forEach(event => {
     event.addEventListener("click", function () {

        modalTitle.textContent = this.getAttribute("data-title");
        modalDate.textContent = this.getAttribute("data-date");
        modalDescription.textContent = this.getAttribute("data-description");
        modalImage.src = this.getAttribute("data-image");

        modal.style.display = "flex";
     });
 });

 closeModal.addEventListener("click", function () {
    modal.style.display = "none";
 });

 window.addEventListener("click", function (e) {
    e.preventDefault();
    if (e.target === modal) {
        modal.style.display = "none";
    }
 });
   const registerBtn = document.getElementById("register-btn");
   const registrationForm = document.getElementById("registration-form");

   registerBtn.addEventListener("click", function () {
    registrationForm.style.display = "flex";
  });

  registrationForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = document.getElementById("reg-name").value;
    const email = document.getElementById("reg-email").value;
    const studentId = document.getElementById("reg-id").value;

    alert(`Thank you ${name}! You are registered successfully.`);

    registrationForm.reset();
    registrationForm.style.display = "none";
  });
  
   const submitForm = document.getElementById("submit-event-form");
   const eventsGrid = document.querySelector(".events-grid");

  submitForm.addEventListener("submit", function (e) {
    e.preventDefault();

    const title = document.getElementById("event-title").value;
    const category = document.getElementById("event-category").value;
    const date = document.getElementById("event-date").value;
    const description = document.getElementById("event-description").value;
    const image = document.getElementById("event-image").value || "https://via.placeholder.com/400x250";

    const newEvent = document.createElement("div");
    newEvent.classList.add("event-card");
    newEvent.setAttribute("data-category", category);
    newEvent.setAttribute("data-title", title);
    newEvent.setAttribute("data-date", date);
    newEvent.setAttribute("data-description", description);
    newEvent.setAttribute("data-image", image);

    newEvent.innerHTML = `
        <img src="${image}" alt="${title}">
        <h3>${title}</h3>
        <p>${date}</p>
    `;

    eventsGrid.appendChild(newEvent);

    // Make new card clickable for modal
    newEvent.addEventListener("click", function () {

        modalTitle.textContent = title;
        modalDate.textContent = date;
        modalDescription.textContent = description;
        modalImage.src = image;

        modal.style.display = "flex";
        document.body.style.overflow = "hidden";
    });

    submitForm.reset();
    alert("Event added successfully!");
 });

});
