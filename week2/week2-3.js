// 1
function arguments(a, b, c){return a + b + c;}

//2
function colorCar (carColor) { console.log(`a ${carColor} car`);}
colorCar("red");
//a red car
colorCar("blue");
//a blue car


//3
function objects(obj, objName) { 
    var result = '' ; for (var noObject in obj) { if (obj.hasOwnProperty(noObject)) {
        result += objName + '.' + noObject + ' = ' + obj[noObject] ; }}
         return result;}

var myCar = new Object();
myCar.make = 'ford';
myCar.model = 'mustang';
myCar.year = 1969;

objects (myCar , "myCar")
//'myCar.make = fordmyCar.model = mustangmyCar.year = 1969'

//4
function vehicleType(color, number){var n = ["car", "motorbike", "bicycle"];console.log("a " + "" + n[number - 1]);}


//5
3 === 3 ? console.log("yes") : console.log("no");

//6
function vehicle(color, number, age){var m =["car", "motorbike", "bicycle"];
var condition = 1 < age ? "used" : "new";console.log("a " + color + "" + condition + "" + m[namber - 1]);}

//7
let vehicles = ["motorbike", "caravan", "bike", "car", "truck"];

//8
console.log(vehicles[2]);
//bike

//9
function vehicle(color, number, age){var condition = 1 < age ? "used" : "new";
console.log("a " + "" + condition + "" + vehicles[number - 1]);}

//10
let version = "Amazing Joe's Garage, we service";for(let v = 0; v < vehicles.length; ++v)
{ version += ` ${vehicles[v]}s` + (v > 0 && v + 2 === vehicles.length ? " and": v + 1 === vehicles.length ? ".":"," )};

//11
//yes we can do this by:
vehicles.push("what we want to add")

//12
let noObject = {};

//13
let hyfTeachers = { htmlcss: "philip", git: "unmesh,bonan", javascript1: "mauro" }

//14
hyfTeachers.language = 'English';

//15
let x = [1,2,3];
let y = [1,2,3];
let z = y;

console.log(z);
//[ 1, 2, 3 ]
console.log(x == y);
//false
console.log(x === y);
//false
console.log(z == y);
//true
console.log(z === y);
//true

//16
let o1 = { foo: 'bar' };
let o2 = { foo: 'bar' };
let o3 = o2;
o1.foo = "otherthings";
console.log(o1);
//{ foo: 'otherthings' }
console.log(o2);
//{ foo: 'bar' }
console.log(o3);
//{ foo: 'bar' }
o2.foo = "nothing";
console.log(o1);
//{ foo: 'otherthings' }
console.log(o2);
//{ foo: 'nothing' }
console.log(o3);
//{ foo: 'nothing' }

//Does the order that you assign (o3 = o2 or o2 = o3) matter?
//yes of course it's mean o2 equal o3 that mean any change for o2 o3 will be change also

//17
let bar = 42;
typeof typeof bar;
//'string'
// it's return string becuse when we do typeof one time it's show 'number'
// and typeof tupeof bar that mean the number value in the qouts and it's a string




