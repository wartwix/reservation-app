# 🏨 Reservation App

Application web de gestion de réservations développée dans le cadre d'un TP React à l'ISEP.

## 📋 Description

Cette application simule un système de réservation en ligne permettant à l'utilisateur de :

- Consulter les disponibilités
- Choisir une date et une heure de réservation
- Réaliser une réservation
- Consulter la liste de ses réservations
- Modifier ou annuler une réservation existante

> Les données sont gérées entièrement côté front-end (pas de base de données).

## 🛠️ Technologies

- [React](https://react.dev/) — composants, événements, state
- [React Router](https://reactrouter.com/) — navigation entre les pages
- [Vite](https://vitejs.dev/) — bundler

## 🚀 Lancer le projet en local

```bash
# Cloner le repo
git clone https://github.com/wartwix/reservation-app.git
cd reservation-app

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev
```

L'application sera accessible sur `http://localhost:5173`.

## 📁 Structure du projet

```
src/
├── components/     # Composants réutilisables (Navbar, ...)
├── pages/          # Pages principales (Accueil, GestionReservations, ...)
├── App.jsx
└── main.jsx
```

## 👥 Auteurs

- Sadra
- Mattéo
