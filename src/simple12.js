// Get the button element
const button = document.querySelector('#incrementButton');

// Get the value element
const valueElement = document.querySelector('#value');

// Set the initial value
let value = 0;

// Add click event listener to the button
button.addEventListener('click', () => {
    // Increment the value
    value++;

    // Update the value element
    valueElement.textContent = value;
});