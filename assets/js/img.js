

const secondDiv = (myImage)=> {
    let div = document.createElement("div")
    div.className = "secondDiv"
    div.innerHTML = `<img src="./assets/image/${myImage}" alt="">`

    return div
}

export { secondDiv }