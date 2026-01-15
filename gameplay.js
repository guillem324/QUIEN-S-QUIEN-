// Llista completa de personatges amb tots els atributs
const characters = [
  {
    id: "abascal",
    name: "Santiago Abascal",
    image: "assets/imgs_characters/abascal.png",
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
    téUlleres: true,
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
    id: "feijoo",
    name: "Alberto Núñez Feijóo",
    image: "assets/imgs_characters/feijoo.png",
    téPel: true,
    colorPel: "Gris",
    téUlleres: true,
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
    ésMilionari: true,
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
    haEstatPresident: true,
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
    téUlleres: true,
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
    colorPel: "Castany",
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

// Variables d'estat del joc
const gameState = {
  playerSecretCharacter: null,
  iaSecretCharacter: null,
  playerCharacters: [],
  iaCharacters: [],
  currentTurn: 'player',
  gameActive: false,
  playerCanGuess: false,
  iaCanGuess: false,
  questionHistory: [],
  iaQuestionHistory: [],
  playerQuestionCount: 0,
  iaQuestionCount: 0,
  audioEnabled: true,
};

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
function createCharacterCard(character, gridType = null) {
  const card = document.createElement("div");
  card.className = "character-card";
  card.dataset.characterId = character.id;
  if (gridType) {
    card.dataset.gridType = gridType;
  }

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

  // Ja no es permet el flip manual, només automàtic

  return card;
}

// Funció per seleccionar personatge secret de la IA (aleatori)
function selectIASecretCharacter() {
  const randomIndex = Math.floor(Math.random() * characters.length);
  gameState.iaSecretCharacter = characters[randomIndex];
  gameState.iaCharacters = [...characters];
}

// Funció per mostrar el modal de selecció del personatge secret del jugador
function showSelectSecretModal() {
  const modal = document.getElementById("selectSecretModal");
  const modalGrid = document.getElementById("selectSecretGrid");
  
  if (!modal || !modalGrid) return;
  
  // Netejar el grid del modal
  modalGrid.innerHTML = '';
  
  // Crear cartes per a tots els personatges
  characters.forEach(character => {
    const card = createCharacterCard(character);
    card.addEventListener('click', () => {
      gameState.playerSecretCharacter = character;
      gameState.playerCharacters = [...characters];
      closeModal('selectSecretModal');
      // Continuar amb la inicialització del joc
      continueGameInitialization();
    });
    modalGrid.appendChild(card);
  });
  
  modal.style.display = 'block';
}

// Funció per renderitzar els grids de personatges
function renderCharacterGrids() {
  const charactersGrid = document.getElementById("charactersGrid");
  const iaGrid = document.getElementById("iaGrid");
  
  // Netejar els grids
  charactersGrid.innerHTML = '';
  iaGrid.innerHTML = '';
  
  // Barrejar els personatges aleatòriament per a cada grid
  const shuffledCharacters1 = shuffleArray(characters);
  const shuffledCharacters2 = shuffleArray(characters);
  
  // Crear i afegir les cartes al primer grid
  shuffledCharacters1.forEach((character) => {
    const card = createCharacterCard(character, 'player');
    charactersGrid.appendChild(card);
  });
  
  // Crear i afegir les cartes al segon grid
  shuffledCharacters2.forEach((character) => {
    const card = createCharacterCard(character, 'ia');
    iaGrid.appendChild(card);
  });
  
  // Actualitzar contadors
  updateCharacterCounters();
}

// Funció per actualitzar els contadors de personatges
function updateCharacterCounters() {
  const playerCounter = document.getElementById("playerCounter");
  const iaCounter = document.getElementById("iaCounter");
  
  if (playerCounter) {
    const count = gameState.playerCharacters.length;
    playerCounter.textContent = `Queden: ${count}`;
    if (count < 5) {
      playerCounter.classList.add("low-count");
    } else {
      playerCounter.classList.remove("low-count");
    }
  }
  
  if (iaCounter) {
    const count = gameState.iaCharacters.length;
    iaCounter.textContent = `Queden: ${count}`;
    if (count < 5) {
      iaCounter.classList.add("low-count");
    } else {
      iaCounter.classList.remove("low-count");
    }
  }
}

// Funció per afegir comentaris
function addComment(speaker, message, type = 'question') {
  const commentsContainer = document.getElementById("commentsContainer");
  if (!commentsContainer) return;
  
  const commentDiv = document.createElement("div");
  commentDiv.className = `comment comment-${type}`;
  
  const speakerSpan = document.createElement("span");
  speakerSpan.className = "comment-speaker";
  speakerSpan.textContent = `${speaker}: `;
  speakerSpan.style.fontWeight = "bold";
  
  const messageSpan = document.createElement("span");
  messageSpan.className = "comment-message";
  messageSpan.textContent = message;
  
  commentDiv.appendChild(speakerSpan);
  commentDiv.appendChild(messageSpan);
  
  commentDiv.style.opacity = "0";
  commentsContainer.appendChild(commentDiv);
  
  // Animar aparició
  setTimeout(() => {
    commentDiv.style.transition = "opacity 0.3s";
    commentDiv.style.opacity = "1";
  }, 10);
  
  scrollCommentsToBottom();
}

// Funció per desplaçar els comentaris cap avall
function scrollCommentsToBottom() {
  const commentsContainer = document.getElementById("commentsContainer");
  if (commentsContainer) {
    commentsContainer.scrollTop = commentsContainer.scrollHeight;
  }
}

// Funció per obtenir la propietat de la pregunta
function getQuestionProperty(questionType, answerValue) {
  const questionMap = {
    'gènere': { prop: 'gènere', value: answerValue },
    'téPel': { prop: 'téPel', value: answerValue === 'Sí' },
    'colorPel': { prop: 'colorPel', value: answerValue },
    'téPelLlarg': { prop: 'téPelLlarg', value: answerValue === 'Sí' },
    'téUlleres': { prop: 'téUlleres', value: answerValue === 'Sí' },
    'professió': { prop: 'professió', value: answerValue },
    'ésEsportista': { prop: 'ésEsportista', value: answerValue === 'Sí' },
    'ésPresentador': { prop: 'ésPresentador', value: answerValue === 'Sí' },
    'orientacióPolítica': { prop: 'orientacióPolítica', value: answerValue },
    'país': { prop: 'país', value: answerValue },
    'haEstatPresident': { prop: 'haEstatPresident', value: answerValue === 'Sí' },
    'ésMilionari': { prop: 'ésMilionari', value: answerValue === 'Sí' },
  };
  
  return questionMap[questionType] || null;
}

// Funció per processar una pregunta
function processQuestion(questionType, answerValue, isPlayer) {
  if (!gameState.gameActive) return;
  
  const questionProp = getQuestionProperty(questionType, answerValue);
  if (!questionProp) return;
  
  // Lògica correcta:
  // - Si el JUGADOR pregunta: pregunta sobre el personatge secret de la IA (iaSecretCharacter)
  //   i elimina personatges del seu propi grid (playerCharacters - grid blau/esquerra)
  // - Si la IA pregunta: pregunta sobre el personatge secret del JUGADOR (playerSecretCharacter)
  //   i elimina personatges del seu propi grid (iaCharacters - grid vermell/dreta)
  
  const secretCharacter = isPlayer ? gameState.iaSecretCharacter : gameState.playerSecretCharacter;
  const targetCharacters = isPlayer ? gameState.playerCharacters : gameState.iaCharacters;
  const gridType = isPlayer ? 'player' : 'ia';
  
  // Determinar si la resposta és correcta (comparant amb el personatge secret del contrincant)
  const answer = secretCharacter[questionProp.prop] === questionProp.value;
  
  // Filtrar personatges del propi grid basant-se en la resposta
  const charactersToEliminate = [];
  const filteredCharacters = targetCharacters.filter(char => {
    const matches = char[questionProp.prop] === questionProp.value;
    
    // Si la resposta és "Sí" (el personatge secret del contrincant té la característica)
    // Eliminem del nostre grid tots els que NO la tenen
    // Si la resposta és "No" (el personatge secret del contrincant NO té la característica)
    // Eliminem del nostre grid tots els que SÍ la tenen
    if (answer && !matches) {
      charactersToEliminate.push(char.id);
      return false;
    }
    if (!answer && matches) {
      charactersToEliminate.push(char.id);
      return false;
    }
    return true;
  });
  
  // Actualitzar arrays (del propi grid)
  if (isPlayer) {
    gameState.playerCharacters = filteredCharacters;
  } else {
    gameState.iaCharacters = filteredCharacters;
  }
  
  // Actualitzar comptadors
  if (isPlayer) {
    gameState.playerQuestionCount++;
  } else {
    gameState.iaQuestionCount++;
  }
  
  // Afegir a historial
  const questionEntry = { questionType, answerValue, answer, isPlayer };
  gameState.questionHistory.push(questionEntry);
  if (!isPlayer) {
    gameState.iaQuestionHistory.push(questionEntry);
  }
  
  // Mostrar comentari
  const speaker = isPlayer ? 'Jugador' : 'IA';
  const questionText = getQuestionText(questionType, answerValue);
  const answerText = answer ? 'Sí' : 'No';
  addComment(speaker, `${questionText} - Resposta: ${answerText}`, 'question');
  
  // Reproduir sons només per a les preguntes del jugador
  if (isPlayer) {
    if (answer) {
      playSound('success'); // Resposta "Sí" - son correcte
    } else {
      playSound('fail'); // Resposta "No" - son incorrecte
    }
  }
  
  // Eliminar personatges progressivament del propi grid
  if (charactersToEliminate.length > 0) {
    eliminateCharactersProgressively(charactersToEliminate, gridType);
  }
  
  // Actualitzar contadors
  updateCharacterCounters();
  
  // Comprovar si el joc ha acabat (abans de canviar torn)
  checkGameOver();
  
  // Canviar torn (només si el joc no ha acabat)
  setTimeout(() => {
    if (gameState.gameActive) {
      switchTurn();
    }
  }, 500);
}

// Funció per obtenir el text de la pregunta
function getQuestionText(questionType, answerValue) {
  const questionLabels = {
    'gènere': `És ${answerValue}?`,
    'téPel': `Té pèl?`,
    'colorPel': `Té el pèl ${answerValue.toLowerCase()}?`,
    'téPelLlarg': `Té pèl llarg?`,
    'téUlleres': `Té ulleres?`,
    'professió': `És ${answerValue}?`,
    'ésEsportista': `És esportista?`,
    'ésPresentador': `És presentador?`,
    'orientacióPolítica': `Té orientació política ${answerValue.toLowerCase()}?`,
    'país': `És de ${answerValue}?`,
    'haEstatPresident': `Ha estat president?`,
    'ésMilionari': `És milionari?`,
  };
  
  return questionLabels[questionType] || `${questionType}: ${answerValue}`;
}

// Funció per eliminar personatges progressivament
function eliminateCharactersProgressively(charactersToEliminate, gridType) {
  charactersToEliminate.forEach((characterId, index) => {
    setTimeout(() => {
      flipCardAutomatically(characterId, gridType);
    }, index * 80);
  });
}

// Funció per voltejar automàticament una carta
function flipCardAutomatically(characterId, gridType) {
  const grid = gridType === 'player' 
    ? document.getElementById("charactersGrid")
    : document.getElementById("iaGrid");
  
  if (!grid) return;
  
  const card = grid.querySelector(`[data-character-id="${characterId}"]`);
  if (card && !card.classList.contains('eliminated')) {
    card.classList.add('eliminated');
    card.classList.add('flipped');
  }
}

// Funció per actualitzar els grids després de filtrar
function updateCharacterGrids() {
  // Aquesta funció es crida des de processQuestion
  // La lògica principal està a eliminateCharactersProgressively
}

// Funció per verificar si una pregunta ja s'ha fet
function isQuestionAlreadyAsked(questionType, answerValue) {
  return gameState.iaQuestionHistory.some(q => 
    q.questionType === questionType && q.answerValue === answerValue
  );
}

// Funció per generar una pregunta aleatòria
function generateRandomQuestion() {
  const questionTypes = [
    { type: 'gènere', values: ['Home', 'Dona'] },
    { type: 'téPel', values: ['Sí', 'No'] },
    { type: 'colorPel', values: ['Castany', 'Negre', 'Ros', 'Pèl-roig', 'Gris'] },
    { type: 'téPelLlarg', values: ['Sí', 'No'] },
    { type: 'téUlleres', values: ['Sí', 'No'] },
    { type: 'professió', values: ['Polític', 'Cantant', 'Actor', 'Influencer'] },
    { type: 'ésEsportista', values: ['Sí', 'No'] },
    { type: 'ésPresentador', values: ['Sí', 'No'] },
    { type: 'orientacióPolítica', values: ['Esquerra', 'Dreta', 'Apolític'] },
    { type: 'país', values: ['Espanya', 'EE.UU.', 'Israel', 'Rússia'] },
    { type: 'haEstatPresident', values: ['Sí', 'No'] },
    { type: 'ésMilionari', values: ['Sí', 'No'] },
  ];
  
  let attempts = 0;
  let questionType, answerValue;
  
  do {
    const randomType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
    questionType = randomType.type;
    answerValue = randomType.values[Math.floor(Math.random() * randomType.values.length)];
    attempts++;
    
    if (attempts > 50) break; // Evitar bucle infinit
  } while (isQuestionAlreadyAsked(questionType, answerValue));
  
  return { questionType, answerValue };
}

// Funció per fer que la IA faci una pregunta
function iaMakeQuestion() {
  if (!gameState.gameActive || gameState.currentTurn !== 'ia') return;
  
  setTimeout(() => {
    const question = generateRandomQuestion();
    processQuestion(question.questionType, question.answerValue, false);
  }, 800 + Math.random() * 700); // Delay entre 800ms i 1500ms
}

// Funció per canviar el torn
function switchTurn() {
  if (!gameState.gameActive) return;
  
  gameState.currentTurn = gameState.currentTurn === 'player' ? 'ia' : 'player';
  updateTurnIndicator();
  
  if (gameState.currentTurn === 'ia') {
    // Deshabilitar botons del jugador
    disablePlayerButtons();
    iaMakeQuestion();
  } else {
    // Habilitar botons del jugador
    enablePlayerButtons();
  }
}

// Funció per actualitzar l'indicador del torn
function updateTurnIndicator() {
  const turnIndicator = document.getElementById("turnIndicator");
  if (turnIndicator) {
    const turnText = gameState.currentTurn === 'player' ? 'Jugador' : 'IA';
    turnIndicator.textContent = `Torn del: ${turnText}`;
    turnIndicator.className = `turn-indicator turn-${gameState.currentTurn}`;
  }
}

// Funció per deshabilitar botons del jugador
function disablePlayerButtons() {
  const questionButtons = document.querySelectorAll('.question-btn');
  const guessButton = document.querySelector('.guess-button');
  
  questionButtons.forEach(btn => {
    btn.disabled = true;
    btn.classList.add('disabled');
  });
  
  if (guessButton) {
    guessButton.disabled = true;
    guessButton.classList.add('disabled');
  }
}

// Funció per habilitar botons del jugador
function enablePlayerButtons() {
  const questionButtons = document.querySelectorAll('.question-btn');
  const guessButton = document.querySelector('.guess-button');
  
  questionButtons.forEach(btn => {
    btn.disabled = false;
    btn.classList.remove('disabled');
  });
  
  if (guessButton) {
    guessButton.disabled = false;
    guessButton.classList.remove('disabled');
  }
}

// Funció per gestionar el clic en una pregunta
function handleQuestionClick(questionType, answerValue) {
  if (!gameState.gameActive || gameState.currentTurn !== 'player') return;
  
  processQuestion(questionType, answerValue, true);
}

// Funció per mostrar el modal d'endevinació
function showGuessModal() {
  const modal = document.getElementById("guessModal");
  const modalGrid = document.getElementById("modalCharactersGrid");
  
  if (!modal || !modalGrid) return;
  
  // Netejar el grid del modal
  modalGrid.innerHTML = '';
  
  // Mostrar els personatges disponibles al grid del jugador (grid blau)
  // El jugador ha d'endevinar el personatge secret de la IA, però ha de triar
  // d'entre els personatges que li queden disponibles al seu propi grid
  gameState.playerCharacters.forEach(character => {
    const card = createCharacterCard(character);
    card.addEventListener('click', () => {
      checkGuess(character.id, true);
      closeModal('guessModal');
    });
    modalGrid.appendChild(card);
  });
  
  modal.style.display = 'block';
}

// Funció per tancar un modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Funció per comprovar una endevinació
function checkGuess(characterId, isPlayer) {
  if (!gameState.gameActive) return;
  
  const secretCharacter = isPlayer ? gameState.iaSecretCharacter : gameState.playerSecretCharacter;
  const isCorrect = secretCharacter.id === characterId;
  
  const speaker = isPlayer ? 'Jugador' : 'IA';
  const guessedCharacter = characters.find(c => c.id === characterId);
  
  if (isCorrect) {
    addComment(speaker, `He endevinat! És ${guessedCharacter.name}!`, 'victory');
    endGame(isPlayer ? 'player' : 'ia');
  } else {
    addComment(speaker, `He intentat endevinar ${guessedCharacter.name}, però m'he equivocat!`, 'defeat');
    // Continuar el joc
    setTimeout(() => {
      switchTurn();
    }, 1000);
  }
}

// Funció per fer que la IA endevini
function iaMakeGuess() {
  if (!gameState.iaCanGuess || gameState.iaCharacters.length !== 1) return;
  
  const characterToGuess = gameState.iaCharacters[0];
  checkGuess(characterToGuess.id, false);
}

// Funció per comprovar si el joc ha acabat
function checkGameOver() {
  // Si la IA només té un personatge i és el seu torn, pot endevinar
  if (gameState.iaCharacters.length === 1 && gameState.currentTurn === 'ia') {
    gameState.iaCanGuess = true;
    setTimeout(() => {
      if (gameState.gameActive) {
        iaMakeGuess();
      }
    }, 1000);
  }
  
  // Si el jugador només té un personatge i és el seu torn, pot endevinar
  if (gameState.playerCharacters.length === 1 && gameState.currentTurn === 'player') {
    gameState.playerCanGuess = true;
  }
}

// Funció per finalitzar el joc
function endGame(winner) {
  gameState.gameActive = false;
  
  const winnerText = winner === 'player' ? 'Jugador' : 'IA';
  addComment('Sistema', `El joc ha acabat! Guanyador: ${winnerText}`, winner === 'player' ? 'victory' : 'defeat');
  
  // Reproduir so de victòria segons el guanyador
  if (winner === 'player') {
    playSound('victory'); // Victoria del jugador
  } else {
    playSound('iaVictory'); // Victoria de la IA
  }
  
  // Deshabilitar tots els botons
  disablePlayerButtons();
  
  // Revelar personatges secrets
  setTimeout(() => {
    revealSecretCharacters(winner);
  }, 1500);
}

// Funció per revelar els personatges secrets
function revealSecretCharacters(winner) {
  const modal = document.getElementById("endGameModal");
  const title = document.getElementById("endGameTitle");
  const playerSecretImg = document.getElementById("playerSecretImg");
  const playerSecretName = document.getElementById("playerSecretName");
  const iaSecretImg = document.getElementById("iaSecretImg");
  const iaSecretName = document.getElementById("iaSecretName");
  
  if (!modal) return;
  
  const winnerText = winner === 'player' ? 'Jugador' : 'IA';
  if (title) {
    title.textContent = `Guanyador: ${winnerText}`;
  }
  
  if (playerSecretImg && playerSecretName) {
    playerSecretImg.src = gameState.playerSecretCharacter.image;
    playerSecretImg.alt = gameState.playerSecretCharacter.name;
    playerSecretName.textContent = gameState.playerSecretCharacter.name;
  }
  
  if (iaSecretImg && iaSecretName) {
    iaSecretImg.src = gameState.iaSecretCharacter.image;
    iaSecretImg.alt = gameState.iaSecretCharacter.name;
    iaSecretName.textContent = gameState.iaSecretCharacter.name;
  }
  
  modal.style.display = 'block';
}

// Funció per gestionar el clic al botó d'endevinar
function handleGuessClick() {
  if (!gameState.gameActive || gameState.currentTurn !== 'player') return;
  
  showGuessModal();
}

// Funció per reproduir sons
function playSound(soundType) {
  if (!gameState.audioEnabled) return;
  
  const soundMap = {
    'success': 'assets/sounds/succed.mp3',
    'fail': 'assets/sounds/fail.mp3',
    'victory': 'assets/sounds/victoryff.swf.mp3',
    'iaVictory': 'assets/sounds/pue-pue-pue_ltDwNu9.mp3',
  };
  
  const soundFile = soundMap[soundType];
  if (!soundFile) return;
  
  const audio = new Audio(soundFile);
  audio.volume = 0.5;
  audio.play().catch(err => {
    console.log('Error reproduint so:', err);
  });
}

// Funció per configurar els event listeners
function setupEventListeners() {
  // Event listeners per als botons de pregunta
  const questionButtons = document.querySelectorAll('.question-btn');
  questionButtons.forEach(button => {
    button.addEventListener('click', function() {
      const questionGroup = this.closest('.question-group');
      const questionLabel = questionGroup.querySelector('.question-label');
      const labelText = questionLabel.textContent.trim();
      const buttonText = this.textContent.trim();
      
      let questionType = '';
      let answerValue = '';
      
      // Determinar el tipus de pregunta i el valor de la resposta
      if (labelText.includes('Gènere')) {
        questionType = 'gènere';
        answerValue = buttonText; // Home, Dona
      } else if (labelText.includes('Té pel')) {
        questionType = 'téPel';
        answerValue = 'Sí';
      } else if (labelText.includes('Color de pel')) {
        questionType = 'colorPel';
        answerValue = buttonText; // Castany, Negre, Ros, etc.
      } else if (labelText.includes('pèl llarg')) {
        questionType = 'téPelLlarg';
        answerValue = 'Sí';
      } else if (labelText.includes('ulleres')) {
        questionType = 'téUlleres';
        answerValue = 'Sí';
      } else if (labelText.includes('Professió')) {
        questionType = 'professió';
        answerValue = buttonText; // Polític, Cantant, etc.
      } else if (labelText.includes('esportista')) {
        questionType = 'ésEsportista';
        answerValue = 'Sí';
      } else if (labelText.includes('presentador')) {
        questionType = 'ésPresentador';
        answerValue = 'Sí';
      } else if (labelText.includes('Orientació política')) {
        questionType = 'orientacióPolítica';
        answerValue = buttonText; // Esquerra, Dreta, Apolític
      } else if (labelText.includes('País')) {
        questionType = 'país';
        answerValue = buttonText; // Espanya, EE.UU., etc.
      } else if (labelText.includes('president')) {
        questionType = 'haEstatPresident';
        answerValue = 'Sí';
      } else if (labelText.includes('milionari')) {
        questionType = 'ésMilionari';
        answerValue = 'Sí';
      }
      
      if (questionType) {
        handleQuestionClick(questionType, answerValue);
      }
    });
  });
  
  // Event listener per al botó d'endevinar
  const guessButton = document.querySelector('.guess-button');
  if (guessButton) {
    guessButton.addEventListener('click', handleGuessClick);
  }
  
  // Event listeners per als modals
  const modalCloses = document.querySelectorAll('.modal-close');
  modalCloses.forEach(closeBtn => {
    closeBtn.addEventListener('click', function() {
      const modal = this.closest('.modal');
      if (modal && modal.id !== 'selectSecretModal') {
        closeModal(modal.id);
      }
    });
  });
  
  // Tancar modal al fer clic fora (excepte el modal de selecció inicial)
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
    modal.addEventListener('click', function(e) {
      if (e.target === this && this.id !== 'selectSecretModal') {
        closeModal(this.id);
      }
    });
  });
}

// Funció per continuar la inicialització després de seleccionar el personatge secret
function continueGameInitialization() {
  // Seleccionar personatge secret de la IA (aleatori)
  selectIASecretCharacter();
  
  // Renderitzar grids
  renderCharacterGrids();
  
  // Configurar event listeners
  setupEventListeners();
  
  // Iniciar música de fons
  const backgroundMusic = document.getElementById("backgroundMusic");
  if (backgroundMusic) {
    backgroundMusic.loop = true;
    backgroundMusic.volume = 0.3;
    backgroundMusic.play().catch(err => {
      console.log('Error reproduint música de fons:', err);
    });
  }
  
  // Activar el joc
  gameState.gameActive = true;
  
  // Mostrar missatge inicial
  addComment('Sistema', 'El joc ha començat! Has seleccionat el teu personatge secret.', 'question');
  addComment('Sistema', 'Comença el jugador. Fes una pregunta per eliminar personatges!', 'question');
  
  // Actualitzar indicador de torn
  updateTurnIndicator();
}

// Funció principal d'inicialització
function initializeGame() {
  // Inicialitzar variables d'estat
  gameState.playerSecretCharacter = null;
  gameState.iaSecretCharacter = null;
  gameState.playerCharacters = [];
  gameState.iaCharacters = [];
  gameState.currentTurn = 'player';
  gameState.gameActive = false; // No activar fins que es seleccioni el personatge
  gameState.playerCanGuess = false;
  gameState.iaCanGuess = false;
  gameState.questionHistory = [];
  gameState.iaQuestionHistory = [];
  gameState.playerQuestionCount = 0;
  gameState.iaQuestionCount = 0;
  gameState.audioEnabled = true;
  
  // Mostrar modal per seleccionar personatge secret del jugador
  showSelectSecretModal();
}

// Inicialitzar el joc quan es carregui la pàgina
window.addEventListener('load', initializeGame);
