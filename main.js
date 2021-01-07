const emptyParagraph = document.querySelector('.about-me__description--js');
emptyParagraph.innerHTML = `Potrafie zmienić tekst za pomocą JS`;

const deathStar = {
    diameter: 120000,
    fire: (target) => {
        console.log(`${target} destroyed`)
    },
    name: "Death Star",
    age: 14979970900,
    isOperating: true,

}

function hello(userName, userSurname) {
    console.log(`Hello ${userName} ${userSurname}`) 
}
hello("Basia", "Kałuża");

const Kasi = {
    type: "cat",
    eyesColor: "yellow",
    color: "syberian grey",
    breeding: "Niziołki Północy",
    breed: "Syberian Cat",
    attack: (target) => {
        console.log(`biting ${target}`)
    },
    age: 3,
    isGonna: true,
}

console.log(Kasi.attack());