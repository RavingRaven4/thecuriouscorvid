function setupHamburgerMenu() {
    const hamburgerMenu = document.getElementById("hamburgerMenu");
    const navbar = document.querySelector(".navbar");

    if (hamburgerMenu && navbar) {
        hamburgerMenu.addEventListener("click", () => {
            navbar.classList.toggle("active");
        });
    }
}
