var nameVar = 'andrew';
// var nameVar = 'mike'; // var you can redefine and reset 
console.log('nameVar', nameVar);

let nameLet = 'jen';
// let nameLet = 'blah'; // you cannot redefine let variables 
nameLet = 'julie'; // but you can reassign 
console.log('nameLet', nameLet);

const nameConst = 'sam'; // you cannot redefine OR reassign
console.log('nameConst', nameConst);

////////
function getPetName() {
    var petName = 'hal';
    return petName
}

// Block scoping 

var fullName = 'andrew mead';
if (fullName) {
    // var firstName = fullName.split(' ')[0];
    var firstName = fullName.split(' ')[0]; // const and let are block scoped (cannot refer outside of the scope)
    console.log(firstName);
}

console.log(firstName); 