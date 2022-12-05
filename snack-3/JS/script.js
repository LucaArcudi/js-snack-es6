/**
 *
 * Crea 10 oggetti che rappresentano una zucchina, 
 * indicandone per ognuno varietà, peso e lunghezza.
 *
 * Calcola quanto pesano tutte le zucchine.
 *
 */


const zucchini = [{
    varieta : "a",
    peso : 10,
    lunghezza : 1000
},

{
    varieta : "b",
    peso : 8,
    lunghezza : 1000
},

{
    varieta : "c",
    peso : 12,
    lunghezza : 1000
},

{
    varieta : "d",
    peso : 13,
    lunghezza : 1000
},

{
    varieta : "e",
    peso : 10,
    lunghezza : 1000
},

{
    varieta : "f",
    peso : 9,
    lunghezza : 1000
},

{
    varieta : "g",
    peso : 11,
    lunghezza : 1000
},

{
    varieta : "h",
    peso : 11,
    lunghezza : 1000
},

{
    varieta : "i",
    peso : 13,
    lunghezza : 1000
},

{
    varieta : "l",
    peso : 12,
    lunghezza : 1000
},
];


let pesoTot = 0;

for (let i = 0; i < zucchini.length; i++){
    
    pesoTot += zucchini[i].peso;

}

console.log (pesoTot);