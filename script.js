let cardCount = 2;
let columnCount = 3;

function rerender() {
    cardCount = document.querySelector(".slider").value

    document.querySelector("button").innerText = `Regenerate with ${cardCount.toString().padStart()} cards`

    const wrapper = document.querySelector(".grid");
    wrapper.setAttribute("style", `grid-template-columns: repeat(${columnCount}, 1fr)`)
    wrapper.innerHTML = "";

    for (let i = 0; i < cardCount; i++) {
        const div = document.createElement("div")
        div.classList.add("card");

        div.setAttribute('style', `
      grid-column: span ${Math.floor(Math.random() * columnCount) + 1};
      grid-row: span ${Math.floor(Math.random() * 3) + 1};
    `)

        wrapper.appendChild(div);
    }

    for (let i = 0; i < 30; i++) {
        const div = document.createElement("div")
        div.classList.add("card");
        wrapper.appendChild(div);
    }

    // Add class to column count div
    document.querySelectorAll(".column-picker .selected").forEach(selected => selected.classList.remove("selected"));
    const columnBtn = document.querySelector(`.column-picker button[data-i="${columnCount}"]`);
    if (columnBtn) columnBtn.classList.add("selected");
}

document.querySelector(".slider").addEventListener("input", rerender)
document.querySelector("button").addEventListener("click", rerender)
rerender()

document.querySelectorAll(".column-picker button").forEach(btn => {
    btn.addEventListener("click", () => {
        columnCount = Number(btn.getAttribute("data-i"));
        rerender()
    });
});