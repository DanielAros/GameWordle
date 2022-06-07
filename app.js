const arrayWords = ['QUESO', 'KOALA', 'PLUMA', 'POLLO', 'ACTOS', 'APILO', 'BROMA', 'CIEGO', 'CIELO', 'CIRCO', 'CARAS'];

const indexRandomWord = Math.floor(Math.random() * arrayWords.length);
const chooseWord = arrayWords[indexRandomWord];
console.log(chooseWord);

let countLetters = 0;
let selectedRow = 1;

window.addEventListener("keydown", (event) => {
    /* console.log(event.key); */
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
        /* console.log(counter, word); */
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
            /* console.log(selectedRow); */
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
    //console.log(word);
    // console.log(arrayWords[indexRandomWord] == word);
    if(chooseWord == word){
        for(let i = 0; i < 5; i++){
            let div = document.getElementById(`row${selectedRow}`).children[i];
            div.classList.add('green');
        }
        selectedRow = 7;
    }else{
        for(let i = 0; i < 5; i++){
            let div = document.getElementById(`row${selectedRow}`).children[i];
            if(chooseWord[i] == word[i]){
                div.classList.add('green');
            }else{
                if(chooseWord.indexOf(word[i]) != -1){
                    div.classList.add('yellow');
                }else{
                    div.classList.add('gray');
                }
            }
        }
    }
}
