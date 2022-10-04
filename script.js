
// document.addEventListener('click', )
// .addEventListener('click', function () {
//     console.log('hello', this);
// })

let cards = document.getElementsByClassName('card');

for (let i=0; i < cards.length; i++) {
    console.log('Значение i=',i + ' ', cards[i]);
}

document.getElementById('sidebar').addEventListener("click", function(){ console.log('click!', this) });