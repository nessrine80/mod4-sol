// REMARQUE! Les étapes de ce fichier sont fondamentalement identiques à celles que vous
// effectué dans le fichier SpeakHello.js.

// ÉTAPE 6: Enveloppez tout le contenu de SpeakGoodBye.js à l'intérieur d'un IIFE
// Voir leçon 52, partie 2
( fonction () {

// ÉTAPE 7: Créez un objet, appelé 'byeSpeaker' auquel vous attacherez
// la méthode "speak" et que vous exposerez au contexte global
// Voir leçon 52, partie 1
   var byeSpeaker = {};

// NE PAS attacher la variable speakWord à l'objet 'byeSpeaker'.
	var speakWord =  " Au revoir " ;

// ÉTAPE 8: Réécrivez la fonction 'speak' de telle sorte qu'elle soit attachée au
// objet byeSpeaker au lieu d'être une fonction autonome.
// Voir leçon 52, partie 2
    byeSpeaker . speak  =  fonction ( nom ) {
  		console . journal (speakWord +  "  "  + nom);
	}

// ÉTAPE 9: Exposez l'objet 'byeSpeaker' à la portée globale. Nomme le
// 'byeSpeaker' sur la portée mondiale également.
	fenêtre . byeSpeaker  = byeSpeaker;
}) ();
