// para formatear numeros 
// src/utils/formatter.js
export function formatNumber(num) {
    return num.toLocaleString("en-US", { maximumFractionDigits: 1 });
}

