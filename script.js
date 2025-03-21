document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links a");
    const sidebar = document.querySelector(".sidebar");
    const themeToggle = document.querySelector(".theme-toggle");

    function removeActiveClasses() {
        navLinks.forEach(link => link.classList.remove("active"));
    }

    function setActiveLink() {
        const currentPage = window.location.pathname.split("/").pop();

        navLinks.forEach(link => {
            const linkHref = link.getAttribute("href");
            if (currentPage === linkHref) {
                removeActiveClasses();
                link.classList.add("active");
            }
        });
    }

    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            removeActiveClasses();
            this.classList.add("active");
        });
    });

    setActiveLink();

    function toggleTheme() {
        document.body.classList.toggle("dark-mode");
        sidebar.classList.toggle("dark-mode");
        localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
    }

    themeToggle.addEventListener("click", toggleTheme);

    if (localStorage.getItem("darkMode") === "true") {
        document.body.classList.add("dark-mode");
        sidebar.classList.add("dark-mode");
    }
});
