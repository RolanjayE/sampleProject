

const firstDiv = (title, paragrapth, btnName) => {
    const div = document.createElement("div")
    div.className = "firstDiv"
    div.innerHTML = `<h1>${title}</h1> <p>${paragrapth}</p><button>${btnName}</button>`
    return div
}

export { firstDiv }

