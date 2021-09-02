
const input = document.querySelector(".collatz-number");
const process = document.querySelector('.process');
const displaycount = document.querySelector('.show-data');

process.addEventListener('click', (e) => {
    e.preventDefault();
    const val = input.value;
    displaycount.style.display = "block";
    displaycount.innerHTML = collatz_conjecture(n=val);
});

function collatz_conjecture(n) {
    let count = 0;
    while (n > 1){
        if (n % 2 === 1){
            n = (3 * n) + 1;
        count++;}
        else if (n % 2 != 1){
            n = n/2;
        count++;}
    }
    return count;}
