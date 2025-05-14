// guardar o cargar local store
// src/utils/saveManager.js
import { SAVE_KEY } from "../constants.js";

export function saveGame(state) {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
}

export function loadGame(defaultState) {
    const saved = localStorage.getItem(SAVE_KEY);
    return saved ? JSON.parse(saved) : defaultState;
}
