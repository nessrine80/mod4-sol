// ÉTAPE 2: Enveloppez tout le contenu de SpeakHello.js dans un IIFE
// Voir leçon 52, partie 2


// ÉTAPE 3: Créez un objet, appelé 'helloSpeaker' auquel vous attacherez
// la méthode "speak" et que vous exposerez au contexte global
// Voir leçon 52, partie 1
 


// NE PAS attacher la variable speakWord à l'objet 'helloSpeaker'.
( fonction () {
	var helloSpeaker = {};
	var speakWord =  " Bonjour " ;

// ÉTAPE 4: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée au
// objet helloSpeaker au lieu d'être une fonction autonome.
// Voir leçon 52, partie 2
	helloSpeaker . speak  =  fonction ( nom ) {
  		console . journal (speakWord +  "  "  + nom);
	}


// ÉTAPE 5: Exposez l'objet 'helloSpeaker' à la portée globale. Nomme le
// 'helloSpeaker' sur la portée mondiale également.
// Voir leçon 52, partie 2
// (Remarque, l'étape 6 sera effectuée dans le fichier SpeakGoodBye.js.)
 	fenêtre . helloSpeaker  = helloSpeaker;
}) ();
