# 🥗 GreenDelivery — Portail client de livraison écoresponsable

GreenDelivery est une application web conteneurisée permettant aux utilisateurs de :

- 🏪 Visualiser la liste des restaurants partenaires
- 🧾 Passer une commande en ligne (nom du client, plat, restaurant)

Ce projet a été réalisé dans le cadre du cours au College Lasalle (Hiver 2025).


Une fois les services lancés :

🖥 Frontend (React + Vite) : http://localhost:8080

🔗 Backend (Node.js + Express) : http://localhost:3000

🗃 Base de données : PostgreSQL (port mappé sur 5433)

🧱 Architecture du projet
Frontend : React.js avec Vite, TailwindCSS pour le design

Backend : Node.js + Express, connexion à PostgreSQL

Base de données : PostgreSQL avec persistance via volume Docker

Conteneurisation : Docker + orchestration via Docker Compose

Communication : API REST sécurisée avec gestion des CORS

📦 Fonctionnalités
Fonction	Description
/restaurants (GET)	Récupère la liste des restaurants partenaires
/orders (POST)	Enregistre une commande (nom, plat, restaurant)
Interface responsive	Liste des restaurants + formulaire de commande
Animation & UX	Feedback visuel, reset automatique, transitions Tailwind

🐳 Services Docker
Service	Description	Port
frontend	Application React	8080
backend	API Express (Node.js)	3000
postgres	Base de données PostgreSQL	5432 (interne) / 5433 (host)

🧪 Technologies utilisées
React.js + Vite

TailwindCSS 4.x

Node.js + Express

PostgreSQL

Docker & Docker Compose
---

## 🚀 Lancement du projet

### Prérequis :
- [Docker](https://www.docker.com/) et [Docker Compose](https://docs.docker.com/compose/install/) installés sur votre machine



### Commande à exécuter :

```bash
docker-compose up --build

