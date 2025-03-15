// Get the hamburger menu and navbar
const hamburgerMenu = document.getElementById("hamburgerMenu");
const navbar = document.querySelector(".navbar");

// Add click event to toggle the menu
hamburgerMenu.addEventListener("click", () => {
    navbar.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
});
