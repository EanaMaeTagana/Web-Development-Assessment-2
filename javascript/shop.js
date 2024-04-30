// Javascript for the shop.html

let slideIndex = 0; // Variable set to track the current slide, starting from 0

showSlides(); // Calls the showSlides function to start

function showSlides() { // Function to display the slides
    let i;
    let slides = document.getElementsByClassName("slide"); // Takes all the slides and store them with a slide variable

    for (i = 0; i < slides.length; i++) { // Loops through each slide element
    slides[i].style.display = "none";   // Hides the non-current slide by having its display style set to "none"
    }

    slideIndex++; // Increases the variable making it move to the next slide

    if (slideIndex > slides.length) {slideIndex = 1} // If slideIndex goes beyond the total number of slides, it will reset to 1
    slides[slideIndex-1].style.display = "block";  // Displays the slide by setting its display style to "block"

  setTimeout(showSlides, 4000); // Sets the slides to move every 4000ms (4 seconds)
}