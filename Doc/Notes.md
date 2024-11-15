### Yosef Nademo

## 08.11.2024

# Introduction du projet

### Ce que j'ai appris
- On peut utiliser un fichier de notes pour toute la classe
- Nommage du commit exemple : feat(snake):Répondre à une touche, écoute(kickoff): Ajouter notes
- Exemple description : [45] [Done]
- Question à se poser pour nommer un commit : "Qu'est ce que j'ai fait pour arriver au résultat?" donc, quoi(sur quoi): qu'est ce qui est fait
- Description des commits (Journal de travail) : [temps] [WIP ou bien DONE]
  
## Introduction JS(JavaScript)  
### Source [https://fr.javascript.info/first-steps]
-  une maniere différente pour assigner un type de valeur convenable pour variable : "let" = "var" ,mais nouvelle version pour declarer
- "alert" pour afficher le text
- ### Basics:  
- Declaring variables;
- Data types;
- Comments;
- Operators:
  - (Arithmetic: +, -, *, /, %, ++, --
  - Assignment: =, +=, -=, *=, /=
  - Comparison: ==, ===, !=, !==, >, <, >=, <=
  - Logical: &&, ||, !
  - Ternary: condition ? expr1 : expr2);;;
- Functions: Function declaration , Arrow function ,Immediately Invoked Function Expression (IIFE)
- Control Structures: Conditional statements, Switch statement, Loops(for,while, do while)
- Object Basics: Access properties, Add/Modify properties, Destructuring
- constructeur d'objet : "let user = new Object(); // syntaxe "constructeur d'objet"
  - "let user = {}; // syntaxe "littéral objet"
  - effacer une propriété avec delete : delete user.age
  - propriété doit se terminer avec une virgule pour chaque ligne
- pour les propriétés multi-mots , la syntaxe pour changer la valeur est : user["likes birds"] = true;
- différentes manières de changer la valeur des propriétés d'un objet
- test d'existence utilisant 'in' exemple: alert("samuel" in name);
- boucle for.. in, les clés sont les "name", "age", "isAdmin" dans un objet par exemple
  - si on fait un alert(user[clé]); dans le for.. in, alors cela va afficher les valeurs dans l'ordre
  - mais les propriétés non-entiers, sont listés dans l'ordre de créations
  - dont il suffit d' ajouter un '+' devant le "clé" quand on utilise la boucle for.. in

## List de tache pour semaine prochaine
- finir food
- avancer dans connaissances du JS

# 15.11.2024

## Installation Node JS

- Explications du prof par rapport au fichiers de base de projet Snake
- Installation et commandes pour Node JS
- npm i, puis npm run dev
- Différents fichiers sur le repo(gitignore pour les fichiers à ignorer, packages, vite.config.js, etc.)

- "export" et nécessite de ce mot clé
Symbol("foo") === Symbol("foo"); // false
