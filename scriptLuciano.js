const molecules = document.querySelectorAll('.molecule');
const imagem = document.querySelectorAll('.imagem');

const functionalGroups = document.querySelectorAll('.functional-group');
const scoreElement = document.getElementById('score');
const timeElement = document.getElementById('time');
const startButton = document.getElementById('start-button');
const resetButton = document.getElementById('reset-button');

let score = 0;
let time = 60;
let gameRunning = false;

function initializeGame() {
    molecules.forEach(molecule => {
        molecule.addEventListener('dragover', dragOver);
        molecule.addEventListener('drop', drop);
    });

    imagem.forEach(img => {
        img.addEventListener('dragover', dragOver);
        img.addEventListener('drop', drop);
    });


    functionalGroups.forEach(group => {
        group.addEventListener('dragstart', dragStart);
    });

    startButton.addEventListener('click', startGame);
    resetButton.addEventListener('click', resetGame);

    prepararNovaSequencia();

    
}



function verificarResposta(resposta) {
    
    if (resposta === 'correta') {
        score++;
        scoreElement.textContent = score;
    }
    // Verifica se o número de imagens exibidas é igual ao número total de moléculas
    const imagensCorretas = document.querySelectorAll('.molecule[style*="background-color: green;"]').length;
    
    // Se todas as imagens iniciais já foram respondidas, exiba mais três imagens
    if (imagensCorretas === 3) {
        prepararNovaSequencia();
    }
}
function prepararNovaSequencia() {
    molecules.forEach(molecule => molecule.style.display = 'none');

    const shuffledMolecules = Array.from(molecules);
    shuffleArray(shuffledMolecules);

    for (let i = 0; i < 3; i++) {
        shuffledMolecules[i].style.display = 'inline-block';
    }
    AleatorizarGrupos(shuffledMolecules);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}




function dragOver(event) {
    event.preventDefault();
}

function drop(event) {
    event.preventDefault();
    if (event.target.classList.contains('molecule') || event.target.classList.contains('imagem')) {
        checkMatch(event.target);
    }
}

function checkMatch(molecule) {
    const groupId = functionalGroupBeingDraggedId;

    if (molecule.parentElement.classList.contains(groupId)) {
        molecule.parentElement.style.backgroundColor = 'green';
        score++;
    } else {
        molecule.parentElement.style.backgroundColor = 'red';
    }
    scoreElement.textContent = score;
}


let functionalGroupBeingDraggedId;

function dragStart(event) {
    functionalGroupBeingDraggedId = event.target.id;
    event.dataTransfer.setData('text/plain', '');
}

function startGame() {
    if (!gameRunning) {
        gameRunning = true;
        updateTimer();
        molecules.forEach(molecule => molecule.style.backgroundColor = '#ccc');
        startButton.disabled = true;

        const timer = setInterval(() => {
            time--;
            updateTimer();

            if (time === 0) {
                clearInterval(timer);
                gameRunning = false;
                startButton.disabled = false;
            }
            
        }, 1000);
        prepararNovaSequencia();
    }
}

function updateTimer() {
    timeElement.textContent = time;
}

function resetGame() {
    score = 0;
    time = 60;
    scoreElement.textContent = score;
    timeElement.textContent = time;
    molecules.forEach(molecule => molecule.style.backgroundColor = '#ccc');
}

function MudarEstado(el, mostrarOuEsconder){ //True para mostrar e False para esconder
    debugger
    if(mostrarOuEsconder)
            document.getElementById(el).style.display = 'inline-block';
    else
            document.getElementById(el).style.display = 'none';
}

//function AleatorizarGrupos(){
//    var idGrupos = [];
//    var numeroAleatorio;
//    var k = 0;
//    var numeroRepetido = true;
//    for(var i=0;i<3;i++){
//        numeroAleatorio = Math.floor(Math.random() * 10) + 1;
//            for(var j=0;j<idGrupos.length;j++)
//            {
//                if(numeroAleatorio == idGrupos[j])
//                {
//                    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
//                    j = 0;
//                }
//                
//            }
//        idGrupos.push(numeroAleatorio)
//    }
//    console.log(idGrupos)
//}

function AleatorizarGrupos(array){
    debugger
    for(var i = 0;i<3;i++)
    {
        let idGrupo = array[i].id
        switch (idGrupo) {
            case '1': 
                MudarEstado("ester", true)             
              break;
            case '2':       
                MudarEstado("amida", true)       
              break;
            case '3':  
                MudarEstado("eter", true)            
              break;
            case '4': 
                MudarEstado("alcool", true)             
              break;
            case '5':   
                MudarEstado("amino", true)           
              break;
            case '6':      
                MudarEstado("cetona", true)        
              break;
            case '7':     
                MudarEstado("aldeido", true)         
              break;
            case '8':      
                MudarEstado("aciCarbox", true)        
              break;
            case '9':      
                MudarEstado("anidritoAcetico", true)        
              break;
            case '10':    
                MudarEstado("aciMetano", true)          
              break;
              
    }
}
}

window.onload = initializeGame;