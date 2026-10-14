// Declare the counter
// ETAPE 2 : On déclare une variable dans le js nommé count qui est egal à 0
// C'est cette variable qu'on va incrémenter à chaque clique du bouton +
let count = 0;

// Function pour modifier la valeur de count dans le DOM
function updateCount() {
    // ETAPE 5 : On modifie la valeur de count DANS LE DOM CETTE FOIS CI
  document.getElementById("count").innerHTML = count;
}

// Function to increase the counter
// ETAPE 4 : La fonction increaseCount() incrémente le compteur count,
// count change de valeur mais que dans le js pour l'instant
// Puis il met à jour le DOM via updateCount() pour que l'utilisateur 
// voit la valeur de count changer en temps réel
function increaseCount() {
  count++;
  console.log(count);
  updateCount(); // change la valeur de count dans le DOM
}