# 🍪 Cookie Clicker Clone (Vanilla JS + Vite)

Este proyecto es una **simulación del famoso juego Cookie Clicker**, desarrollado con **Vite y JavaScript Vanilla**, ideal para aprender desarrollo web interactivo sin frameworks pesados.

## 🚀 Características principales

- Clic en una galleta para ganar cookies.
- Contador en tiempo real.
- Generadores automáticos (auto-clickers) que producen cookies por segundo.
- Mejoras que aumentan la eficiencia.
- Guardado automático y manual usando LocalStorage.
- Interfaz visual atractiva y responsiva.
- Reinicio de partida.
- Sistema de progreso con estadísticas (opcional).
- Arquitectura modular para escalar fácilmente.

## 🛠️ Requisitos técnicos

- Node.js >= 14.x
- Navegador moderno
- Editor de código (VS Code recomendado)

## 🧩 Tecnologías usadas

- Vite
- JavaScript Vanilla
- HTML y CSS
- LocalStorage

## 📁 Estructura del proyecto

```bash
cookie-clicker-clone/
├─ public/
│  └─ assets/           # Imágenes de galletas y generadores
├─ src/
│  ├─ components/       # Lógica modular del juego
│  ├─ styles/           # Estilos del juego
│  ├─ utils/            # Funciones de guardado, formateo, etc.
│  ├─ main.js           # Entrada principal del juego
│  └─ constants.js      # constantes base
├─ index.html           # HTML principal
├─ README.md            # Este archivo
└─ package.json         # Dependencias y scripts
