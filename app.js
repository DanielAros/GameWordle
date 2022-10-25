const arrayWords = [
'salir','tener','tocar','golpe','hacer','nuevo','deseo','apoyo','valor','poder','crear','miedo','perro','subir','orden','mucho','saber','comer','tomar','largo','pedir','sacar','poner','causa','amigo','bajar','mujer','karma','armar','parte','mundo','nivel','mejor','grupo','feliz','donde','hecho','jugar','decir','carta',
'dulce','bella','claro','final','mayor','luego','snack','bueno','regla','lugar','etapa','sabio','antes','forma','dejar','mirar','tenaz','soñar','tarea','calma','ayuda','ahora','viaje','deber','cerca','ideal','norma','falta','dicha','lleno','hueco','tanto','campo','nunca','papel','girar','frase','suave','punto','libro',
'volar','dueño','señal','otoño','lento','salud','dotar','tarde','libre','culpa','pasar','dolor','breve','friki','yerno','flujo','lindo','capaz','venta','cielo','haber','traer','pluma','abrir','viejo','banal','local','icono','flaco','oveja','labor','rumbo','globo','total','grito','spray','firme','denso','pobre','copia',
'señor','estar','igual','osado','vivir','gordo','senda','chico','ciego','vasto','clase','temor','parar','pagar','creer','serio','veloz','lejos','mismo','honor','optar','sobre','basar','morir','medio','audaz','ufano','error','color','motor','curar','joven','ocaso','parco','dieta','suelo','justo','corte','plano','burdo',
'ganar','echar','grave','grato','broma','gente','pieza','sucio','visto','ajeno','gozar','texto','culto','donar','furor','queja','corto','clave','durar','sueño','usted','brisa','valla','hogar','fondo','obvio','gusto','bello','meter','nacer','cauto','listo','sello','medir','mover','guapa','hasta','fluir','rueda','pausa',
'lecho','tonto','celos','legal','casta','aroma','stock','pegar','punta','dicho','cinta','pasto','beber','ciclo','regar','padre','turno','noche','playa','danza','calor','juego','andar','logro','lucha','bingo','oasis','robar','niños','tejer','recto','azada','madre','negro','grado','verde','sumar','agrio','resta','voraz',
'enojo','vicio','pesar','pelea','fruto','cerdo','burla','falso','cifra','actor','fijar','burro','dudar','junto','carro','monte','deuda','huevo','signo','tapar','tenue','sutil','mente','cargo','pisar','rubro','pista','clima','clara','costa','trama','fauna','linda','trato','notar','marco','axial','zorro','pulso','noble',
'obrar','rigor','obeso','regir','vital','calle','ruido','serie','iluso','favor','topar','autor','guiar','veraz','tirar','ancho','sagaz','shock','dosis','drama','ceder','barco','curso','busca','rogar','guapo','fuera','dañar','prado','marca','cruel','ritmo','avaro','docto','staff','omiso','chica','curva','jaula','llama',
'velar','ojota','ebrio','urdir','baile','nueva','yacer','tenia','stand','gesto','citar','valle','nicho','silla','ganas','sitio','ceñir','negar','vigor','vuelo','bravo','lista','vista','chapa','cueva','cesar','firma','fuego','usado','pacto','letal','flojo','usual','ameno','lucir','buena','pilar','necio','habla','hacia',
'huida','tumba','duelo','astro','venir','canon','jalar','magia','unido','banco','pompa','aquel','agudo','moral','torpe','furia','hobby','aviso','tesis','arduo','digno','rabia','abuso','norte','rival','ojear','genio','faena','raudo','ozono','trozo','valer','ijada','herir','temer','paseo','tapia','apego','coche','fallo',
'vejez','hielo','socio','rural','resto','sanar','cerro','carga','techo','parca','horda','mando','ileso','legar','ligar','rasgo','yerro','humor','terco','mojar','tosco','opaco','sabor','lobby','cagar','leche','pleno','senil','yermo','cabal','pared','feroz','alzar','pavor','poeta','ojera','gasto','otear','ansia','venia',
'canal','soler','mitad','atrio','bruto','pauta','beodo','etnia','bogar','cutre','metal','lucro','droga','borde','surco','harto','dogma','susto','pulir','nieve','menos','raspa','costo','rezar','falaz','sudar','parra','ganso','novio','tedio','presa','toque','lapso','salto','koala','amado','media','santo','relax','lavar',
'menor','ninfa','molde','doble','chino','catar','falla','jerga','alado','rayar','bruja','ruina','radio','errar','rozar','barro','letra','lycra','diosa','regio','quedo','verbo','aunar','tenso','prisa','obice','rumor','plazo','zurdo','carne','rango','poema','secar','besar','odiar','picar','idear','reino','niñez','llave',
'plato','nuera','tumor','anexo','basto','fatal','caber','hilar','atroz','ayuno','ideas','truco','banda','ardid','turba','circo','plaza','gruta','vapor','hueso','hurto','mutuo','cisma','junta','enano','bolso','selva','rampa','garbo','oeste','virus','matiz','rodar','catre','extra','ejote','acero','llano','porte','fugaz',
'mitin','rollo','vagar','botar','salvo','feria','multa','teñir','fatuo','callo','torre','impar','otero','flora','untar','cavar','vedar','ujier','pugna','gesta','batir','zafio','tacto','urgir','nimio','heces','probo','manso','short','telar','mueca','fibra','vetar','ronda','traje','vivaz','casar','peste','coste','aovar',
'trino','nadar','abajo','treta','verso','bolsa','traba','polvo','coser','bulto','barra','disco','pasta','tañer','arena','plaga','yelmo','bulla','pudor','reina','hosco','mimar','novel','votar','monje','atajo','vacuo','fecha','hedor','azote','atado','berma','cuota','curvo','vejar','oxear','ruego','orate','malla','mixto',
'parir','cirio','choza','indio','rubio','barca','manar','brazo','patio','sesgo','nariz','atril','golfo','grano','ajado','yerba','pasmo','cruce','gueto','tribu','tutor','cegar','sobra','trazo','cazar','prosa','pillo','crudo','rugir','morro','panel','himno','asear','ardor','bañar','perla','istmo','cauce','pinta','barba',
'helar','okupa','buque','tenis','dardo','arder','tabla','brote','censo','lanza','finca','fruta','trago','bando','torta','rodeo','quema','pecho','sopor','araña','tieso','sudor','vario','civil','yogur','funda','latir','reñir','cenit','manta','gnomo','falda','hebra','ocupa','recio','musgo','bruma','minar','oreja','zanja',
'preso','apodo','tasar','timar','macho','gorra','rapto','coral','asilo','plata','saldo','savia','casto','canto','nylon','prole','colar','robot','calvo','moler','temas','hondo','cariz','cesta','persa','nimbo','farsa','falto','bomba','pañal','peaje','tropa','bicho','laico','saeta','grasa','placa','brezo','clavo','lerdo',
'terso','halar','acoso','abono','aliar','rotar','añejo','buril','ducha','efebo','yerto','jaleo','cuero','chulo','tallo','canoa','monto','yunta','celda','porra','primo','yegua','acaso','casco','farol','frito','guisa','fuero','desde','trapo','labio','mareo','zafar','trono','ganga','usura','calar','soplo','naipe','zaino',
'penar','cable','aleta','mecha','domar','fiera','aojar','monja','fardo','junco','axila','cubil','pollo','llaga','talud','solaz','pardo','colmo','limar','tibia','cuate','sorna','ultra','halla','beato','cursi','quita','sonda','guion','honra','limbo','brasa','segar','mudar','gorro','podar','justa','rubor','plebe','ornar',
'talla','bazar','esmog','rizar','labia','cebar','doler','cerco','renta','dueto','nevar','hiato','alero','ixtle','lloro','kepis','gramo','talar','apero','pizca','marea','pecar','cabra','blusa','asado','lamer','dorso','glosa','bardo','aforo','aldea','pesca','lente','flota','jadeo','apuro','garra','credo','cobro','cutis',
'vulgo','tinte','crema','argot','gallo','fisco','freno','hipar','natal','hucha','ungir','joder','bedel','video','caqui','palma','secta','prior','magro','ambos','brujo',
]

let indexRandomWord = Math.floor(Math.random() * arrayWords.length);
let chooseWord = arrayWords[indexRandomWord];
// console.log(chooseWord);


let currentStreak = 0;
let plays = 0;
let victories = 0;

//Declare variables
const modal = document.getElementById('winner');
let isWinner = false;

let countLetters = 0;
let selectedRow = 1;

//This object stores the number of characters of the word to be found
let objectChar = {};

/*The function counts how many times a letter apperars in the word and store it in the object
with its key which will be the letter and the value corresponding to the number of times it appears */
const countWordsArray = () => {
    objectChar = {};
    let arrayWords = chooseWord.split('');
    // console.log(arrayWords);
    for(let i = 0; i < arrayWords.length; i++){
        let counter = 0;
        for(let j = 0; j < arrayWords.length; j++){
            if(arrayWords[i] == arrayWords[j]){
                counter++;
            }
        }
        objectChar.hasOwnProperty(`${arrayWords[i]}`) ? '' : objectChar[`${arrayWords[i]}`] = counter;
    }
    // console.log(objectChar);
}

window.addEventListener("keydown", (event) => {
    if(countLetters < 5 && ((event.keyCode >= 65 && event.keyCode <= 90) ||  event.keyCode == 192) &&  selectedRow < 7){
        countLetters += 1;
        let element = document.getElementById(`word${countLetters}`);
        element.append(event.key.toUpperCase());
    }

    if(event.key == 'Backspace' && countLetters > 0 &&  selectedRow < 7){
        let element = document.getElementById(`word${countLetters}`);
        element.innerHTML = '';
        countLetters -= 1;
    }

    if(event.key == 'Enter' && selectedRow < 6){
        checkWordCorrect();
    }else if(event.key == 'Enter' && selectedRow == 6){
        const [counter, word] = isWord(selectedRow);
        if(counter && arrayWords.indexOf(word) != -1){
            isWordToSearch(word);
            selectedRow++;
            // console.log('game over');
            plays += 1;
            victories = Math.round((currentStreak/plays)*100);
            showModal();
        }else if(arrayWords.indexOf(word) != -1 && counter){
            alert('La palabra no esta en la lista');
        }else{
            alert('No hay suficientes letras');
        }
    }
});

const checkWordCorrect = () => {
    const [counter, word] = isWord(selectedRow);
    if(counter && arrayWords.indexOf(word) != -1){
        countLetters = 0;
        let nextRow = selectedRow + 1;
        for(let i = 0; i < 5; i++){
            let currentDiv = document.getElementById(`row${selectedRow}`).children[i];
            currentDiv.removeAttribute('id');
            let nextDiv = document.getElementById(`row${nextRow}`).children[i];
            nextDiv.setAttribute('id', `word${i+1}`);
        }
        if(isWordToSearch(word)){
            isWinner = true;
            currentStreak += 1;
            plays += 1;
            victories = Math.round((currentStreak/plays)*100);
            const bestStreak = localStorage.getItem('bestStreak');
            // console.log(bestStreak)
            if(bestStreak){
                if(currentStreak > bestStreak ){
                    localStorage.setItem('bestStreak', currentStreak.toString());
                }
            }else{
                localStorage.setItem('bestStreak', currentStreak.toString());
            }
            showModal();
        }
        selectedRow += 1;
    }else if(arrayWords.indexOf(word) == -1 && counter){
        alert('La palabra no esta en la lista');
    }else{
        alert('No hay suficientes letras');
    }
}

const listenerKeyboard = (key) => {
    if(countLetters < 5 &&  selectedRow < 7 && key != "Enter" && key != "Backspace"){
        countLetters += 1;
        let element = document.getElementById(`word${countLetters}`);
        element.append(key.toUpperCase());
    }

    if(key == 'Backspace' && countLetters > 0 &&  selectedRow < 7){
        let element = document.getElementById(`word${countLetters}`);
        element.innerHTML = '';
        countLetters -= 1;
    }

    if(key == 'Enter' && selectedRow < 6){
        checkWordCorrect();
    }else if(key == 'Enter' && selectedRow == 6){
        const [counter, word] = isWord(selectedRow);
        if(counter && arrayWords.indexOf(word) != -1){
            isWordToSearch(word);
            selectedRow++;
            // console.log('game over');
            plays += 1;
            victories = Math.round((currentStreak/plays)*100);
            showModal();
        }else if(arrayWords.indexOf(word) != -1 && counter){
            alert('La palabra no esta en la lista');
        }else{
            alert('No hay suficientes letras');
        }
    }
}

//The function checks if the word you type is five letters long.
const isWord = (selectedRow) => {
    let row = document.getElementById(`row${selectedRow}`);
    let counter = 0;
    let word = '';
    for(let i = 0; i < row.childElementCount; i++){
        if(row.children[i].textContent != ''){
            word += row.children[i].textContent;
            counter++;
        }
    }
    return [counter == 5, word.toLowerCase()];
}

//This function changes the color of the container to show whether it is close to hitting the word.
const isWordToSearch = (word) => {
    countWordsArray()
    if(chooseWord == word){
        for(let i = 0; i < 5; i++){
            let div = document.getElementById(`row${selectedRow}`).children[i];
            div.classList.add('green');
            let divKey = document.getElementById(word[i].toUpperCase());
            divKey.classList.remove('default-colorKeys');
            divKey.classList.add('green');
        }
        selectedRow = 7;
        return true;
    }else{
        for(let i = 0; i < 5; i++){
            if(chooseWord[i] == word[i] && objectChar[`${word[i]}`] != 0){
                let div = document.getElementById(`row${selectedRow}`).children[i];
                div.classList.add('green');
                objectChar[`${word[i]}`] -= 1;
                
            }else if(chooseWord.indexOf(word[i]) != -1 && objectChar[`${word[i]}`] != 0){
                let div = document.getElementById(`row${selectedRow}`).children[i];
                div.classList.add('yellow');
                objectChar[`${word[i]}`] -= 1;
                
            }else{
                let div = document.getElementById(`row${selectedRow}`).children[i];
                div.classList.add('gray');
                
            }

            //Color keyboard
            let divKey = document.getElementById(word[i].toUpperCase());
            divKey.classList.remove('default-colorKeys');
            if(chooseWord[i] == word[i]){
                divKey.classList.add('green');
            }else if(chooseWord.indexOf(word[i]) != -1){
                divKey.classList.add('yellow');
            }else{
                divKey.classList.add('gray');
            }
        }
    }

    return false;
}

const showModal = () => { 
    const modal = document.getElementById('winner');
    modal.style.display = 'block';
    

    if(selectedRow != 7){
        document.getElementById('word').innerHTML = ``;
    }else{
        document.getElementById('word').innerHTML = `La palabra era: <b>${chooseWord.toUpperCase()}<b/>`;
    }

    const bestStreak = localStorage.getItem('bestStreak');

    bestStreak ?
        document.getElementById('bestStreak').innerHTML = `${bestStreak}`
    :
        '';

    document.getElementById('plays').innerHTML = `${plays}`;
    document.getElementById('victories').innerHTML = `${victories}%`;
    document.getElementById('current-streak').innerHTML = `${currentStreak}`;
}

const hiddeModal = () => {
    modal.style.display = 'none';
}

//Set initial attributes and restart the game
const reloadGame = () => { 
    hiddeModal();
    countLetters = 0;
    selectedRow = 1;

    for(let i = 0; i < 5; i++){
        let currentDiv = document.getElementById(`row${selectedRow}`).children[i];
        currentDiv.setAttribute('id', `word${i+1}`);
        currentDiv.innerHTML = '';
        currentDiv.removeAttribute('class');
        currentDiv.setAttribute('class', 'columns');
    }

    for(let j = 2; j < 7; j++){
        let nextRow = j;
        for(let i = 0; i < 5; i++){
            let nextDiv = document.getElementById(`row${nextRow}`).children[i];
            nextDiv.removeAttribute('id');
            nextDiv.innerHTML = '';
            nextDiv.removeAttribute('class');
            nextDiv.setAttribute('class', 'columns');
        }   
    }

    for(let i = 0; i < 3; i++){
        let lengthRow = document.getElementById(`rowKeyboard${i+1}`).children.length;
        for(let j = 0; j < lengthRow; j++){
            let divKey = document.getElementById(`rowKeyboard${i+1}`).children[j];
            divKey.removeAttribute('class');
            divKey.setAttribute('class', 'key');
            divKey.classList.add('default-colorKeys')
        }
    }

    indexRandomWord = Math.floor(Math.random() * arrayWords.length);
    chooseWord = arrayWords[indexRandomWord];
    // console.log(chooseWord);
}

const closeRules = (option) => {
    rules = document.getElementById('rules');
    if(option){
        rules.style.display = 'none';
    }else{
        rules.style.display = 'flex';
    }
}


