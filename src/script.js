const burger = document.querySelector(".burger");

const mobileMenu = document.querySelector(".mobile-menu");


const slides = document.querySelectorAll(".slide");
const items = document.querySelectorAll(".solution-item");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");

const bars = document.querySelectorAll(".bar");


burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});

let index = 0;

function updateSlider(i) {
    slides.forEach(s => s.classList.remove("active"));
    items.forEach(s => s.classList.remove("active"));

    slides[i].classList.add("active");
    items[i].classList.add("active");

    index = i;
}

btnNext.onclick = () => {
    let i = index + 1;
    if (i >= slides.length) i = 0;
    updateSlider(i);
};

btnPrev.onclick = () => {
    let i = index - 1;
    if (i < 0) i = slides.length - 1;
    updateSlider(i);
};

items.forEach(item => {
    item.onclick = () => {
        updateSlider(+item.dataset.index);
    };
});


bars.forEach(bar => {
    const value = bar.dataset.value;
    const fill = bar.querySelector(".bar-fill");

    setTimeout(() => {
        fill.style.height = value + "%";
    }, 200);
});
console.log("bars:", bars);