// Javascript for the index.html

// Functions for the loading screen
function hideLoadingScreen() { // Function to hide the loading screen
    document.getElementById("loadingScreen").classList.add("hide"); // Gets the element loading screen and adds the "hide" class to it
}

document.getElementById("loadingScreen").addEventListener("click", hideLoadingScreen); // Click event listener to hide the loading screen once clicked on by the user

// -------------

// Function for the shop's scrolling transition
const boxes = document.querySelectorAll('.box'); // Select all elements having the class "box"

window.addEventListener('scroll', checkBoxes); // Scroll event listener

checkBoxes(); // Checks box visibility upon the page loading

function checkBoxes() { // Function to check if the boxes containing the shop items are within the viewport
    const triggerBottom = window.innerHeight / 5 * 4; // Calculates the distance from top to botton of the viewport

    boxes.forEach((box) => { // Loops through each item
        const boxTop = box.getBoundingClientRect().top; // Checks the distance from the top of the viewport to the top of the current box

        if (boxTop < triggerBottom) { // Once the top of the box is upon the trigger point, triggers the "show" class - showing the items
            box.classList.add('show');
        } else { // Otherwise, remove the "show" class - thus, removing the items from view
            box.classList.remove('show');
        }
    });
}