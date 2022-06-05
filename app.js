const arrayWords = ['QUESO'];

const indexRandomWord = Math.floor(Math.random() * arrayWords.length);
console.log(arrayWords[indexRandomWord]);

let countLetters = 0;
let selectedRow = 1;

window.addEventListener("keydown", (event) => {
    /* console.log(event.key); */
    if(countLetters < 5 && event.keyCode >= 65 && event.keyCode <= 90){
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
        console.log(counter, word);
        if(counter){
            countLetters = 0;
            let nextRow = selectedRow + 1;
            for(let i = 0; i < 5; i++){
                let currentDiv = document.getElementById(`row${selectedRow}`).children[i];
                currentDiv.removeAttribute('id');
                let nextDiv = document.getElementById(`row${nextRow}`).children[i];
                nextDiv.setAttribute('id', `word${i+1}`);
            }
            selectedRow += 1;
            console.log(selectedRow);
        }else{
            alert('No hay suficientes letras');
        }
    }else if(event.key == 'Enter' && selectedRow == 6){
        const [counter, word] = isWord(selectedRow);
        if(counter){
            selectedRow++;
            console.log('game over');
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

const isWordToSearch = () => {
    console.log(arrayWords)
}


