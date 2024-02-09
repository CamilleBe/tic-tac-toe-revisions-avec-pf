/**
 * PREMIERE REFLEXION
 *
 * [x] 1) Récupérer les cases du plateau du jeu
 * [x] 2) Brancher des écouteurs d'évènements sur le clic
 * [x] 3) Brancher des écouteurs d'évènement pour gérer le survol
 *
 * DEUXIEME REFLEXION
 * [x] 4) Quand on survol une case du jeu, on veut changer la couleur de fond.
 * [x] 5) Quand on quitte le survol de la case on remet la couleur de fond blanc.
 *      - Brancher un écouteur d'évènement sur la sortie de survol.
 *      - Modifier la couleur d'arrière-plan
 * [x] 6) Intégrer le marqueur X dans une case cliquée.
 * [x] 7) Intégrer le marqueur O dans une case cliquée.
 *      - Mettre en place une alternance entre les deux marqueurs.
 * [x] 8) Bloquer une case une fois qu'un joueur a placé un marqueur.
 * [] 9) Détecter s'il y a une combinaison gagnante.
 */

/*7)*/
//let marqueurJ1 = 'X';
//let marqueurJ2 = 'O';
let marqueur;
let isJ1Turn = true;

/**
 * 1)
 * @type {NodeListOf<HTMLElementTagNameMap[string]>}
 */
let cases = document.querySelectorAll('td');
//console.log(cases);

/**
 * 2)
 * Boucle (while/ for / forEach pour Array)
 * forEach c'est pas utilisable car la console renvoie nodeList (sauf si on convertit)
 * Donc on peut utiliser sooit while soit for
 */
for (let i = 0; i < cases.length; i++) {
    cases[i].addEventListener('click', function (){
       //alert('tu as cliqué');

        // 7)
        //[x] Si c'est le tour du J1
        //[x] Alors on place le marqueur X dans la case
        //[x] On modifie le booleen pour dire que ce n'est plus à J1 de jouer
        //[x] Sinon c'est le tour de J2 on place le marqueur O dans la case
        //[x] On remodifie le booleen pour indiquer que c'est au tour de J1

        //8)
        //Si la case est libre (il n'y a pas de marqueur dedans) faire étape 7

        if (this.textContent === '') {

            if (isJ1Turn === true) {
                //this.textContent = "X";
                //this.textContent = marqueurJ1;
                marqueur = 'X';
                isJ1Turn = false;

            } else {
                //this.textContent = "O";
                //this.textContent = marqueurJ2;
                marqueur = "O";
                isJ1Turn = true;
            }

            this.textContent = marqueur;

        } else {
            alert('case non dispo');
        }

        if (winner(marqueur)) {
            alert(`le joueur ${marqueur} a gagné !`);
        }

    });

    // 3)
    cases[i].addEventListener('mouseenter', function (){
        //console.log('hover');
        this.style.backgroundColor = 'lightgrey';
    });

    cases[i].addEventListener('mouseleave', function (){
        this.style.backgroundColor = 'white';
    });
}

// 9)
function winner(marqueur) {
    // si notre marqueur est présent sur la première ligne du plateau, alors on a un gagnant
    if (cases[0].textContent === marqueur && cases[1].textContent === marqueur && cases[2].textContent === marqueur) {

        return true;
    }
    return false;
}
