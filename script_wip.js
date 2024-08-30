//Etape 1 : afficher la pointe du sapin
//Etape 1.1 : ligne d'étoiles
function afficherLigne(n) {
    console.log("*".repeat(n));
}

//1.2 : carré d'étoiles
function afficherCarre(h, l) {
    for (let i = 0; i < h; i++) {
        afficherLigne(l);
    }
}

//1.3 : triangle droit
function afficherTriangleDroit(n) {
    for (let i = 0; i < n; i++) {
        console.log("*".repeat(i) + "\\");
    }
}

//1.4 : triangle gauche
function afficherTriangleGauche(n) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i) + "/" + "*".repeat(i));
    }
}
//1.5 : pointe complète
function afficherPointe(n) {
    console.log(" ".repeat(n + 1) + "+");
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}

//2.1 : étage - pointOffset est le nombre de ligne que l'on "saute" en haut de l'étage afin de pouvoir constituer un sapin par la suite.
function afficherEtage(h, pointOffset, espacement) {
    let spaces = espacement + pointOffset;
    for (let i = pointOffset; i < h + pointOffset; i++) {
        console.log(" ".repeat(spaces - i + 1) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}

afficherEtage(4, 0, 4);
afficherEtage(4, 1, 3);
afficherEtage(4, 2, 2);

/* function afficherSapin(etages, h_etage) {
    console.log(" ".repeat())
    for (let i = 0; i < etages, )
} */
