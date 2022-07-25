//NOTE Description: Write a program that simulates the following:

//1. Luggage is loaded into containers as it arrives.

//2. When weight is full (max 40 lbs), the container is then leoaded into the aircraft.

//3. At the detination, the containers are then unloaded from the plan LIFO (last in first out)

//4. Finally the luggage is handed back individually

//EXAMPLE
//Input [30, 5, 6]
//Key Point #1 Loaded into containers: [[30, 5][6]]
//Key Point #2 LIFO Order [[6], [30, 5]]
//Output [6, 30, 5]
//All one function
//Must use loops

//NOTE Challenge: Instead of expecting an array of integers that represents the weight of the luggage, what if it's a string of comma separated integers?

function simulation () {
    let items = Array.from(arguments)
    let luggages = [[,],[]]
    for(let a = 0; a <= items.length; a++ ) {
        if(items[a] + items [a+ 1] <= 40) {
            luggages = new Array(items[a], items [a++])
            console.log(luggages)
        }
        else {
            continue;
        }
    }
};

// simulation(30, 40, 10, 5, 5, 10, 10);

// var items = [30, 5, 40];

// for (let a = 0; a <= items.length; ) {
//   var luggages = [];
//   var maxWeight = 40;
//   var totalWeight = items[a] + items[a + 1];
//   if (totalWeight <= maxWeight) {
//     luggages = items.splice(0, 2);
//   }
//   console.log(luggages);
// }


// const luggages = items.splice(0, 2);

// console.log(luggages);
