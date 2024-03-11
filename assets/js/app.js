import { firstDiv } from "./info.js";
import { secondDiv } from "./img.js";
import { cardDiv } from "./card.js";

const dataOne = {
    title : "This is title : U can use ur title if u want",
    paragrapth : "Hello there! I'm Rolan Jay Isabida, an aspiring full-stack developer on a journey to create robust and dynamic web applications that make a meaningful impact. Let's build something incredible together!",
    btnName : "Contact me",
    myImage : "person.png"
}

const dataTwo = {
    cardImage : "project.png",
    description : "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet incidunt ut hic corporis tenetur consequatur!",
    cardBtn : "Learn More"
}

const { title, paragrapth, btnName, myImage } = dataOne
const { cardImage, description, cardBtn } = dataTwo

let sectionOne = document.getElementById("sectionOne");
let sectionTwo = document.getElementById("sectionTwo");


sectionOne.append(firstDiv(title, paragrapth, btnName))
sectionOne.append(secondDiv(myImage))

sectionTwo.append(cardDiv(cardImage, description, cardBtn))
sectionTwo.append(cardDiv(cardImage, description, cardBtn))
sectionTwo.append(cardDiv(cardImage, description, cardBtn))

