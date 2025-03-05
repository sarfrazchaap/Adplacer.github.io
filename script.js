document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");

    // Create 100 (10x10) pixels
    for (let i = 0; i < 100; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // Handle click event
        pixel.addEventListener("click", function() {
            let color = prompt("Enter a hex color code for your ad (e.g., #ff0000 for red):", "#ff0000");
            if (color) {
                pixel.style.backgroundColor = color;
            }
        });

        grid.appendChild(pixel);
    }
});
