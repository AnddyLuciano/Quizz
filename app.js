const form = document.querySelector('.form-quizz');
const emoji = ['✅','✨','👀','😭','👎🏼'];
const bonne_reponse = ['a','b','c','b','c'];
const titre_resultat = document.querySelector('.result h2');
const note_resultat = document.querySelector('.note');
const aide_resultat = document.querySelector('.aide');
const toutes_les_questions = document.querySelectorAll('.question-block');
let tabResult = [];
let verif_tableau = []; 


form.addEventListener('submit',function(e){
    e.preventDefault();

    for (let i = 1; i < 6; i++) {
        tabResult.push(document.querySelector(`input[name="q${i}"]:checked`).value);
    }

    //console.log(tabResult);
    verif_func(tabResult);
    tabResult = [];
});

function verif_func(arrResult){
    for (let a = 0; a < 5; a++) {
        if (arrResult[a] === bonne_reponse[a])
            verif_tableau.push(true);
        else
            verif_tableau.push(false);
    }

    //console.log(verif_tableau);
    afficher_resultat(verif_tableau);
    color_function(verif_tableau);
    verif_tableau = [];
}

function afficher_resultat(tabCheck){
    const nbDeFautes = tabCheck.filter(function(el){return  el!== true}).length;
    //console.log(nbDeFautes);

    switch (nbDeFautes) {
        case 0:
            titre_resultat.innerText = "Arabaina! Tsy misy diso ny safidy. ✅";
            aide_resultat.innerText = '';
            note_resultat.innerText = 'Isa azo :5/5';
        break;
        case 1:
            titre_resultat.innerText = "Kely sisa ! ✨";
            aide_resultat.innerText = 'Ovay ny safidy ao amin\'izay miloko mena !';
            note_resultat.innerText = 'Isa azo :4/5';
        break;
        case 2:
            titre_resultat.innerText = "Mbola misy diso 3 ! 👀";
            aide_resultat.innerText = 'Ovay ny safidy ao amin\'izay miloko mena !';
            note_resultat.innerText = 'Isa azo :3/5';
        break;
        case 3:
            titre_resultat.innerText = "Mbola lavitra ny ezaka ! 👀";
            aide_resultat.innerText = 'Ovay ny safidy ao amin\'izay miloko mena !';
            note_resultat.innerText = 'Isa azo :2/5';
        break;
        case 4:
            titre_resultat.innerText = "Avereno fa 1 no mba marina ! 😭";
            aide_resultat.innerText = 'Ovay ny safidy ao amin\'izay miloko mena !';
            note_resultat.innerText = 'Isa azo :1/5';
        break;
        case 5:
            titre_resultat.innerText = "O leretsy e ! 👎🏼";
            aide_resultat.innerText = 'Ovay ny safidy ao amin\'izay miloko mena !';
            note_resultat.innerText = 'Isa azo :0/5';
        break;
    
        default:
            'error';
            break;
    }
}

function color_function(tabCheck){
    for (let j = 0; j< tabCheck.length; j++) {
       if(tabCheck[j] === true){
            toutes_les_questions[j].style.background = 'lightgreen';
       }
       else{
        toutes_les_questions[j].style.background = '#ffb8b8';
           toutes_les_questions[j].classList.add('echec');

           setTimeout(()=>{
            toutes_les_questions[j].classList.toggle('echec');
           },500)
       }    
    }
}

toutes_les_questions.forEach(item=>{
    item.addEventListener('click',()=>{
        item.style.background = "white";
    })
})