document.addEventListener("DOMContentLoaded", function() {
    const grid = document.getElementById("grid");
    let pixelData = JSON.parse(localStorage.getItem("pixelData")) || {};

    // Create 100 pixels
    for (let i = 0; i < 100; i++) {
        let pixel = document.createElement("div");
        pixel.classList.add("pixel");

        // Load saved colors
        if (pixelData[i]) {
            pixel.style.backgroundColor = pixelData[i];
        }

        // Handle click event
        pixel.addEventListener("click", function() {
            let color = prompt("Enter a hex color code for your ad:", "#ff0000");
            if (color) {
                pixel.style.backgroundColor = color;
                pixelData[i] = color;
                localStorage.setItem("pixelData", JSON.stringify(pixelData));
            }
        });

        grid.appendChild(pixel);
    }
