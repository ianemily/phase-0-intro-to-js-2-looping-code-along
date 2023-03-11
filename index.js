const messageNames = [];

function writeCards(names, value) {
    var cards = [];
    for (let i = 0; i < names.length; i++) {
        cards.push(`Thank you, ${names[i]}, for the wonderful ${value} gift!`);
    }
    return cards;
}

function countDown(value) {
    for (let i = value; i >= 0; i--) {   
        console.log(i); 
    }
}