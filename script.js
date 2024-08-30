//Etape 1.1
function afficherEtoiles(n) {
    console.log("*".repeat(n));
}
//afficherEtoiles(2);

//Etape 1.2
function afficherRectangle(h, l) {
    for (let i = 0; i < h; i++) {
        afficherEtoiles(l);
    }
}
//afficherRectangle(5, 5);

//Etape 1.3
function afficherTriangleDroite(n) {
    for (let i = 0; i < n; i++) {
        console.log("*".repeat(i) + "\\");
    }
}
//afficherTriangleDroite(5);

//Etape 1.4
function afficherTriangleGauche(n) {
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i) + "/" + "*".repeat(i));
    }
}
//afficherTriangleGauche(5);

//Etape 1.5
function afficherPointe(n) {
    console.log(" ".repeat(n + 1) + "+");
    for (let i = 0; i < n; i++) {
        console.log(" ".repeat(n - i) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}
//afficherPointe(4);

//Etape 2.1
function afficherEtage(h, point_offset) {
    for (let i = point_offset; i < h + point_offset; i++) {
        let a = h - i + point_offset;
        console.log(" ".repeat(a) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}
/* afficherEtage(3, 0); // les 3 premières lignes
afficherEtage(3, 1); // affiche à partir de la deuxième ligne, et continue sur 3 lignes
afficherEtage(3, 2); // affiche à partie de la troisième lige, et continue sur 3 lignes */

//Etape 2.2 : point_offset et espacement sont des valeurs dont la somme est égale à h
function afficherEtageClean(h, point_offset, espacement) {
    for (let i = point_offset; i < h + point_offset; i++) {
        let b = h - i + point_offset + espacement;
        console.log(" ".repeat(b) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}
/* afficherEtageClean(3, 0, 3);
afficherEtageClean(3, 1, 2);
afficherEtageClean(3, 2, 1);
afficherEtageClean(3, 3, 0); */

//Etape 2.3 : difficulté de placer l'étoile en haut du sapin. Dans cette étape, le nombre d'étoiles au sein du sapin incrémente de 1 en 1.
function afficherSapin1(etages, h_etages) {
    console.log(" ".repeat(etages * 2 + 1) + "+");
    for (let i = 0; i < etages; i++) {
        afficherEtageClean(h_etages, i, h_etages - i);
    }
}
//afficherSapin1(3, 3);

//Etape 3 : Dans cette étape, le nombre d'étoiles au sein du sapin incrémente de 2 en 2.
function afficherTronc(h, l, espacement) {
    if (l % 2 == 0) {
        l += 1;
        espacement -= 1;
    }
    for (let i = 0; i < h; i++) {
        console.log(" ".repeat(espacement) + "#".repeat(l));
    }
}

//Etape 3 : ajouter des décorations - en cours. Je n'arrive pas à savoir s'il y a une façon plus rapide de faire. Il me reste le fait de contrôler que deux décorations ne soient pas côte à côte.
function afficherEtageDecore(h, point_offset, espacement) {
    for (let i = point_offset; i < h + point_offset; i++) {
        let b = h - i + point_offset + espacement;
        let triGauche = [];
        let triDroit = [];
        for (let j = 0; j < i; j++) {
            let charGauche;
            if (j == 0) {
                charGauche = "*";
            } else if (Math.random() < 0.1) {
                charGauche = "o";
            } else if (Math.random() > 0.9) {
                charGauche = "+";
            } else {
                charGauche = "*";
            }
            triGauche.push(charGauche);
        }
        for (let j = 0; j < i; j++) {
            let charDroit;
            if (j == i - 1) {
                charDroit = "*";
            } else if (Math.random() < 0.1) {
                charDroit = "o";
            } else if (Math.random() > 0.9) {
                charDroit = "+";
            } else {
                charDroit = "*";
            }
            triDroit.push(charDroit);
        }
        triDroit = triDroit.join("");
        triGauche = triGauche.join("");
        console.log(" ".repeat(b) + "/" + triGauche + "|" + triDroit + "\\");
    }
}
//afficherEtageDecore(3, 0, 3);

//Ne parvient pas à afficher un sapin complet si les paramètres etages et h_etages sont supérieurs à 3 : l'espacement n'est pas suffisant et nous nous retrouvons avec une valeur négative dans le paramètre de la méthode .repeat() sur les dernières boucles de la fonction afficherEtageClean()
function afficherSapin2(etages, h_etages) {
    console.log(" ".repeat(etages * 2 + 1) + "+");
    for (let i = 0; i < etages * 2; i += 2) {
        afficherEtageClean(h_etages, i, h_etages - i);
    }
    afficherTronc(etages, h_etages, etages * 2);
}
//afficherSapin2(4, 4);

//Si on met des valeurs supérieures à 5 en paramètre, le tronc n'est pas centré, meme chose si les paramètres ne sont pas égaux (l'étoile au dessus du sapin n'est pas centrée non plus). Il faudrait ajuster le troisième argument dans l'appel de la fonction "afficherTronc" au sein de la fonction. Le sapin n'est pas complètement sur la gauche.
function afficherSapinLoin(etages, h_etages) {
    console.log(" ".repeat(((etages + h_etages) / 2) * 3 + 1) + "+");
    for (let k = 0; k < etages * 2; k += 2) {
        afficherEtageDecore(h_etages, k, etages * 2 - k);
    }
    afficherTronc(etages, etages, ((etages + h_etages) / 2) * 3);
}

afficherSapinLoin(3, 3);
