let banner = document.querySelector(".banner");
let canvas = document.getElementById("dotsCanvas");

// Set the canvas dimensions
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let ctx = canvas.getContext('2d');

let dots = [];
let arrayColors = ['#960200', '#FFD23F', '#13293D', '#585123', '#47A025'];

// Create 50 random dots with properties
for (let index = 0; index < 50; index++) {
    dots.push({
        x: Math.floor(Math.random() * canvas.width),
        y: Math.floor(Math.random() * canvas.height),
        size: Math.random() * 3 + 5,
        color: arrayColors[Math.floor(Math.random() * 5)]
    });
}
