// Select all Buy buttons
const buttons = document.querySelectorAll("button");

// Add click event to each button
buttons.forEach(button => {
  button.addEventListener("click", () => {
    alert("Checkout coming soon! This is a demo.");
  });
});
