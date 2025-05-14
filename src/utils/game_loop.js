// Loop principal del juego

export function startGameLoop(state, updateCookiesDisplay) {
    setInterval(() => {
        const totalCps = state.generators.reduce((sum, gen) => {
            return sum + gen.amount * gen.cps;
        }, 0);

        state.cookies += totalCps;
        updateCookiesDisplay();
    }, 1000);
    }
