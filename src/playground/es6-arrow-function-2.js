// arguments object - no longer bound with arrow functions 
// can't use the 'arguments' keyword as well
const add = (a, b) => a + b;

// console.log(add(55,1));

// this keyword - no longer bound with arrow functions 
const user = {
    name: 'Andrew',
    cities: ['New York', 'London', 'Philadelphia'],
    printPlacesLived() {
        return this.cities.map((city) => `${this.name} has lived in ${city}`);
    }
    // printPlacesLived: () => { // 'this' value isn't bound
    //     this.cities.forEach((city) => {
    //         console.log(this.name + city);
    //     });
    // }
    // printPlacesLived: function () {
    //     // console.log(this.name);
    //     // console.log(this.cities);

    //     this.cities.forEach((city) => {
    //         console.log(this.name + city);
    //     });
    // }
};

// console.log(user.printPlacesLived());

const multiplier = {
    nums: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
        return this.nums.map((num) => this.multiplyBy * num);
    },
};

console.log(multiplier.multiply());