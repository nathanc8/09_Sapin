let triDroit = [];
let triGauche = [];

function triangleDroitDecore(param) {
    triDroit = [];
    //let temp;
    let charDroit;
    for (let j = 0; j < param; j++) {
        if (j == param - 1) {
            charDroit = "*";
        } else if (charDroit !== "*") {
            charDroit = "*";
        } else if (Math.random() < 0.2) {
            charDroit = "o";
        } else if (Math.random() > 0.8) {
            charDroit = "+";
        } else {
            charDroit = "*";
        }
        //temp = charDroit;
        triDroit.push(charDroit);
    }
    triDroit = triDroit.join("");
    //console.log("triangleDroitDecore console.log() : ", triDroit);
    return triDroit;
}

function triangleGaucheDecore(param) {
    triGauche = [];
    let temp;
    for (let j = 0; j < param; j++) {
        let charGauche;
        if (j == 0) {
            charGauche = "*";
        } else if (temp !== "*") {
            charGauche = "*";
        } else {
            let random = Math.random();
            if (random < 0.2) {
                charGauche = "o";
            } else if (random > 0.8) {
                charGauche = "+";
            } else {
                charGauche = "*";
            }
        }
        temp = charGauche;
        triGauche.push(charGauche);
    }
    triGauche = triGauche.join("");
    //console.log("triangleGaucheDecore console.log() : ", triGauche);
    return triGauche;
}

function afficherEtageClean(h, point_offset, espacement) {
    for (let i = point_offset; i < h + point_offset; i++) {
        let b = h - i + point_offset + espacement;
        console.log(" ".repeat(b) + "/" + "*".repeat(i) + "|" + "*".repeat(i) + "\\");
    }
}

function afficherTronc(h, l, espacement) {
    if (l % 2 == 0) {
        l += 1;
        espacement -= 1;
    }
    for (let i = 0; i < h; i++) {
        console.log(" ".repeat(espacement) + "#".repeat(l));
    }
}

function afficherEtageDecore(h, point_offset, espacement) {
    for (let i = point_offset; i < h + point_offset; i++) {
        let b = h - i + point_offset + espacement;
        triangleDroitDecore(i);
        triangleGaucheDecore(i);
        console.log(" ".repeat(b) + "/" + triGauche + "|" + triDroit + "\\");
    }
}

function afficherSapinLoin(etages, h_etages) {
    console.log(" ".repeat(((etages + h_etages) / 2) * 3 + 1) + "+");
    for (let k = 0; k < etages * 2; k += 2) {
        afficherEtageDecore(h_etages, k, etages * 2 - k);
    }
    afficherTronc(etages, etages, ((etages + h_etages) / 2) * 3);
}

afficherSapinLoin(3, 3);
afficherSapinLoin(5, 5);
