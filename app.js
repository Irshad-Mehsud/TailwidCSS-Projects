document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.querySelector(".menu-toggler-btn");
    const desktopMenu = document.querySelector(".nav-menu");
    const mobileMenu = document.getElementById("mobile-menu");

    // Always show desktop menu on large screens
    function updateMenuVisibility() {
        const isDesktop = window.matchMedia("(min-width: 1024px)").matches;
        
        if (isDesktop) {
            desktopMenu.classList.remove("hidden");
            mobileMenu.classList.add("hidden");
        } else {
            desktopMenu.classList.add("hidden");
        }
    }

    // Initial check
    updateMenuVisibility();

    // Toggle mobile menu
    if (menuButton) {
        menuButton.addEventListener("click", function () {
            mobileMenu.classList.toggle("hidden");
        });
    }

    // Update on window resize
    window.addEventListener("resize", updateMenuVisibility);
});