// Code your solutions in this file

const gifts = ["teddy bear", "drone", "doll"];

function wrapGift(gift) {
    console.log(`Wrapped ${gift} and added a bow!`);
}
wrapGift(gifts[0]);
wrapGift(gifts[1]);
wrapGift(gifts[2]);

// for loop for([initialization]; [condition]; [iteration]){[loop body]}
for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
}

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
    }

    return gifts;
}

wrapGifts(gifts);

// Declare the array of names outside the function
function writeCards(names, eventName) {
    let thankYouMessages = [];

    for (let i = 0; i < names.length; i++) {
        thankYouMessages.push(`Thank you, ${names[i]}, for the wonderful ${eventName} gift!`);
        debugger;  
    }

    return thankYouMessages;
}

function countDown(number) {
    for (let i = number; i >= 0; i--) {
        console.log(i);
    }
}