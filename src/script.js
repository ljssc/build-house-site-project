



const burger = document.querySelector(".burger");

const mobileMenu = document.querySelector(".mobile-menu");

const bars = document.querySelectorAll(".bar");


const items = document.querySelectorAll('.solution-item');
const images = document.querySelectorAll('.solution-image');
const label = document.querySelector('.solutions__label');

const leftBtn = document.querySelector('.left-arrow');
const rightBtn = document.querySelector('.right-arrow');




const modal = document.getElementById("houseModal");
const modalTitle = document.getElementById("modalTitle");
const modalDesc = document.getElementById("modalDesc");
const modalImage = document.getElementById("modalImage");
const modalParams = document.getElementById("modalParams");

const houseData = [
    {
        title: "Лесной Уголок",
        desc: "Ваш уют в сердце природы",
        img: "src/img/Subtract.png",
        params: [
            "Площадь: 138 м²",
            "Этажей: 2",
            "Материал: Клееный брус",
            "Терраса: Есть",
            "Гарантия: 5 лет"
        ]
    },
    {
        title: "Контраст",
        desc: "Где бетон встречается с природой",
        img: "src/img/substract2.jpg",
        params: [
            "Площадь: 162 м²",
            "Этажей: 2",
            "Материал: Газобетон",
            "Панорамные окна",
            "Гарантия: 10 лет"
        ]
    },
    {
        title: "Дом Света",
        desc: "Где каждый луч — приглашение остаться",
        img: "src/img/substract3.jpg",
        params: [
            "Площадь: 204 м²",
            "Этажей: 2",
            "Материал: Каркас",
            "Максимальное естественное освещение",
            "Гарантия: 7 лет"
        ]
    }
];





document.querySelector(".solutions__btn").addEventListener("click", () => {
    const activeIndex = document.querySelector(".solution-item.active").dataset.index;
    const info = houseData[activeIndex];

    modalTitle.textContent = info.title;
    modalDesc.textContent = info.desc;
    modalImage.src = info.img;

    modalParams.innerHTML = "";
    info.params.forEach(p => {
        modalParams.innerHTML += `<li>${p}</li>`;
    });

    modal.classList.add("active");
});


document.querySelector(".modal__close").addEventListener("click", () => {
    modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
    if (e.target === modal) modal.classList.remove("active");
});

let current = 0;

function showSlide(i) {
    images.forEach(img => img.classList.remove('active'));
    items.forEach(it => it.classList.remove('active'));

    images[i].classList.add('active');
    items[i].classList.add('active');

    label.textContent = items[i].querySelector("h3").textContent;
}

items.forEach(item => {
    item.onclick = () => {
        current = +item.dataset.index;
        showSlide(current);
    };
});

leftBtn.onclick = () => {
    current = (current - 1 + images.length) % images.length;
    showSlide(current);
};

rightBtn.onclick = () => {
    current = (current + 1) % images.length;
    showSlide(current);
};




burger.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
});






bars.forEach(bar => {
    const value = bar.dataset.value;
    const fill = bar.querySelector(".bar-fill");

    setTimeout(() => {
        fill.style.height = value + "%";
    }, 200);
});
console.log("bars:", bars);

document.addEventListener("DOMContentLoaded", () => {
  const heroImg = document.querySelector(".hero__image img");

  if (heroImg) {
    setTimeout(() => {
      heroImg.classList.add("show");
    }, 200); 
  }
});