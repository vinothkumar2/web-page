// JavaScript for Header Progress Bar
window.addEventListener('load', () => {
    const progressBar = document.getElementById('progress-bar');

    // Function to update the progress bar based on scroll position
    function updateProgressBar() {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const pageHeight = document.documentElement.scrollHeight;

        const progress = (scrollY / (pageHeight - windowHeight)) * 100;
        progressBar.style.width = progress + '%';
    }

    // Event listener to update the progress bar on scroll
    window.addEventListener('scroll', updateProgressBar);

    // Event listener to update the progress bar when the page is resized
    window.addEventListener('resize', updateProgressBar);
});