# Introducció

Aquest projecte és una implementació del clàssic joc de taula "Qui és qui". L'arquitectura es basa en una matriu de dades (personatges) i la manipulació del DOM per reflectir el filtratge d'aquestes dades segons les preguntes de l'usuari. És l'exemple perfecte per al teu desenvolupament perquè separa clarament les dades (JSON/Objectes) de la lògica (JS) i la vista (HTML/CSS).

## 1. Variables d'Estat del Joc

L'estat del joc no es guarda en variables físiques (x, y), sinó en estructures de dades lògiques.

### a. Característiques dels jugadors / personatges

La "base de dades" del joc és un Array d'Objectes Constant. Cada objecte representa un personatge i els seus atributs booleans o strings.

```javascript
const CHARACTERS = [
  { name: 'Sakura', hair: 'pink', eyes: 'green', glasses: false, hat: false, img: 'images/sakura.png' },
  { name: 'Kai', hair: 'black', eyes: 'brown', glasses: true, hat: false, img: 'images/kai.png' },
  // ... resta de personatges
];
```

### b. Estat del tauler i joc

Les variables mutables que defineixen l'estat actual de la partida són:

- **secretCharacter** (Objecte): Emmagatzema el personatge que l'ordinador ha triat aleatòriament i que l'usuari ha d'endevinar.
- **currentCharacters** (Array): Comença sent una còpia de tots els personatges. A mesura que el jugador fa preguntes, els personatges descartats s'eliminen d'aquesta llista (o es marquen).
- **stepCount** (Enter): Comptador de quants torns/preguntes ha fet l'usuari (opcional per a puntuació).

### c. Flux del joc

- **gameActive** (Booleà): Controla si la partida està en marxa o s'ha acabat (Victòria/Derrota), bloquejant inputs si és false.

## 2. Funcions que canvien les variables d'estat

Aquestes funcions són el "nucli lògic" del joc, ja que modifiquen les dades sense tocar necessàriament el DOM directament.

### setSecret()

Genera un índex aleatori (`Math.floor(Math.random() * length)`) i assigna un personatge de l'array principal a la variable `secretCharacter`.

### filterCharacters(property, value)

Aquesta és la funció més complexa i rellevant.

- Rebr l'atribut per filtrar (ex: `hair`) i el valor (ex: `'blonde'`).
- Compara si el `secretCharacter` té aquest atribut.
- Si el té (keep): Elimina de `currentCharacters` tots els que no el tinguin.
- Si no el té (remove): Elimina de `currentCharacters` tots els que sí el tinguin.
- Retorna o actualitza la llista de candidats restants.

## 3. Funcions d'interacció amb el DOM

Aquestes funcions agafen l'estat actual i "pinten" la pantalla.

### generateBoard()

S'executa a l'inici. Recorre l'array `CHARACTERS` i per a cada un crea un `div` amb la classe `.card`, insereix la imatge `<img>` i el nom `<h4>`, i l'afegeix al contenidor principal del tauler (`board.appendChild(card)`).

### updateBoard() / renderFiltered()

- No esborra el tauler sencer (seria ineficient).
- En lloc d'això, afegeix una classe CSS (ex: `.eliminated` o `.disabled`) a les cartes dels personatges que ja no estan a l'array `currentCharacters`.
- El CSS s'encarrega d'enfosquir la imatge:

```css
.card.eliminated {
    opacity: 0.2;
    pointer-events: none; /* Deshabilita clics */
}
```

### showWinMessage() / showLoseMessage()

Manipula un element `div` d'alerta o modal per mostrar el resultat final modificant la propietat `innerText` i `style.display`.

## 4. Control del Flux del Joc

La funció orquestradora sol anomenar-se `start()` o `initializeGame()`:

- Reinicia les variables (posa el comptador a 0).
- Crida a `setSecret()`.
- Elimina totes les classes `.eliminated` del DOM (reseteja visualment el tauler).
- Activa els event listeners.

També hi ha una funció `checkGameOver()` que s'executa després de cada filtre. Comprova si `currentCharacters.length === 1`. Si és cert, l'usuari ha guanyat automàticament.

## 5. Events i Handlers

El joc és totalment conduït per events ("Event Driven").

| Event | Element | Handler (Funció) | Descripció |
|-------|---------|------------------|------------|
| `change` | `<select>` (Dropdown) | `selectAttribute()` | Quan l'usuari tria "Cabell", es pobla el segon desplegable amb colors. |
| `click` | `<button id="guessBtn">` | `handleGuess()` | Executa la lògica de filtratge segons els valors seleccionats als desplegables. |
| `click` | `.card` (Div personatge) | `checkOneGuess()` | Permet arriscar-se a endevinar un personatge específic clicant-lo directament. |
| `click` | `<button id="restart">` | `start()` | Reinicia la partida. |

## 6. Temporització

En aquest tipus de joc, no s'utilitza `requestAnimationFrame` ni bucles de joc (`setInterval`) perquè no hi ha moviment constant.

Es pot utilitzar `setTimeout` puntualment per donar feedback a l'usuari. Per exemple: després de filtrar, esperar 500ms abans de mostrar un missatge de "Has eliminat 5 personatges" per fer-ho més natural.

## 7. Control d'Animacions

Les animacions es deleguen totalment a CSS3 Transitions, la qual cosa millora el rendiment del JS.

El codi JS només fa: `card.classList.add('eliminated')`.

El CSS gestiona l'animació:

```css
.card {
    transition: transform 0.6s, opacity 0.6s;
}
.card.eliminated {
    transform: rotateY(180deg); /* Efecte de tombar la carta */
    opacity: 0.3;
}
```

## 8. Detecció de Col·lisions

No aplica / No existeix.

En un "Qui és Qui", no hi ha física ni coordenades espacials que xoquin. La "col·lisió" seria equivalent a la comparació estricta d'atributs (`character.hair === selectedHair`). Si coincideix, es manté; si no, s'elimina.

## 9. Documentació

El repositori conté un README.md estàndard.

- **Usuari**: Explica breument les regles ("Endevina el personatge secret fent preguntes sobre els seus atributs").
- **Tècnica**: Inclou instruccions bàsiques de com obrir el projecte (simplement obrint `index.html` al navegador, ja que no requereix compilació ni servidors complexos).

