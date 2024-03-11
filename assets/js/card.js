

let cardDiv = (cardImage, description, cardBtn) => {
    let div = document.createElement("div")
    div.className = "cardDiv"
    div.innerHTML = `<img src="./assets/image/${cardImage}" alt=""><p>${description}</p><button>${cardBtn}</button>`
    return div
}

export { cardDiv }