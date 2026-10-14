let moi = {
    prenom : "imed",
    nom : "ben amor",
    age : 56,
    ville : "paris",
    married : false
}

function salutation(le_prenom) {
    console.log("Bonjour "+le_prenom+", comment allez-vous ?");
}

salutation("Imed");
salutation("Yvan");
salutation("Romain");

salutation(moi.prenom);
