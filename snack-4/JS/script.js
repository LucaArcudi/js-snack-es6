// Crea un array di oggetti che rappresentano degli animali.
// Ogni animale ha un nome, una famiglia e una classe.
// Es:

// [
//   { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
//   { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
//   { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
// ]

// Crea un nuovo array con la lista dei mammiferi.
// Bonus 1 : trasforma ogni valore di ogni animale in tutto maiuscolo tranne la prima lettera, tipo // leone => lEONE, canidi => cANIDI



let animali = [
{ nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
{ nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
{ nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
{ nome: 'squalo', famiglia: 'squalidi', classe: 'condritti'},
{ nome: 'tigre', famiglia: 'felidi', classe: 'mammiferi' },
{ nome: 'lupo', famiglia: 'canidi', classe: 'mammiferi' },
{ nome: 'volpe', famiglia: 'canidi', classe: 'mammiferi' },
{ nome: 'falco', famiglia: 'fasianidi', classe: 'uccelli' },
{ nome: 'picchiarello', famiglia: 'fasianidi', classe: 'uccelli' },
{ nome: 'aramacao', famiglia: 'fasianidi', classe: 'uccelli' },
{ nome: "t-rex", famiglia: "dino", classe: "uccelli"}
];





    const mammiferi = animali.filter( (animale) => animale.classe === "mammiferi");




console.log(mammiferi)
