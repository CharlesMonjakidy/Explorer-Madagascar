// =========================================
// TOLIARA ÉVASION — INTERACTIONS
// =========================================

// Récupérer les éléments du menu
const boutonMenu = document.getElementById("bouton-menu");
const navigation = document.getElementById("navigation");
const liensMenu = navigation.querySelectorAll("a");

// Ouvrir et fermer le menu sur téléphone
boutonMenu.addEventListener("click", function () {
    navigation.classList.toggle("ouverte");

    if (navigation.classList.contains("ouverte")) {
        boutonMenu.textContent = "✕";
    } else {
        boutonMenu.textContent = "☰";
    }
});

// Fermer le menu après un clic sur un lien
liensMenu.forEach(function (lien) {
    lien.addEventListener("click", function () {
        navigation.classList.remove("ouverte");
        boutonMenu.textContent = "☰";
    });
});

// Afficher le bouton retour en haut après défilement
const retourHaut = document.getElementById("retour-haut");

window.addEventListener("scroll", function () {
    if (window.scrollY > 500) {
        retourHaut.classList.add("visible");
    } else {
        retourHaut.classList.remove("visible");
    }
});

// Remonter doucement en haut de la page
retourHaut.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});

// Ajouter un effet d'apparition aux sections
const elementsAReveler = document.querySelectorAll(
    ".intro, .entete-section, .carte-destination, .citation-texte, .experience, .etape, .photo-galerie, .contact-contenu"
);

elementsAReveler.forEach(function (element) {
    element.classList.add("reveler");
});

const observateur = new IntersectionObserver(function (entrees) {
    entrees.forEach(function (entree) {
        if (entree.isIntersecting) {
            entree.target.classList.add("visible");
            observateur.unobserve(entree.target);
        }
    });
}, {
    threshold: 0.12
});

elementsAReveler.forEach(function (element) {
    observateur.observe(element);
});

// Mettre à jour automatiquement l'année du pied de page
const anneeActuelle = new Date().getFullYear();
const mentionPied = document.querySelector(".pied-page > small");

mentionPied.textContent = "© " + anneeActuelle +
    " Toliara Évasion — Projet de découverte touristique.";
