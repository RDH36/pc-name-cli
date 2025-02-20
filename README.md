# PC Name CLI 🖥️

Une interface en ligne de commande simple pour afficher et modifier le nom de votre ordinateur.

## 🚀 Installation

```bash
npm install -g @rdh36/pc-name-cli
```

### Aide

Pour voir toutes les commandes disponibles :

```bash
pc-name --help
```

## 📋 Prérequis

- Node.js (version 12 ou supérieure)
- npm ou yarn

## 💻 Installation pour le développement

1. Clonez le dépôt :

```bash
git clone https://github.com/votre-username/pc-name-cli.git
```

2. Installez les dépendances :

```bash
npm install
```

3. Compilez le TypeScript :

```bash
npm run build
```

## 🛠️ Technologies utilisées

- [TypeScript](https://www.typescriptlang.org/) - Langage de programmation
- [Commander.js](https://github.com/tj/commander.js) - Framework CLI
- [Chalk](https://github.com/chalk/chalk) - Styling de la console
- [Figlet](https://github.com/patorjk/figlet.js) - Génération de texte ASCII

## 📄 Licence

MIT

## 👥 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 🐛 Signalement de bugs

Si vous trouvez un bug, veuillez créer une issue en décrivant :

- Le comportement attendu
- Le comportement actuel
- Les étapes pour reproduire le bug

## 📝 Notes de version

### v1.0.0

- Affichage du nom de l'ordinateur
- Interface CLI basique

## ✨ Fonctionnalités

- 📝 Afficher le nom actuel de l'ordinateur
- 🔄 (À venir) Modifier le nom de l'ordinateur

## 📖 Utilisation

### Afficher le nom de l'ordinateur

```bash
pc-name show
```

### Modifier le nom de l'ordinateur

```bash
pc-name set <nouveau_nom>
```

## 📦 Structure du projet

- `src/cli.ts` : Point d'entrée principal de l'application
- `dist/cli.js` : Fichier binaire compilé
- `package.json` : Configuration du projet
- `tsconfig.json` : Configuration TypeScript
