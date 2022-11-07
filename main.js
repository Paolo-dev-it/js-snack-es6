/* Snack 1
Dato l'array di nomi:
const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];
e dati due numeri min e max (min più piccolo di max).
Creiamo un nuovo array contenente i valori che hanno la posizione compresa tra i due numeri.
Eseguiamo questo esercizio prima con forEach e poi con filter.
esempio: dati i valori min: 2 e come max: 4 i nomi nell'array nuovo saranno i nomi compresi tra queste posizioni 2 e 4 */

const myArray = ['Michele', 'Fabio', 'Roberto', 'Giovanni', 'Simone', 'Chiara'];

const myNewArray = [];

const min = 2;

const max = 4;

// forEach version

myArray.forEach((element, index) => { 
   
    if (index >= min && index <= max){
        myNewArray.push(element);
    }
});
console.log(myNewArray);


//Filter version

// const people = myArray.filter((element, index) => {
//     if (index >= min && index <= max){
//         return true;
//     }
// })

// console.log(people);

/* Snack 2
1- Dobbiamo creare delle targhe con il loro nome in maiuscolo. Ci serve quindi un nuovo array di stringhe. Ogni elemento del nuovo array sarà il nome dello studente ma con tutte le lettere maiuscole.
2-  Dobbiamo creare un nuovo array con gli studenti che hanno un totale di voti superiore a 70
3-  Dobbiamo creare un nuovo array di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120 */

// let students = [
//     { name: 'Marco', id: 213, grades: 78 },
//     { name: 'Paola', id: 110, grades: 96 },
//     { name: 'Andrea', id: 250, grades: 48 },
//     { name: 'Gaia', id: 145, grades: 74 },
//     { name: 'Luigi', id: 196, grades: 68 },
//     { name: 'Piero', id: 102, grades: 50 },
//     { name: 'Francesca', id: 120, grades: 84 },
// ];

    //Snack 2 point-1

    // const namePerson = students.map((element) => {
    //     return element.name.slice(0).toUpperCase();
    // });

    // console.log(namePerson);

    //Snack 2 point-2

    // const grades = students.filter((element) => {
    //     if(element.grades > 70){
    //        return element.name;
    //        }
    //     });

    //   console.log(grades);

    //Snack 2 point-3

    //  const idGrades = students.filter((element) => {
    //      if (element.grades > 70 && element.id >= 120){
    //          return element.name;
    //      }
    //  });

    //  console.log(idGrades);

     
    

