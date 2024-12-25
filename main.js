function inversionChaine (gomycode){
   //    vérification que l'entré est une chaine
   if (typeof gomycode !=="string") {
    throw new
 console.error("Erreur :", error.message);
   }
//    étape 1: convertir la chaine en un tableau de caractères
    const tableauDecaractères = gomycode. split("");
    console.log("tableau de caractères:", tableauDecaractères );
// étape2: inverser les éléments du tableau
    const tableauInverse = tableauDecaractères. reverse();
    console.log("tableau inversé :",tableauInverse);
    // étape 3 rejoindre les caractéres pour former la chaine inversée
    const chaineInverse = tableauInverse.join("");
    console.log("chaine inverse :", chaineInverse)
    // retourné la chaine inversé
    return chaineInverse;
}
function compterCaracteres (hello){
    // vérification que l'entrer est une chaine
    if (typeof hello  !== "string") {
        throw new
    console.error("Erreur :", error.message)
    }
    // : obtenir la longueur de chaine
     const text = chaine lenght;
     console.log('longueur de la chaine : ${longueur}');
     return longueur;
}
function capitaliserPremiereLettre (je suis thioune sarr)
if (typeof je suis thioune sarr !== "string") {
throw new
TypeError("Erreur :", error.message)
}
// séparation de la phrase en mots
const mots = phrase.split("");
// transformation de chaque mot: premiere mot en majuslcule,reste en minuscule
const motCapitalises = mots.map(mot => {
    // vérification que le mot n'est pas vide
    if (mot.lenght > 0){
    return
mot.charAt(0). toUppercase() +
mot.slice(1).toLowercase()
    }
    return "";
});
// reassemblage des mots avec un espace
    return
    motCapitalises.join(" ");
functiontrouverValeurMaxMinAvecBoucle(tableau) {
    if (!Array.isArray(tableau)
        || tableau.lenght === 0) {
               throw new 
  console.error("Veuillez fournir un tableau non vide.");
            }
            // trouvez la valeur maximale et minimale par boucle pour
            let valeurMax = tableau[0];
            let valeurMin = tableau[0];

            for (let i = 1; i < array.length; i++) {
                if (array[i] > valeurMax); {
                    valeurMax;ax = tablequ[i];
                }
                if (tableau[i] < valeurMin) {
                    valeurMin = tableau[i];
                } 
            }
            return {
                valeurMax, valeurMin
            }
} 
function calculerSomme(tableau) {
    // vérifier que l'entrée est un tableau
    if ! array.isArray(tableau) {
        throw new
        Error("l'entrée doit etre un tableau.");  
    }

    // vérifier que tous les élément du tableau sont des nombres
    if (!tableau. every (element =>typeof element === "nomber")) {
        throw new Error ("tous les elements du tableau doivent etre des nombres.");
    }
    // initialiser la somme à 0
    let somme = 0;
    for (let i = 0; i < tableau.lengt; i++) {
        somme += tableau[i];   
    }
    // retouner la somme totale
    return somme;
}
function filterArray(array,condition) {
    // vérifier que le premier argument est un tableau
    if (!Array.isArray(array)) {
        throw new TypeError("le premier argument doit etre untableau.");
    }
    if (typeof condition !=== "function") {
        throw new TypeError("le deuxieme argument doit etre une fonction.");
    }
    // crée un tableau vide pour stocker les résultats
    const filteredArray = [];
    // pour chaque element du tableau
    for (let i = 0; i < array.length; i++) {
        const element = array [i];
        if (condition(element)) {
            filteredArray.push(element);
        }  
    }
    // retourne le tableau filtré
    return filteredArray
}
function factorielleIterative(n) {
    if (typeof n !=='number'|| n < 0 || !
        Number.isInteger(n)) {
        throw new
        Error("veuillez entrer un entier positif ou nul.");
    }
    let resultat = 1;
    for (let i 2; i<= n; i++) {
        resultat *= i;
    }
    return resultat;
}
function estNombrePremier(n) {
    // verifier que l'entrée est un entier superieur à 1
    if (typeof n !== 'number' || n <= 1 || !
        Number.isInteger(n) ) {
        return false;
    }
    vérifier les cas ou n est divisible par un nombre 2 
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            return false;
        }
     }
    //  si aucune division n'a réussi, n est premier
    return true;
}
functiongenereFibonacci(n) {
    if (typeof n !== 'number' || n <=0 || !
        Number.isInteger (n) ) {
        throw new Error("veuillez entrer un nombre positif.");
    }

    // nitialisation de la suite de fibonacci
    let fibonacci = [];
    // generetion des termes 
    for (let i = 0; i < n; i++) {
        if (i === 0){
            fibonacci.push(0)
        }  else if ( i=== 1) {
            fibonacci.push(1)
        } else {
            // chaque terme est la somme de deux  précédents
            fibonacci.push (fibonacci[i - 2]);
        }
        }
        return fibonqcci;
}