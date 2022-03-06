//1 - - 
// console.log(hello)
// var hello = 'world'
//After hoisting by interpreter
//var hello;
//console.log(hello) - prints undefined
//hello = 'world' - sets hello to 'world'

// 2 - -
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle)
}
//After hosing by interpreter
//var needle;
//function test(){ var needle = 'manget'; console.log(needle)} - prints magnet
//needle = 'haystack'
//needle = 'haystack'

// 3 - - 
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);
//After hoisting
//var brendan;
// function print()
//console.log(brendan) prints 'super cool'

// 4 - -
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}
//var food;
// function eat 
// console.log(food) - prints chicken
// eat() - prints half-chickenn

// 5 - -
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);
//var mean;
//mean() - not a function, error and ends here


// 6 - - 
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);
// After hoisting
// var genre;
// function rewind()
// console.log(genre) - undefined
// rewind() - prints rock <br> r&b
//console.log(genre) - prints disco


// 7 - - 
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// function learn()
// var dojo;
// dojo = "san joes"
//console.log(dojo) - prints san jose
// learn() prints seattle <br> burbank
// console.log(dojo) - san jose

// 8 (es6 bonus) - - 
console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    const dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
//After hoisting:
//function makeDojo(name, students)
//console.log(makeDojo("Chicago", 65)) - Prints: (name: "chicago", students: 65, hiring: true)
//console.log(makeDojo("Berkeley", 0)) - Error because a const variable (dojo) is defined with an '=' operator












