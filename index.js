// Code your solutions in this file
for (let age = 30; age < 40; age ++) {
    console.log(`I am ${age} years old. Happy Birthday to me!`);
    
    debugger;

}

const gifts = ["teddy bear", "drone", "doll"]
function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i ++) {
        console.log(`Wrapped ${gifts[i]} and added a bow`);
        debugger;
    }
    return gifts;
}
wrapGifts(gifts);

function writeCards(Arr, event) {
    let messages = [];
    for (let i = 0; i < Arr.length; i ++) {
      let message = `Thank you, ${Arr[i]}, for the wonderful ${event} gift!`;
     messages.push(message);
    }
    return messages;

}

writeCards(["Charlie", "Samip", "Ali"], "birthday");

function countDown(n)  {
   while  (n >= 0) {
    console.log(n);
    n--;
   }
}

