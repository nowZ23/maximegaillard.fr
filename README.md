# maximegaillard.fr

Mon site personnel. En ligne sur [maximegaillard.fr](https://maximegaillard.fr).

## Stack

Pas de framework, pas de build, pas de dépendance runtime. Un seul `index.html` qui contient le markup, le CSS et le JS, servi en statique par Netlify.

C'est un choix, pas un raccourci : le site tient en un fichier, il n'y a rien à compiler, rien à mettre à jour, et il se charge en une requête HTML plus deux fichiers de police.

- **Polices** : Bricolage Grotesque (titres) et Instrument Sans (texte), licence OFL, auto-hébergées dans `fonts/`. Aucun appel à Google Fonts au runtime, donc rien à déclarer côté RGPD. Sous-ensembles `unicode-range` séparés, seul le latin se charge en français, soit 161 ko à la première visite.
- **Thème** : clair et sombre via `data-theme` sur `<html>`, choix mémorisé en `localStorage`, valeur par défaut prise sur les préférences système.
- **Langues** : français et anglais dans le même document, bascule par classe CSS sur `<body>`. Pas de fichiers de traduction, pas de routage.
- **Contenu** : les projets sont un tableau `PROJECTS` en fin de fichier. Ajouter un projet = ajouter un objet.
- **Formulaire** : Netlify Forms, envoi en `fetch` sans rechargement.

## Chiffres à tenir à jour

Le compteur d'abonnés LinkedIn est écrit en dur à **5 endroits** dans `index.html` : les deux balises `meta` (description et `og:description`), le chapô du hero en FR et en EN, et le tableau `PROJECTS` (titre plus bloc « Le résultat »). Chercher `5 122` pour les trouver tous.

Le chiffre est daté volontairement. Un nombre rond et sans date se lit comme du marketing, un nombre exact et daté se vérifie.

## Développement

```bash
python3 -m http.server 8765
```

Puis ouvrir http://localhost:8765. Les chemins de police sont absolus (`/fonts/...`), donc il faut un serveur, `file://` ne suffit pas.

## Déploiement

Push sur `main`, Netlify déploie. Les en-têtes de cache sont dans `_headers`.
