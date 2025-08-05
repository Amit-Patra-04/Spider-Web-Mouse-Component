let banner = document.querySelector(".banner");
let canvas = document.getElementById("dotsCanvas");

// Set the canvas dimensions
canvas.width = canvas.offsetWidth;
canvas.height = canvas.offsetHeight;

let ctx = canvas.getContext('2d');

let dots = [];
let arrayColors = ['#960200', '#FFD23F', '#13293D', '#585123', '#47A025'];
