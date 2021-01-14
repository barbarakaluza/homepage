const emptyParagraph = document.querySelector(".about-me__description--js");
emptyParagraph.innerHTML = `Potrafie zmienić tekst za pomocą JS`;

const deathStar = {
  diameter: 120000,
  fire: (target) => {
    console.log(`${target} destroyed`);
  },
  name: "Death Star",
  age: 14979970900,
  isOperating: true,
};

function hello(userName, userSurname) {
  console.log(`Hello ${userName} ${userSurname}`);
}
hello("Basia", "Kałuża");

const Kasi = {
  type: "cat",
  eyesColor: "yellow",
  color: "syberian grey",
  breeding: "Niziołki Północy",
  breed: "Syberian Cat",
  attack: (target) => {
    console.log(`biting ${target}`);
  },
  age: 3,
  isGonna: true,
};

const humanOne = {
  age: 32,
  name: "Zbyszek",
  city: "Poznan",
};

const humanTwo = {
  age: humanOne.age,
  name: "Robert",
  city: "Warsaw",
};

if (humanOne.age === humanTwo.age && humanTwo.name == "Robert") {
  console.log("To jest prawda");
}

const myNumber = 8;

switch (myNumber) {
  case 8:
    console.log("Variabe is equel 8");
    break;
  case 10:
    console.log("Variable is equel 10");
    break;
  default:
    console.log("Variable is default");
}
(humanTwo.age == humanOne.age)? console.log("Jest równy") : console.log("Nie jest równy");

const button = document.querySelector('.action--js');

console.log(button);

const myClick = () => {
  const mainHeading = document.querySelector('.main__header--heading');
  mainHeading.innerHTML = `Zmieniamy nagłówek przez kliknięcie`;
}

button.addEventListener('mouseenter', myClick);