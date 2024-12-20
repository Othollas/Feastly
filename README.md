# Feastly

# Projet D'organisation d'évenement avec Gestion Backend

## 📝 Description
Ce projet est une application web complète qui comprend :
- Un formulaire de saisie dynamique permettant de renseigner les informations sur les participants.
- Une présentation des activités un **slider** d'images adaptatif qui gère les formats verticaux et horizontaux.
- Une interface connectée à un backend basé sur **Node.js** avec **Express**, gérant les lectures et mises à jour de données en temps réel.
- Un frontend moderne développé en **React**, utilisant des pratiques de développement propres et modulaires.

---

## 🚀 Fonctionnalités principales
1. **Frontend :**
   - Formulaire de gestion des informations des participants.
   - Slider d'images responsif et adaptatif.
   - Support des images de formats différents (portrait et paysage).
   - Mise à jour en temps réel avec gestion dynamique des données (par exemple, via une checkbox).

2. **Backend :**
   - API RESTful avec gestion des routes pour les lectures, insertions et mises à jour.
   - Gestion sécurisée des variables d'environnement grâce à **dotenv**.
   - Connexion à une base de données **MySQL**.

3. **Design :**
   - Design moderne avec une gestion propre des styles CSS.
   - Support des transitions fluides pour une meilleure expérience utilisateur.

---

## 🛠️ Technologies utilisées
### **Frontend :**
- **React** : Framework JavaScript pour construire l'interface utilisateur.
- **CSS** : Pour le style et les animations.
- **Flexbox & Grid** : Gestion des mises en page responsives.

### **Backend :**
- **Node.js** : Environnement JavaScript côté serveur.
- **Express** : Framework léger pour construire l'API RESTful.
- **MySQL** : Base de données relationnelle pour stocker les données.
- **dotenv** : Gestion des configurations sécurisées.

### **Autres :**
- **Git** : Gestion de version.
- **Postman** : Test et documentation des API.

---

## 🔧 Installation et utilisation
### **Prérequis :**
1. Node.js (version LTS recommandée)
2. MySQL (avec une base de données configurée)
3. Un terminal ou IDE comme VSCode.

### **Étapes d'installation :**
1. **Clonez le dépôt GitHub :**
   ```bash
   git clone https://github.com/votre-nom-utilisateur/nom-du-projet.git
   cd nom-du-projet

2. **Installez les dépendances :**

npm install


3. **Configuration de l'environnement :**

### **Créez un fichier .env à la racine du projet avec les informations suivantes :**

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=motdepasse
DB_NAME=nomdelabase


---

## 📂 **Arborescence du projet**

mon-projet/
├── client/                 # Code du frontend React
│   ├── src/
│   │   ├── components/     # Composants réutilisables (Slider, Button, etc.)
│   │   ├── pages/          # Pages principales de l'application
│   │   └── App.js          # Entrée principale React
├── server/                 # Code du backend Node.js
│   ├── routes/             # Routes API Express
│   ├── models/             # Gestion des interactions avec la base de données
│   └── server.js           # Entrée principale du serveur
├── .env                    # Fichier d'environnement
├── package.json            # Dépendances et scripts
└── README.md               # Documentation

---

## 📖 **Fonctionnalités avancées**

- Slider personnalisable : Les images s'adaptent automatiquement, quel que soit leur format.
- API sécurisée : Gestion des erreurs et validation des entrées utilisateur.
- Mise à jour en temps réel : Utilisation d'événements et de requêtes AJAX/Fetch pour synchroniser le frontend avec la base de données.

---

##🌟 **Prochaines améliorations**

- Intégration d'un système de cache pour améliorer les performances.
- Gestion utilisateur avec authentification.
- Ajout d'animations plus complexes pour le slider.