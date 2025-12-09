const projectsData = [
    {
        id: 1,
        name: "Лесной Уголок",
        area: 145,
        floors: 2,
        material: "дерево",
        style: "barnhouse",
        price: 5200000,
        img: "src/img/Subtract.png"
    },
    {
        id: 2,
        name: "Контраст",
        area: 180,
        floors: 2,
        material: "кирпич",
        style: "modern",
        price: 7300000,
        img: "src/img/substract2.jpg"
    },
    {
        id: 3,
        name: "Дом Света",
        area: 110,
        floors: 1,
        material: "каркас",
        style: "modern",
        price: 4100000,
        img: "src/img/substract3.jpg"
    },
    
];

const listEl = document.getElementById("projectsList");

function renderProjects(items) {
    listEl.innerHTML = "";

    items.forEach(p => {
        const card = `
            <div class="project-card">
                <img src="${p.img}" alt="${p.name}">
                <div class="project-info">
                    <h3>${p.name}</h3>
                    <p>Площадь: ${p.area} м²</p>
                    <p>Этажей: ${p.floors}</p>
                    <p>Материал: ${p.material}</p>
                    <p>Стиль: ${p.style}</p>
                    <div class="project-price">${p.price.toLocaleString()} ₽</div>
                </div>
            </div>
        `;
        listEl.insertAdjacentHTML("beforeend", card);
    });
}


function applyFilters() {
    let filtered = [...projectsData];

    const min = +areaMin.value || 0;
    const max = +areaMax.value || 9999;
    const floors = document.getElementById("floors").value;
    const material = document.getElementById("material").value;
    const style = document.getElementById("style").value;
    const sort = document.getElementById("sort").value;

    filtered = filtered.filter(p =>
        p.area >= min &&
        p.area <= max &&
        (!floors || p.floors == floors) &&
        (!material || p.material === material) &&
        (!style || p.style === style)
    );

    if (sort === "priceAsc") filtered.sort((a, b) => a.price - b.price);
    if (sort === "priceDesc") filtered.sort((a, b) => b.price - a.price);
    if (sort === "areaAsc") filtered.sort((a, b) => a.area - b.area);
    if (sort === "areaDesc") filtered.sort((a, b) => b.area - a.area);

    renderProjects(filtered);
}


resetFilters.onclick = () => {
    document.querySelectorAll(".filters input, .filters select")
        .forEach(el => el.value = "");

    renderProjects(projectsData);
};


document.querySelectorAll(".filters input, .filters select")
    .forEach(el => el.addEventListener("input", applyFilters));


renderProjects(projectsData);