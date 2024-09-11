document.getElementById("simpleForm").addEventListener("submit", function(event){
    event.preventDefault(); // Empêche le rechargement de la page
    const info = document.getElementById("userInfo").value;
    alert("Vous avez entré : " + info);
});

// Sélection du bouton
const submitBtn = document.getElementById("submitBtn");

/* 
 * GESTIONNAIRE D'ÉVÉNEMENT : "mouseover" 
 * Animation pour le survol du bouton (quand le curseur passe dessus)
 */
submitBtn.addEventListener("mouseover", function() {
    submitBtn.style.backgroundColor = " #FF0000";  // Changer la couleur au survol
    submitBtn.style.transform = "scale(1.05)";    // Agrandir légèrement le bouton
    submitBtn.style.transition = "all 0.3s ease"; // Transition douce pour l'effet
});

/* 
 * GESTIONNAIRE D'ÉVÉNEMENT : "mouseout" 
 * Animation pour le moment où le curseur quitte le bouton
 */
submitBtn.addEventListener("mouseout", function() {
    submitBtn.style.backgroundColor = "#4CAF50";  // Remettre la couleur originale
    submitBtn.style.transform = "scale(1)";       // Revenir à la taille normale
    submitBtn.style.transition = "all 0.3s ease"; // Transition douce
});

/* 
 * GESTIONNAIRE D'ÉVÉNEMENT : "mousedown" 
 * Animation pour le clic (quand on clique sur le bouton)
 */
submitBtn.addEventListener("mousedown", function() {
    submitBtn.style.backgroundColor = "#3e8e41";  // Couleur changée lors du clic
    submitBtn.style.transform = "scale(0.95)";    // Rétrécir légèrement pour un effet de "pression"
    submitBtn.style.transition = "all 0.1s ease"; // Transition rapide pour l'effet de clic
});

/* 
 * GESTIONNAIRE D'ÉVÉNEMENT : "mouseup" 
 * Animation pour le relâchement du clic (quand on relâche la souris après avoir cliqué)
 */
submitBtn.addEventListener("mouseup", function() {
    submitBtn.style.backgroundColor = "#45a049";  // Remettre la couleur de survol
    submitBtn.style.transform = "scale(1.05)";    // Revenir à l'état de survol (taille agrandie)
    submitBtn.style.transition = "all 0.1s ease"; // Transition rapide pour un retour fluide
});

/* 
 * GESTIONNAIRE D'ÉVÉNEMENT : "dblclick" 
 * Animation pour le double-clic (quand l'utilisateur double-clique sur le bouton)
 */
submitBtn.addEventListener("dblclick", function() {
    submitBtn.style.backgroundColor = "#FF6347";  // Changer la couleur lors du double-clic
    submitBtn.style.transform = "scale(1.1)";     // Agrandir encore plus au double-clic
    submitBtn.style.transition = "all 0.3s ease"; // Transition douce

    // Après 1 seconde, remettre l'état normal
    setTimeout(function() {
        submitBtn.style.backgroundColor = "#4CAF50";  // Revenir à la couleur originale
        submitBtn.style.transform = "scale(1)";       // Revenir à la taille normale
        submitBtn.style.transition = "all 0.3s ease"; // Transition douce pour revenir à l'état initial
    }, 1000); // L'animation dure 1 seconde avant de revenir à l'état normal
});


// Animation du formulaire vers le haut et le bas comme un ping pong
// Sélectionner le formulaire et le champ de texte
const formContainer = document.querySelector(".form-container");
const inputField = document.getElementById("userInfo");

let direction = 1; // Variable pour la direction du mouvement (1 pour descendre, -1 pour monter)
let speed = 1.5; // Vitesse du mouvement (pixels par frame)
let moving = true; // Indique si le formulaire est en mouvement

// Fonction pour animer le formulaire de haut en bas
function animateForm() {
    if (!moving) return; // Si le mouvement est arrêté, ne rien faire

    const formRect = formContainer.getBoundingClientRect(); // Obtenir la position actuelle du formulaire
    const windowHeight = window.innerHeight; // Hauteur de la fenêtre visible

    // Inverser la direction si le formulaire touche le haut ou le bas de la fenêtre
    if (formRect.top <= 0 || formRect.bottom >= windowHeight) {
        direction *= -1; // Inverser la direction
    }

    // Mettre à jour la position du formulaire en fonction de la direction
    formContainer.style.transform = `translateY(${direction * speed}px)`;

    // Continuer l'animation
    requestAnimationFrame(animateForm);
}

// Lancer l'animation
animateForm();

// Fonction pour centrer le formulaire
function centerForm() {
    const formRect = formContainer.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const centerPosition = (windowHeight - formRect.height) / 2; // Calculer la position centrale

    formContainer.style.transition = "transform 1s ease"; // Ajout de la transition pour centrer en douceur
    formContainer.style.transform = `translateY(${centerPosition - formRect.top}px)`; // Recentrer le formulaire
}

// Événement lorsqu'on entre dans le champ de texte (focus)
inputField.addEventListener("focus", function() {
    moving = false; // Arrêter le mouvement
    centerForm(); // Recentrer le formulaire
});

// Événement lorsqu'on quitte le champ de texte (blur)
inputField.addEventListener("blur", function() {
    moving = true; // Reprendre le mouvement
    animateForm(); // Relancer l'animation
});


