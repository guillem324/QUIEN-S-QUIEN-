// Llista completa de personatges amb tots els atributs
const characters = [
  {
    id: "abascal",
    name: "Santiago Abascal",
    image: "assets/imgs_characters/abascal.png",
    téPel: true,
    colorPel: "Castany",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Dreta",
    país: "Espanya",
  },
  {
    id: "arturo",
    name: "Arturo Valls",
    image: "assets/imgs_characters/arturo.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Influencer",
    ésEsportista: false,
    ésPresentador: true,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "ayuso",
    name: "Isabel Díaz Ayuso",
    image: "assets/imgs_characters/ayuso.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Dona",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Dreta",
    país: "Espanya",
  },
  {
    id: "aznar",
    name: "José María Aznar",
    image: "assets/imgs_characters/aznar.png",
    téPel: true,
    colorPel: "Gris",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: true,
    ésMilionari: false,
    orientacióPolítica: "Dreta",
    país: "Espanya",
  },
  {
    id: "bb_trickz",
    name: "BB Trickz",
    image: "assets/imgs_characters/bb_trickz.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Dona",
    professió: "Cantant",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "belen_esteban",
    name: "Belén Esteban",
    image: "assets/imgs_characters/belen_esteban.png",
    téPel: true,
    colorPel: "Ros",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Dona",
    professió: "Influencer",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "britney_spears",
    name: "Britney Spears",
    image: "assets/imgs_characters/britney_spears.png",
    téPel: true,
    colorPel: "Ros",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Dona",
    professió: "Cantant",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "EE.UU.",
  },
  {
    id: "cristiano_ronaldo",
    name: "Cristiano Ronaldo",
    image: "assets/imgs_characters/cristiano_ronaldo.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Actor",
    ésEsportista: true,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "dandi",
    name: "Dandi",
    image: "assets/imgs_characters/dandi.png",
    téPel: false,
    colorPel: null,
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Influencer",
    ésEsportista: false,
    ésPresentador: true,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "david_bisbal",
    name: "David Bisbal",
    image: "assets/imgs_characters/david_bisbal.png",
    téPel: true,
    colorPel: "Ros",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Home",
    professió: "Cantant",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "elon",
    name: "Elon Musk",
    image: "assets/imgs_characters/elon.png",
    téPel: true,
    colorPel: "Castany",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Influencer",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "EE.UU.",
  },
  {
    id: "errejon",
    name: "Íñigo Errejón",
    image: "assets/imgs_characters/errejon.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: true,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Esquerra",
    país: "Espanya",
  },
  {
    id: "feijoo",
    name: "Alberto Núñez Feijóo",
    image: "assets/imgs_characters/feijoo.png",
    téPel: true,
    colorPel: "Gris",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Dreta",
    país: "Espanya",
  },
  {
    id: "john_cena",
    name: "John Cena",
    image: "assets/imgs_characters/john_cena.png",
    téPel: false,
    colorPel: null,
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Actor",
    ésEsportista: true,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "EE.UU.",
  },
  {
    id: "maduro",
    name: "Nicolás Maduro",
    image: "assets/imgs_characters/maduro.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: true,
    ésMilionari: false,
    orientacióPolítica: "Esquerra",
    país: "Espanya",
  },
  {
    id: "messi",
    name: "Lionel Messi",
    image: "assets/imgs_characters/messi.png",
    téPel: true,
    colorPel: "Castany",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Actor",
    ésEsportista: true,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "pablo_iglesias",
    name: "Pablo Iglesias",
    image: "assets/imgs_characters/pablo_iglesias.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Esquerra",
    país: "Espanya",
  },
  {
    id: "pablo_motos",
    name: "Pablo Motos",
    image: "assets/imgs_characters/pablo_motos.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Influencer",
    ésEsportista: false,
    ésPresentador: true,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "pedro_sanchez",
    name: "Pedro Sánchez",
    image: "assets/imgs_characters/pedro_sanchez.png",
    téPel: true,
    colorPel: "Castany",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: true,
    ésMilionari: false,
    orientacióPolítica: "Esquerra",
    país: "Espanya",
  },
  {
    id: "puigdemont",
    name: "Carles Puigdemont",
    image: "assets/imgs_characters/puigdemont.png",
    téPel: true,
    colorPel: "Castany",
    téUlleres: true,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: false,
    orientacióPolítica: "Esquerra",
    país: "Espanya",
  },
  {
    id: "rajoy",
    name: "Mariano Rajoy",
    image: "assets/imgs_characters/rajoy.png",
    téPel: true,
    colorPel: "Gris",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: true,
    ésMilionari: false,
    orientacióPolítica: "Dreta",
    país: "Espanya",
  },
  {
    id: "rock",
    name: "Dwayne Johnson",
    image: "assets/imgs_characters/rock.png",
    téPel: false,
    colorPel: null,
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Actor",
    ésEsportista: true,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "EE.UU.",
  },
  {
    id: "rosalia",
    name: "Rosalía",
    image: "assets/imgs_characters/rosalia.png",
    téPel: true,
    colorPel: "Negre",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Dona",
    professió: "Cantant",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "Espanya",
  },
  {
    id: "taylor",
    name: "Taylor Swift",
    image: "assets/imgs_characters/taylor.png",
    téPel: true,
    colorPel: "Ros",
    téUlleres: false,
    téPelLlarg: true,
    gènere: "Dona",
    professió: "Cantant",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: false,
    ésMilionari: true,
    orientacióPolítica: "Apolític",
    país: "EE.UU.",
  },
  {
    id: "trump",
    name: "Donald Trump",
    image: "assets/imgs_characters/trump.png",
    téPel: true,
    colorPel: "Ros",
    téUlleres: false,
    téPelLlarg: false,
    gènere: "Home",
    professió: "Polític",
    ésEsportista: false,
    ésPresentador: false,
    haEstatPresident: true,
    ésMilionari: true,
    orientacióPolítica: "Dreta",
    país: "EE.UU.",
  },
];

// Funció per barrejar aleatòriament un array
function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

// Funció per crear una carta de personatge
function createCharacterCard(character) {
  const card = document.createElement("div");
  card.className = "character-card";
  card.dataset.characterId = character.id;

  const cardInner = document.createElement("div");
  cardInner.className = "card-inner";

  // Front de la carta
  const cardFront = document.createElement("div");
  cardFront.className = "card-front";

  const img = document.createElement("img");
  img.src = character.image;
  img.alt = character.name;
  img.className = "character-image";

  const name = document.createElement("div");
  name.className = "character-name";
  name.textContent = character.name;

  cardFront.appendChild(img);
  cardFront.appendChild(name);

  // Back de la carta
  const cardBack = document.createElement("div");
  cardBack.className = "card-back";

  cardInner.appendChild(cardFront);
  cardInner.appendChild(cardBack);
  card.appendChild(cardInner);

  // Afegir event listener per fer flip
  card.addEventListener("click", function () {
    card.classList.toggle("flipped");
  });

  return card;
}

// Funció per inicialitzar el joc
function initGame() {
  const charactersGrid = document.getElementById("charactersGrid");
  const iaGrid = document.getElementById("iaGrid");

  // Barrejar els personatges aleatòriament per a cada grid de manera independent
  const shuffledCharacters1 = shuffleArray(characters);
  const shuffledCharacters2 = shuffleArray(characters);

  // Crear i afegir les cartes al primer grid
  shuffledCharacters1.forEach((character) => {
    const card = createCharacterCard(character);
    charactersGrid.appendChild(card);
  });

  // Crear i afegir les cartes al segon grid amb ordre diferent
  shuffledCharacters2.forEach((character) => {
    const card = createCharacterCard(character);
    iaGrid.appendChild(card);
  });
}

// Inicialitzar el joc quan es carregui la pàgina
document.addEventListener("DOMContentLoaded", initGame);
