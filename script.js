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

// Function to draw all dots
const drawDots = () => {
    dots.forEach(dot => {
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2); // Corrected 'math' to 'Math'
        ctx.fill();
    });
};

// Initial rendering of dots
drawDots();

// Mousemove event to connect dots to the cursor
banner.addEventListener('mousemove', (event) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Corrected 'clearrect' to 'clearRect'
    drawDots();

    let mouse = {
        x: event.clientX - banner.getBoundingClientRect().left,
        y: event.clientY - banner.getBoundingClientRect().top
    };

    dots.forEach(dot => {
        let distance = Math.sqrt((mouse.x - dot.x) ** 2 + (mouse.y - dot.y) ** 2);
        if (distance < 200) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1; 
            ctx.beginPath();
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();
        }
    });
});

// Mouseout event to clear the lines
banner.addEventListener('mouseout', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Corrected 'clearrect' to 'clearRect'
    drawDots();
});
