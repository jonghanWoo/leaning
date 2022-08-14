const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpeg",
  "6.jpeg",
  "7.jpg",
  "8.jpg",
  "9.jpg"
];
const randomImage = Math.floor(Math.random() * images.length);

const toDayimages = images[randomImage];
console.log(toDayimages);

const bgI = document.createElement("img");
const bgIStyle = document.createElement("style");
document.body.appendChild(bgI);
bgI.src = `img/${toDayimages}`;

console.log(bgIStyle);
