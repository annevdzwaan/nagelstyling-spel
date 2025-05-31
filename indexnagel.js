console.log("Nagel")

// roept de knoppen op van optieEen
const langVierkantKnop = document.querySelector('#langVierkant')
const kortVierkantKnop = document.querySelector('#kortVierkant') 
const langRondKnop = document.querySelector('#langRond')

// roept de knoppen op van optieTwee
const rozeKnop = document.querySelector('#roze')
const blauweKnop = document.querySelector('#blauw')
const rodeKnop = document.querySelector('#rood')

// roept de knoppen op van optieDrie
const stippenKnop = document.querySelector('#stippen')
const strepenKnop = document.querySelector('#strepen')
const sterrenKnop = document.querySelector('#sterren')

// roept de hand-afbeelding op
const handAfbeelding = document.getElementById('handAfbeelding');

//roept knop voor budget op
const p = document.querySelector('#bedrag')

// roept knop voor random buton op
const randomKnop = document.querySelector('#random');

//geluid muziek
const geluidBudgetOp = new Audio('geluid/geldop.mp3');

//voor randomiser
const vormen = ["handvormlangvierkant", "handvormkortvierkant", "handvormlangrond"];
const kleuren = ["roze", "blauw", "rood"];
const patronen = ["stippen", "strepen", "sterren"];

//variabele voor budget
let huidigBedrag = 60

let nagelVorm = ""
let nagelKleur = ""
let nagelPatroon = ""

//functie voor het budget
function updateBudget(keuzeSoort) {
    if (keuzeSoort === "vorm") {
        huidigBedrag -= 5;
    } else if (keuzeSoort === "kleur") {
        huidigBedrag -= 6;
    } else if (keuzeSoort === "patroon") {
        huidigBedrag -= 4;
    } else if (keuzeSoort === "random") {
        huidigBedrag -= 10;
    }

    //zorgt dta hij nooit op -getal komt
    if (huidigBedrag < 0) huidigBedrag = 0;

    p.textContent = "€" + huidigBedrag;

    // hulp van ChatGPT
    if (huidigBedrag === 0) {
        geluidBudgetOp.play();
    }
}

//Jill geholpen met verschillende dingen
function veranderNagels (){
    handAfbeelding.src = "img/" + nagelVorm + nagelKleur + nagelPatroon +".png"
}

//het aanroepen van de acies van de knoppen
langVierkantKnop.addEventListener('click', () => {
    nagelVorm = "handvormlangvierkant" 
    updateBudget("vorm");
    veranderNagels ()
})

kortVierkantKnop.addEventListener('click', () => {
    nagelVorm = "handvormkortvierkant" 
    updateBudget("vorm");
    veranderNagels ()
})

langRondKnop.addEventListener('click', () => {
    nagelVorm = "handvormlangrond" 
    updateBudget("vorm");
    veranderNagels ()
})

rozeKnop.addEventListener('click',  () => {
    nagelKleur = "roze" 
    updateBudget("kleur");
    veranderNagels ()
})

blauweKnop.addEventListener('click',  () => {
    nagelKleur = "blauw" 
    updateBudget("kleur");
    veranderNagels ()
})

rodeKnop.addEventListener('click',  () => {
    nagelKleur = "rood" 
    updateBudget("kleur");
    veranderNagels ()
})

stippenKnop.addEventListener('click',  () => {
    nagelPatroon = "stippen" 
    updateBudget("patroon");
    veranderNagels ()
})

strepenKnop.addEventListener('click',  () => {
    nagelPatroon = "strepen" 
    updateBudget("patroon");
    veranderNagels ()
})

sterrenKnop.addEventListener('click',  () => {
    nagelPatroon = "sterren" 
    updateBudget("patroon");
    veranderNagels ()
})

//ChatGPT
randomKnop.addEventListener('click', () => {
    if (huidigBedrag < 10) {
        alert("Je hebt niet genoeg geld voor random");
        return;
    }

    // Kies willekeurig uit de arrays
    nagelVorm = vormen[Math.floor(Math.random() * vormen.length)];
    nagelKleur = kleuren[Math.floor(Math.random() * kleuren.length)];
    nagelPatroon = patronen[Math.floor(Math.random() * patronen.length)];

    updateBudget("random");
    veranderNagels();
});


// randomKnop.addEventListener('click', () => {
//     const vormen = ["handvormlangvierkant", "handvormkortvierkant", "handvormlangrond"];
//     const kleuren = ["roze", "blauw", "rood"];
//     const patronen = ["stippen", "strepen", "sterren"];
// })

// //chatGPT
// randomKnop.addEventListener('click', () => {
//     if (huidigBedrag < 10) {
//         alert("Niet genoeg budget voor random!");
//         return;
//     }

//     const vormen = ["handvormlangvierkant", "handvormkortvierkant", "handvormlangrond"];
//     const kleuren = ["roze", "blauw", "rood"];
//     const patronen = ["stippen", "strepen", "sterren"];

//     nagelVorm = vormen[Math.floor(Math.random() * vormen.length)];
//     nagelKleur = kleuren[Math.floor(Math.random() * kleuren.length)];
//     nagelPatroon = patronen[Math.floor(Math.random() * patronen.length)];

//     updateBudget("random");
//     veranderNagels();
// });


// var plaatjesArray = ['handvormlangvierkant','handvormkortvierkant','handvormrond'];

// //functie voor optieEen
// function langVierkantToevoegen(){
//     handAfbeelding.src = "img/handvormlangvierkant.png"
//     huidigeHand = "langVierkant"
//     huidigBedrag = huidigBedrag - 5
//     p.textContent = "€" + huidigBedrag
// }

// //functie voor optieTwee
// function kortVierkantToevoegen(){
//     handAfbeelding.src = "img/handvormkortvierkant.png"
//     huidigeHand = "kortVierkant"
// }

// //functie voor optieDrie
// function langRondToevoegen(){
//     handAfbeelding.src = "img/handvormlangrond.png"
//     huidigeHand = "langRond"
// }

// //fuctie voor opdracht kleur roze dat hij met de hand samen komt
// function rozeToevoegen(){
//     if(huidigeHand == "langVierkant"){
//         handAfbeelding.src = "img/rozelangvierkant.png"
//         huidigeHand = "rozeLangVierkant"
//     } else if(huidigeHand == "kortVierkant"){
        
//     }
    
// }

// let gekozenVorm = false;
// let gekozenKleur = false;
// let gekozenPatroon = false;


  
  
