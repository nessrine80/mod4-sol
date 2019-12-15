// *******************************
// COMMENCEZ ICI SI VOUS VOULEZ UN POINT DE DÉPART PLUS FACILE POUR CETTE MISSION
// *******************************
//
// Module 4 Instructions d'affectation.
//
// L'idée de cette affectation est de prendre un tableau de noms existant
// puis affichez Hello 'Name' ou Good Bye 'Name' sur la console.
// Le programme doit dire "Bonjour" à n'importe quel nom sauf les noms qui commencent par un "J"
// ou "j", sinon, le programme devrait dire "Au revoir". Ainsi, la sortie finale
// sur la console devrait ressembler à ceci:
/ *
Bonjour Yaakov
Au revoir John
Au revoir Jen
Au revoir Jason
Salut Paul
Bonjour Frank
Bonjour Larry
Bonjour Paula
Bonjour Laura
Au revoir Jim
ATTENTION!!! ATTENTION!!!
Le code ne fonctionne PAS actuellement! C'est VOTRE travail de le faire fonctionner
comme décrit dans les exigences et les étapes afin de remplir cette
affectation.
ATTENTION!!! ATTENTION!!!
* /

// ÉTAPE 1: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
// Envelopper tout le contenu de script.js dans un IIFE
// Voir leçon 52, partie 2
// (Remarque, l'étape 2 se fera dans le fichier SpeakHello.js.)
( fonction () {

var names = [ " Yaakov " , " John " , " Jen " , " Jason " , " Paul " , " Frank " , " Larry " , " Paula " , " Laura " , " Jim " ];

// ÉTAPE 10: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
// Faites une boucle sur le tableau des noms et dites «Bonjour» ou «Au revoir»
// en utilisant la méthode 'speak' ou helloSpeaker ou byeSpeaker
// méthode 'speak'.
// Voir conférence 50, partie 1
for ( var i =  0 ; i <  names . length ; i ++ ) {

  // ÉTAPE 11: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
  // Récupère la première lettre du nom courant dans la boucle.
  // Utilisez la fonction 'charAt' de l'objet chaîne. Puisque nous recherchons
  // noms commençant par des majuscules ou des minuscules 'J' / 'j', appel
  // méthode 'toLowerCase' de l'objet chaîne sur le résultat afin que nous puissions comparer
  // pour mettre en minuscule le caractère 'j' ensuite.
  // Recherchez ces méthodes sur le site Web de Mozilla Developer Network si nécessaire.
  var firstLetter = names [i]. charAt ( 0 ). toLowerCase ();

  // ÉTAPE 12: (RIEN À FAIRE. DÉJÀ FAIT POUR VOUS)
  // Comparez la 'firstLetter' récupérée dans STEP 11 avec des minuscules
  // 'j'. Si c'est la même chose, appelez la méthode 'speak' de byeSpeaker avec le nom actuel
  // dans la boucle. Sinon, appelez la méthode 'speak' de helloSpeaker avec le courant
  // nom dans la boucle.
  if (firstLetter ===  ' j ' ) {
    byeSpeaker . parler (noms [i]);
  } else {
    helloSpeaker . parler (noms [i]);
  }
}

}) ();
