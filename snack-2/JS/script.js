/**
 * 
   Crea un array composto da 10 automobili.
   Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

   Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.
   Infine stampa separatamente i 3 array.
 */



const car = [{
    marca: "z",
    modello: 0,
    alimentazione: "diesel"
},
{
    marca: "a",
    modello: 1,
    alimentazione: "diesel"
},
{
    marca: "b",
    modello: 2,
    alimentazione: "diesel"
},
{
    marca: "c",
    modello: 3,
    alimentazione: "benzina"
},
{
    marca: "d",
    modello: 4,
    alimentazione: "benzina"
},
{
    marca: "e",
    modello: 5,
    alimentazione: "metano"
},
{
    marca: "f",
    modello: 6,
    alimentazione: "gpl"
},
{
    marca: "g",
    modello: 7,
    alimentazione: "elettrico"
},
{
    marca: "h",
    modello: 8,
    alimentazione: "elettrico"
},
{
    marca: "i",
    modello: 9,
    alimentazione: "benzina"
}
];


const carDiesel = [];

const carBenza= [];

const carOthers = [];


for( let i = 0; i < car.length; i++){

    for (const key in car[i]) {

        if ( alimentazione = "diesel"){
            carDiesel.push(car[i]);
            console.log ( car [i])            
        }
    
    }
    

}


