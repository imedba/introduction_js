## 0. C'est quoi JavaScript ?
 
- **HTML** = le contenu (la structure)
- **CSS** = l'apparence (le style)
- **JavaScript** = le comportement (ce qui bouge, réagit, calcule)
On le relie à la page **à la fin du `<body>`** :
 
```html
<script src="script.js"></script>
```
 
Pour voir ce qui se passe : **F12 → onglet Console**.
 
```js
console.log("Bonjour !");  // affiche un message dans la console
```
 
---
 
## 1. Les variables
 
Une variable est une **boîte avec une étiquette** qui contient une valeur.
 
```js
const boutique = "Street Feet"; // const : la valeur ne changera pas
let stock = 12;                 // let : la valeur peut changer
stock = 15;                     // ✅ autorisé avec let
 
// boutique = "Autre";          // ❌ erreur : on ne réassigne pas une const
```
 
> 👉 Règle simple : **`const` par défaut**, `let` seulement si la valeur doit changer.
> ❌ Oubliez `var` (ancienne syntaxe).
 
---
 
## 2. Les types de données
 
```js
const nom = "Air Max 90";      // string  (texte, entre guillemets)
const prix = 149.99;           // number  (nombre, entier ou décimal)
const enStock = true;          // boolean (true / false)
const pointures = [40, 41, 42];// array   (tableau, liste de valeurs)
const chaussure = {            // object  (objet, ensemble de propriétés)
  nom: "Air Max 90",
  prix: 149.99
};
let promo;                     // undefined (pas encore de valeur)
 
console.log(typeof prix);      // "number"
```
 
---
 
## 3. Les calculs
 
```js
const prix = 100;
const quantite = 3;
 
console.log(prix + 20);         // 120  addition
console.log(prix - 20);         // 80   soustraction
console.log(prix * quantite);   // 300  multiplication
console.log(prix / 4);          // 25   division
console.log(10 % 3);            // 1    modulo (reste de la division)
console.log(2 ** 3);            // 8    puissance
 
let stock = 10;
stock += 5;   // stock = stock + 5  → 15
stock -= 2;   // → 13
stock++;      // +1 → 14
stock--;      // -1 → 13
 
// Arrondis
console.log(Math.round(4.6));        // 5
console.log((124.98666).toFixed(2)); // "124.99" (attention : texte !)
```
 
⚠️ **Le piège n°1 : texte + nombre**
 
```js
console.log("10" + 5);          // "105"  → collé comme du texte !
console.log(Number("10") + 5);  // 15     → on convertit d'abord
```
 
---
 
## 4. Le texte (strings)
 
```js
const nom = "Samba";
const prix = 120;
 
// Concaténation classique
console.log("La " + nom + " coûte " + prix + " €");
 
// Template string (backticks ` `) → plus lisible ✅
console.log(`La ${nom} coûte ${prix} €`);
 
console.log(nom.length);         // 5
console.log(nom.toUpperCase());  // "SAMBA"
console.log(nom.includes("am")); // true
```
 
---