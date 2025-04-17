# React + TypeScript + Vite

Ce modèle fournit une configuration minimale pour faire fonctionner React dans Vite avec certaines règles Biome et package préinstallé.

Il est préconfiguré avec un ensemble d'outils pour aider les étudiants à produire du code de qualité industrielle, tout en restant un outil pédagogique :

- **Husky** : Vous permet d'exécuter des commandes spécifiques déclenchées par des événements _git_.
- **Vite** : Alternative à _Create-React-App_, offrant une expérience plus fluide avec moins d'outils.
- **Biome** : Alternative à _ESlint_ et _Prettier_, assurant la qualité du code selon les règles choisies.

## Utilisateurs Windows

Assurez-vous de lancer ces commandes dans un terminal Git pour éviter [les problèmes de formats de nouvelles lignes](https://en.wikipedia.org/wiki/Newline#Issues_with_different_newline_formats) :

```sh
git config --global core.eol lf
git config --global core.autocrlf false
```

## Installation & Utilisation

1. Installez le plugin **Biome** dans VSCode et configurez-le.
2. Clonez ce dépôt, puis accédez au répertoire cloné.
3. Exécutez la commande `npm install`.
4. Créez un fichier d'environnement (`.env`) à la racine du dossier projet : vous pouvez copier le fichier `.env.sample` comme modèle (**ne le supprimez pas**).

## Commandes de Base

| Commande               | Description                                                                 |
|------------------------|-----------------------------------------------------------------------------|
| `npm install`          | Installe les dépendances                   |
| `npm run dev`          | Démarre le server en développement         |
| `npm run check`        | Exécute les outils de validation (linting et formatage)                     |
