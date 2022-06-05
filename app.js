let countWords = 0;
let selectedRow = 1;

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if(countWords < 5 && event.keyCode >= 65 && event.keyCode <= 90){
        countWords += 1;
        let element = document.getElementById(`word${countWords}`);
        element.append(event.key.toUpperCase());
    }
    if(event.key == 'Backspace' && countWords > 0){
        let element = document.getElementById(`word${countWords}`);
        element.innerHTML = '';
        countWords -= 1;
    }
    if(event.key == 'Enter'){
        countWords = 0;
        let nextRow = selectedRow + 1;
        for(let i = 0; i < 5; i++){
            let currentDiv = document.getElementById(`row${selectedRow}`).children[i];
            currentDiv.removeAttribute('id');
            let nextDiv = document.getElementById(`row${nextRow}`).children[i];
            nextDiv.setAttribute('id', `word${i+1}`);
        }
        selectedRow += 1;
    }
});

