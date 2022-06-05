/* let elemeto = document.querySelector('table').addEventListener('change', (item) => {
    console.log(item.path[0].value)
    // console.log(item.path[0].attributes);
}); */

let countWords = 1;

window.addEventListener("keydown", (event) => {
    console.log(event.key);
    if(countWords <= 5 && event.key != 'Backspace' ){
        let element = document.getElementById(`word${countWords}`);
        element.append(event.key.toUpperCase());
        countWords < 5 ? countWords += 1 : countWords = 5;
    }
    if(event.key == 'Backspace' && countWords > 0){
        let element = document.getElementById(`word${countWords}`);
        console.log(element.innerHTML)
        element.innerHTML = '';
        countWords > 1 ? countWords -= 1 : countWords = 1;
        /* countWords -= 1; */
    }
    console.log(countWords);
});
