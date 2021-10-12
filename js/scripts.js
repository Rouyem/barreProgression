/* nous aurons besoin de 4 valeurs :
La hauteur de la page (document)
La hauteur de la fenêtre (window)
La largeur de la fenêtre (window)
La position verticale (scroll)*/

window.onload = () => {
    // Ecouteur d'évènement sur scroll
    window.addEventListener("scroll", () => {
        // Calcul de la hauteur "utile" du document  (la hauteur de défilement = hauteur de page – hauteur de fenêtre)
        let hauteur = document.documentElement.scrollHeight - window.innerHeight

        // Récupération de la position verticale
        let position = window.scrollY

        // Récupération de la largeur de la fenêtre
        let largeur = document.documentElement.clientWidth

        // Calcul de la largeur de la barre
        // position actuelle en % de la hauteur totale = position verticale / hauteur de défilement
        // largeur de la barre : % de la hauteur * largeur de fenêtre
        let barre = position / hauteur * largeur

        // Modification du CSS de la barre
        document.getElementById("progress").style.width = barre+"px"
    })
}