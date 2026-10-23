/* Contenus repris tels quels d'index.html (version FR) pour les trois maquettes de directions. */
var SITE={
  name:"Maxime Gaillard",
  lede:"Étudiant en finance à l'IESEG. Je conçois, code et publie mes propres applications iOS.",
  avail:"En recherche d'un stage en vente pour l'été 2027, proche du client.",
  photo:"../img/maxime.jpg"
};
var PROJECTS=[
  {id:"geosnap",date:"2026",stype:"live",imgs:["../img/geosnap-1.jpg","../img/geosnap-2.jpg","../img/geosnap-3.jpg"],stack:["React Native","Expo","Supabase"],href:"https://apps.apple.com/fr/app/geosnap-f56181/id6783998653",
   place:"Lille",lat:50.6330,lng:3.0586,kind:"Projet",title:"GeoSnap",tag:"Partage photo géolocalisé",status:"En ligne · App Store",link:"Voir sur l'App Store",
   blocks:[["Le problème","Nos souvenirs se perdent, coupés de l'endroit où on les a vécus."],["Ce que j'ai fait","Conçu, codé et publié l'appli en solo, de l'idée jusqu'au store."],["Le résultat","En ligne sur l'App Store, en amélioration continue."]]},
  {id:"roadtrip",date:"2026",stype:"done",imgs:["../img/roadtrip-carte.jpg"],stack:["Claude","SVG","OpenStreetMap","OSRM"],href:null,
   place:"Sofia → Kavala",lat:42.6977,lng:23.3219,kind:"Projet",title:"Road trip avec Claude",tag:"Carte web animée d'un road trip Bulgarie → Grèce",status:"Livré",link:null,
   cap:"Capture de la carte. Fond © contributeurs OpenStreetMap. Hébergements, dates et participants retirés.",
   blocks:[["Le problème","Un road trip en groupe en dix étapes, avec les réservations éparpillées dans un document Word : personne n'avait la vue d'ensemble du parcours."],["Ce que j'ai fait","Avec Claude, j'ai transformé ce document en carte web animée : fond OpenStreetMap intégré au fichier, vrais trajets routiers calculés avec OSRM, deux voitures qui rejouent le parcours en convoi, vue jour par jour, filtres et roadbook imprimable."],["Le résultat","Un seul fichier HTML, lisible sur mobile et partagé au groupe avant le départ : 10 étapes, 1 092 km et 18 h de route."]]},
  {id:"bloomberg",date:"2026",stype:"done",imgs:["../img/bloomberg.jpg"],stack:[],href:null,
   place:"IESEG, Lille",lat:50.6330,lng:3.0586,kind:"Jalon",title:"Bloomberg certifié",tag:"Bloomberg Market Concepts",status:"Certifié",link:null,
   blocks:[["Ce que c'est","La certification Bloomberg Market Concepts : marchés, analyse financière, prise en main du terminal."],["Pourquoi ça compte","Elle ancre mon pied finance, juste à côté du produit et du code."]]},
  {id:"linkedin",date:"2025",stype:"up",imgs:["../img/linkedin.jpg"],stack:[],href:"https://www.linkedin.com/in/maxime-rené-gaillard",
   place:"En ligne",lat:null,lng:null,kind:"Jalon",title:"5 000+ abonnés sur LinkedIn",tag:"Audience finance & tech",status:"Actif",link:"Voir mon LinkedIn",
   blocks:[["Ce que j'ai fait","Construit une audience d'étudiants et de jeunes pros en finance, consulting et tech, en publiant régulièrement."],["Le résultat","5 000+ abonnés et des collaborations de marque cadrées."]]},
  {id:"web",date:"2025",stype:"done",imgs:[],stack:["Web","Marketing","Vente"],href:null,
   place:"PME",lat:null,lng:null,kind:"Projet",title:"Web & e-commerce",tag:"Sites PME · boutiques",status:"Livré",link:null,
   blocks:[["Ce que j'ai fait","Avant les apps, j'ai livré des sites pour des PME et monté des boutiques e-commerce : tunnels de vente, marketing, acquisition."],["Le résultat","La vente et le web appris sur le terrain, avec de vrais clients."]]}
];
var CV=[
  ["2026 → auj.","Fondateur et développeur, GeoSnap","Conception, développement et publication d'apps iOS."],
  ["2026","Stage, BPCE · Achats & Services","Automatisation Excel (macros) et gestion de dossiers."],
  ["2023 → 2025","Vendeur et préparateur, Manon Marée","Relation client, vente et préparation. Palaiseau."],
  ["2023","Chargé de qualité, E.Leclerc","Contrôle qualité et contenus vidéo promo. Belfort."],
  ["2023","Stage découverte, Stellantis","Service Design et contrôle de gestion R&D Europe."],
  ["2022","Serveur et caissier, Petite Bretagne","Vente en anglais et gestion des stocks. New York."]
];
var EDU=[
  ["2025 → 2030","IESEG School of Management","Programme Grande École (Master). Lille."],
  ["2022 → 2025","Lycée International Paris-Saclay","Bac mention, section européenne allemand."]
];
function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c];});}
/* ouverture d'une fiche par l'URL : ?p=geosnap (sert aux captures) */
function wantedProject(){var m=location.search.match(/[?&]p=([a-z]+)/);return m?m[1]:null;}
