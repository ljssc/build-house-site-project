const images = [
    "src/img/Subtract.png",
    "src/img/substract2.jpg",
    "src/img/substract3.jpg"
];


const titles = [
    "«Лесной Уголок»",
    "«Контраст»",
    "«Дом Света»"
];

const items = document.querySelectorAll(".solution-item");
const slideImage = document.getElementById("slideImage");
const slideTitle = document.querySelector(".slide-title");

let currentSlide = 0;

function updateSlide(index) {
    currentSlide = index;
    slideImage.src = images[index];
    slideTitle.textContent = titles[index];

    items.forEach(item => item.classList.remove("active"));
    items[index].classList.add("active");
}

document.getElementById("slideLeft").onclick = () => {
    currentSlide = (currentSlide - 1 + images.length) % images.length;
    updateSlide(currentSlide);
};

document.getElementById("slideRight").onclick = () => {
    currentSlide = (currentSlide + 1) % images.length;
    updateSlide(currentSlide);
};

items.forEach(item => {
    item.onclick = () => {
        const id = parseInt(item.getAttribute("data-id"));
        updateSlide(id);
    };
});
