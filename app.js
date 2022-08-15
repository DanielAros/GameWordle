const arrayWords = ['QUESO', 'KOALA', 'PLUMA', 'POLLO', 'ACTOS', 'APILO', 'BROMA', 'CIEGO', 'CIELO', 'CIRCO', 'CARAS'];

const indexRandomWord = Math.floor(Math.random() * arrayWords.length);
const chooseWord = arrayWords[indexRandomWord];
//const chooseWord = 'POLLO';
console.log(chooseWord);

let countLetters = 0;
let selectedRow = 1;

//This object stores the number of characters of the word to be found
let objectChar = {};

/*The function counts how many times a letter apperars in the word and store it in the object
with its key which will be the letter and the value corresponding to the number of times it appears */
const countWordsArray = () => {
    objectChar = {};
    let arrayWords = chooseWord.split('');
    console.log(arrayWords);
    for(let i = 0; i < arrayWords.length; i++){
        let counter = 0;
        for(let j = 0; j < arrayWords.length; j++){
            if(arrayWords[i] == arrayWords[j]){
                counter++;
            }
        }
        objectChar.hasOwnProperty(`${arrayWords[i]}`) ? '' : objectChar[`${arrayWords[i]}`] = counter;
    }
    console.log(objectChar);
}

window.addEventListener("keydown", (event) => {
    if(countLetters < 5 && event.keyCode >= 65 && event.keyCode <= 90 &&  selectedRow < 7){
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
            isWordToSearch(word);
            selectedRow += 1;
        }else if(arrayWords.indexOf(word) == -1 && counter){
            alert('La palabra no esta en la lista');
        }else{
            alert('No hay suficientes letras');
        }
    }else if(event.key == 'Enter' && selectedRow == 6){
        const [counter, word] = isWord(selectedRow);
        if(counter && arrayWords.indexOf(word) != -1){
            isWordToSearch(word);
            selectedRow++;
            console.log('game over');
        }else if(arrayWords.indexOf(word) != -1 && counter){
            alert('La palabra no esta en la lista');
        }else{
            alert('No hay suficientes letras');
        }
    }
});

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
    return [counter == 5, word];
}


//This function changes the color of the container to show whether it is close to hitting the word.
const isWordToSearch = (word) => {
    countWordsArray()
    if(chooseWord == word){
        for(let i = 0; i < 5; i++){
            let div = document.getElementById(`row${selectedRow}`).children[i];
            div.classList.add('green');
        }
        selectedRow = 7;
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
        }
    }
}
