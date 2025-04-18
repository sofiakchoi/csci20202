

const textElement = document.getElementById("title");
title.onmouseenter = function () {
    textElement.style.fontFamily = "avebury-black, sans-serif";
    textElement.style.fontSize = '70px';
};
title.onmouseleave = function () {
    textElement.style.fontFamily = "plantin-condensed, sans-serif";
    textElement.style.fontSize = '60px';
};

const notePage = [
    "Sesame paste, fava beans, scallions, onions, bread, eggs, almond milk, firm tofu",
    "Gong Gong: 譚錫民 Popo: 巧如 Taipo: 順梨 Taigong:興讓",
    "targin party: we are all aliens and everyone must bring a food from their home planet, the dish must justifiably represent the planet in some way. Mandatory backstories.",
    "10.563 10.125 6.75 5 5.125 5",
    "I am tired and I don't feel like fighting. I go down to the riverbed to see the future. I am watching myself climb into a boat. The handsome young man from the couple is impaled sideways on the column of the bridge, calmly dying. His legs are submerged in the river water. ",
    "dinner: broth-y side soup, cucumber salad, veg dumplings, ginger rice, tomato egg",
];


const noteBox = document.getElementById("notes");
let currentPageIndex = 0;

document.body.addEventListener('keypress', function () {
    currentPageIndex = (currentPageIndex) % notePage.length;
    noteBox.textContent = notePage[currentPageIndex];
    currentPageIndex++;
});

const dateChange = [
    "4.14.2025 02:24 PM",
    "1.07.2025 09:19 PM",
    "10.12.2024 09:22 AM",
    "3.05.2025 01:12 PM",
    "11.30.2024 10:34 AM ",
    "4.14.2025 02:24 PM",
];


const dateBox = document.getElementById("date");
let currentChangeIndex = 0;

document.body.addEventListener('keypress', function () {
    currentChangeIndex = (currentChangeIndex) % dateChange.length;
    dateBox.textContent = dateChange[currentChangeIndex];
    currentChangeIndex++;
});


const images = ['images/bg1.JPG', 'images/bg2.JPG', 'images/bg3.JPG', 'images/bg4.JPG', 'images/bg5.JPG', 'images/bg6.JPG'];
let currentImageIndex = 0;

document.body.addEventListener('click', function () {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    document.body.style.backgroundImage = `url('${images[currentImageIndex]}')`;
});

