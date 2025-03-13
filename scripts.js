// Function to reveal hidden content when button is clicked
document.getElementById('exploreButton').addEventListener('click', function() {
    const exploreContent = document.getElementById('exploreContent');
    exploreContent.classList.toggle('hidden'); // Toggle visibility
});
