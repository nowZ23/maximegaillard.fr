# maximegaillard.fr

Mon site personnel. En ligne sur [maximegaillard.fr](https://maximegaillard.fr).

## Stack

Pas de framework, pas de build, pas de dépendance runtime. Un seul `index.html` qui contient le markup, le CSS et le JS, servi en statique par Cloudflare Pages.

C'est un choix, pas un raccourci : le site tient en un fichier, il n'y a rien à compiler, rien à mettre à jour et il se charge en une requête HTML plus deux fichiers de police.

- **Polices** : Instrument Sans (licence OFL) pour tout le texte, monospace du système pour les dates et les métadonnées. Auto-hébergée dans `fonts/`, aucun appel à Google Fonts au runtime, donc rien à déclarer côté RGPD. Seul le sous-ensemble latin se charge en français, soit 30 ko. Bricolage Grotesque reste dans `fonts/` pour les pages `/ndoto/`.
- **Thème** : clair et sombre via `data-theme` sur `<html>`, posé avant le premier rendu par un petit script en `<head>`. Choix mémorisé en `localStorage`, sinon préférence du système.
- **Langues** : français et anglais dans le même document, bascule par classe CSS sur `<body>`. Pas de fichiers de traduction, pas de routage.
- **Contenu** : les projets sont un tableau `PROJECTS` en fin de fichier. Ajouter un projet = ajouter un objet.
- **Formulaire** : fonction Cloudflare `functions/api/contact.js`, envoi par email via Resend, en `fetch` sans rechargement.

## Chiffres à tenir à jour

Le compteur d'abonnés LinkedIn est écrit en dur dans `index.html` : les balises `meta` (description, `og:description`, `twitter:description`), la liste de repères de l'intro en FR et en EN et le tableau `PROJECTS` (titre plus bloc « Le résultat »). Il figure aussi dans l'image de partage `img/og-v3.jpg`. Chercher `5 000+` en français et `5,000+` en anglais pour les trouver tous.

Le chiffre est arrondi vers le bas, pas daté. Rien ne le met à jour automatiquement : un nombre exact deviendrait faux la semaine suivante, alors qu'un plancher reste vrai tant que l'audience monte. Le relever au palier suivant quand il est franchi.

## Développement

```bash
python3 -m http.server 8765
```

Puis ouvrir http://localhost:8765. Les chemins de police sont absolus (`/fonts/...`), donc il faut un serveur, `file://` ne suffit pas.

## Déploiement

Déploiement manuel sur Cloudflare Pages (projet `maximegaillard`), depuis une copie propre du dossier :

```bash
./deploy-cloudflare.sh
```

Le script publie les fichiers du site sans `functions/`, `wrangler.toml`, ce README ni les fichiers de travail, puis joint la fonction de contact. Ne rien laisser dans le dossier qui ne doive pas être public : les sauvegardes vivent dans `~/Developer/maxime-site-backups/`. Les en-têtes de cache sont dans `_headers`.

Les images sont servies en cache `immutable` : toute image modifiée change de nom (d'où `og-v3.jpg`).

Le dossier `cv/` ne contient que les quatre PDF réellement liés depuis le site, deux par langue.
