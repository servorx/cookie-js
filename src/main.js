import { generators as baseGenerators } from "./data/generators.js";
import { COOKIE_VALUE } from "./constants.js";
import { saveGame, loadGame } from "./utils/save_manager.js";
import { startGameLoop } from "./utils/game_loop.js";
import { formatNumber } from "./utils/formatter.js";

const defaultState = {
  cookies: 0,
  generators: baseGenerators.map(g => ({ ...g, amount: 0 }))
};

const state = loadGame(defaultState);

// HTML
const cookieBtn = document.getElementById("cookie-button");
const cookieCount = document.getElementById("cookie-count");
const generatorList = document.getElementById("generators");

cookieBtn.addEventListener("click", () => {
  state.cookies += COOKIE_VALUE;
  updateCookiesDisplay();
});

function updateCookiesDisplay() {
  cookieCount.textContent = formatNumber(state.cookies);
}

// Renderiza botones de generadores
function renderGenerators() {
  generatorList.innerHTML = "";
  state.generators.forEach((gen, index) => {
    const button = document.createElement("button");
    button.textContent = `${gen.name} (${gen.amount}) - ${formatNumber(getGeneratorCost(gen))} cookies`;
    button.onclick = () => buyGenerator(index);
    generatorList.appendChild(button);
  });
}

function getGeneratorCost(gen) {
  return Math.floor(gen.baseCost * Math.pow(1.15, gen.amount));
}

function buyGenerator(index) {
  const gen = state.generators[index];
  const cost = getGeneratorCost(gen);
  if (state.cookies >= cost) {
    state.cookies -= cost;
    gen.amount++;
    updateCookiesDisplay();
    renderGenerators();
    saveGame(state);
  }
}

startGameLoop(state, updateCookiesDisplay);
renderGenerators();
updateCookiesDisplay();

