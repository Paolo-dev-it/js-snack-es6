/* Snack 1
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4 */

/*const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const myNewArray = [];

const min = 2;

const max = 4;

// forEach version

myArray.forEach((element, index) => { 
   
    if (index >= min && index <= max){
        myNewArray.push(element);
    }
});
console.log(myNewArray);*/


// Filter version

/*const people = myArray.filter((element, index) => {
    if (index >= min && index <= max){
        return true;
    }
})

console.log(people);*/




/* Snack 2
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */

/*let students = [
    { name: 'Marco', id: 213, grades: 78 },
    { name: 'Paola', id: 110, grades: 96 },
    { name: 'Andrea', id: 250, grades: 48 },
    { name: 'Gaia', id: 145, grades: 74 },
    { name: 'Luigi', id: 196, grades: 68 },
    { name: 'Piero', id: 102, grades: 50 },
    { name: 'Francesca', id: 120, grades: 84 },
];*/

    //Snack 2 point-1

    /*const namePerson = students.map((element) => {
        return element.name.slice(0).toUpperCase();
    });

    console.log(namePerson);*/

    //Snack 2 point-2

    /*const grades = students.filter((element) => {
        
           return element.grades > 70;
           
        });

      console.log(grades);*/

    //Snack 2 point-3

     /*const idGrades = students.filter((element) => {
         if (element.grades > 70 && element.id >= 120){
             return element.name;
         }
     });

     console.log(idGrades);*/

     
    

/* Snack 3
Creare un array di oggetti: Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso. Stampare a schermo la bici con peso minore utilizzando destructuring e template literal */


/*let array = [
    {nome: 'Orbea', peso: 7 },
    {nome: 'Bianchi', peso: 9 },
    {nome: 'Bottecchia', peso: 6 },
    {nome: 'Specialized', peso: 5 },
    {nome: 'Atala', peso: 10 },
];


let min = Math.min(...array.map(({peso}) => peso));

document.getElementById('peso').innerHTML = "Il peso minimo delle biciclette è " + min; */



/* Snack4
Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti. Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti. Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */


let array = [
    {nome: 'Inter', puntiFatti: 0, falliSubiti: 0 },
    {nome: 'Milan', puntiFatti: 0, falliSubiti: 0 },
    {nome: 'Juve', puntiFatti: 0, falliSubiti: 0 },
    {nome: 'Roma', puntiFatti: 0, falliSubiti: 0 },
];

let array2 = [];

// let randomPoints = array.map(({puntiFatti}) => Math.floor(Math.random(puntiFatti) * 100))

// let randomFoul = array.map(({falliSubiti}) => Math.floor(Math.random(falliSubiti) * 30))

// console.log(randomPoints)

// console.log(randomFoul)

array.forEach((elemento) => {

    let randomPoints = Math.floor(Math.random() * 100);
    let randomFoul = Math.floor(Math.random() * 30);

    elemento.puntiFatti = randomPoints;
    elemento.falliSubiti = randomFoul;
    
})

console.log(array)

