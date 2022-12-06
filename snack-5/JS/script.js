/***
 * 
Crea un array di oggetti che rappresentano delle persone.
Ogni persona ha un nome, un cognome e un'età, creiamone almeno una decina.

Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.

 */


const people = [{
    firstName : "Paolo",
    lastName : "Meppe",
    age : 16
},
{
    firstName : "Baolo",
    lastName : "Beppe",
    age : 18
},
{
    firstName : "Xaolo",
    lastName : "Ceppe",
    age : 17
},
{
    firstName : "Daolo",
    lastName : "Deppe",
    age : 19
},
{
    firstName : "Yaolo",
    lastName : "Feppe",
    age : 15
},
{
    firstName : "Raolo",
    lastName : "Geppe",
    age : 14
},
{
    firstName : "Jaolo",
    lastName : "Neppe",
    age : 20
},
{
    firstName : "Waolo",
    lastName : "Leppe",
    age : 18
},
{
    firstName : "Zaolo",
    lastName : "Peppe",
    age : 19
},
{
    firstName : "Saolo",
    lastName : "Reppe",
    age : 16
}
];


const newPeople = people.map((person) => {

    const isMaggiorenne = person.age >= 18;
    return `${person.firstName} ${person.lastName} ${isMaggiorenne ? "può guidare" : "non può guidare"} `;
    
})


console.log (newPeople)